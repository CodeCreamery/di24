const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get("/", (req, res) => {
	res.send("Welcome to the Date Planner!");
});

io.on("connection", (socket) => {
	console.log("A user connected");

	socket.on("createSession", (sessionId) => {
		socket.join(sessionId);
		console.log(`User joined session: ${sessionId}`);
	});

	socket.on("dateIdea", (data) => {
		// broadcast date idea to all users in the same session
		io.to(data.sessionId).emit("newDateIdea", data.idea);
	});

	socket.on("finalizeDate", (data) => {
		io.to(data.sessionId).emit("dateFinalized", data.idea);
	});

	socket.on("disconnect", () => {
		console.log("User disconnected");
	});
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
