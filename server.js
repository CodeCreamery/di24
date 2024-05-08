const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const dateidea = require("./api/controllers/ideaPicker.js");
const compareSubmissions = require("./api/controllers/compareSubmissions.js");
// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

const roomData = {};
app.get("/new-room", (req, res) => {
	const roomId = Math.random().toString(36).substring(2, 9); // Create a simple unique ID
	res.redirect(`/room/${roomId}`); // Redirect user to the room URL
});

app.get("/room/:roomId", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "room.html"));
});

io.on("connection", (socket) => {
	socket.on("joinRoom", (roomId) => {
		if (!roomId) {
			console.error("Room ID is undefined on joinRoom");
			return;
		}

		socket.join(roomId);
		console.log(`User joined room: ${roomId}`);

		if (!roomData[roomId]) {
			roomData[roomId] = {
				users: [],
				submissions: [],
			};
		}

		// Add the user to the room data if not already included
		if (!roomData[roomId].users.includes(socket.id)) {
			roomData[roomId].users.push(socket.id);
		}
	});

	// Handle form submission through Socket.IO
	socket.on("submitForm", (formData) => {
		const roomId = formData.roomId; // Get the room ID

		if (!roomData[roomId]) {
			roomData[roomId] = {
				users: [],
				submissions: [],
			};
		}

		console.log(
			`Form data received from user ${socket.id} in room ${roomId}:`,
			formData
		);

		// Process the data as needed
		const response = dateidea.getDateIdea(
			formData.dateTypes,
			formData.timeOfDay,
			formData.budget
		);

		roomData[roomId].submissions.push({
			userId: socket.id,
			ideas: response,
		});

		// Emit a response back to the client
		socket.emit("formResponse", response);

		if (roomData[roomId].submissions.length === 2) {
			// Assuming 2 users per room
			const results = compareSubmissions.compareSubmissions(
				roomData[roomId].submissions
			);
			io.to(roomId).emit("comparisonResults", results);
			// Optionally reset the room data if no more interactions are expected
			delete roomData[roomId];
		}
	});

	// Further handling for messages or interactions
});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
