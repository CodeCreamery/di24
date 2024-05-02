const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from 'public' directory
app.use(express.static("public"));

io.on("connection", (socket) => {
	console.log(`New user connected: ${socket.id}`);

	// Handling joining a room
	socket.on("joinRoom", (room) => {
		socket.join(room);
		console.log(`User ${socket.id} joined room: ${room}`);
	});

	// Handling button presses within rooms
	socket.on("buttonPressed", (data) => {
		io.to(data.room).emit("updateButtons", data.buttonId);
		console.log(`Button ${data.buttonId} was pressed in room ${data.room}`);
	});

	socket.on("disconnect", () => {
		console.log("User disconnected");
	});
});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
