const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
	console.log("A user connected: " + socket.id);

	socket.on("joinRoom", (room) => {
		socket.join(room);
		console.log(`User ${socket.id} joined room: ${room}`);
	});

	socket.on("buttonPressed", (data) => {
		io.to(data.room).emit("buttonUpdate", data.buttonId);
	});

	socket.on("disconnect", () => {
		console.log("User disconnected");
	});
});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
