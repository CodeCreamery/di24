const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/new-room", (req, res) => {
	const roomId = Math.random().toString(36).substring(2, 9); // Create a simple unique ID
	res.redirect(`/room/${roomId}`); // Redirect user to the room URL
});

app.get("/room/:roomId", (req, res) => {
	res.sendFile(__dirname + "/public/room.html");
});

io.on("connection", (socket) => {
	socket.on("joinRoom", (roomId) => {
		socket.join(roomId);
		console.log(`User joined room: ${roomId}`);
	});

	// Further handling for messages or interactions
});

app.post('/submit-form', (req, res) => {
    // Parse JSON data sent from client
    const formData = req.body;
    
    // Access form fields from formData object
    console.log('Received form data:', formData);

    // Process the form data as needed
    // For example, save to a database, perform validation, etc.

    // Send a response back to the client if needed
    res.send('Form data received successfully!');
});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});


