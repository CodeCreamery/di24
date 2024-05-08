document.addEventListener("DOMContentLoaded", function () {
	const socket = io(); // Connect to the WebSocket server
	const roomId = getRoomIdFromUrl(); // Extract roomId from URL

	document
		.getElementById("preferenceForm")
		.addEventListener("submit", (event) => {
			event.preventDefault();

			// Serialize form data into JSON
			const formData = {
				roomId: roomId,
				dateTypes: [],
				budget: null,
				timeOfDay: null,
			};

			// Collect data for multiple selections of date types
			document
				.querySelectorAll('input[name="dateType"]:checked')
				.forEach((checkbox) => {
					formData.dateTypes.push(checkbox.value);
				});

			formData.budget = document.querySelector(
				'input[name="budget"]:checked'
			)?.value;
			formData.timeOfDay = document.querySelector(
				'input[name="timeOfDay"]:checked'
			)?.value;

			// Emit the form data to the server via Socket.IO
			socket.emit("submitForm", formData);

			// Handle the response from the server
			// Error handling or additional feedback could be implemented here
		});
});

function getRoomIdFromUrl() {
	const urlSegments = window.location.pathname.split("/");
	return urlSegments[urlSegments.length - 1]; // Gets the last segment of the URL
}
