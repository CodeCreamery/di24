document
.getElementById("preferenceForm")
.addEventListener("submit", function (event) {
	event.preventDefault();

	const selectedDateType = document.querySelector(
		'input[name="dateType"]:checked'
	)
	? document.querySelector('input[name="timeOfDay"]:checked').value
		: "Not selected";

	const selectedTimeOfDay = document.querySelector(
		'input[name="timeOfDay"]:checked'
	)
		? document.querySelector('input[name="timeOfDay"]:checked').value
		: "Not selected";

	const selectedBudget = document.querySelector(
		'input[name="budget"]:checked'
	)
		? document.querySelector('input[name="budget"]:checked').value
		: "Not selected";
	
	const selectedcockballs = document.querySelector(
		'input[name="cockball"]:checked'
	)
		? document.querySelector('input[name="cockball"]:checked').value
		: "Not selected";

	console.log("Selected date type:", selectedDateType);
	console.log("Preferred time of day:", selectedTimeOfDay);
	console.log("Budget for the date:", selectedBudget);
	console.log("coac");
		
		// Serialize form data into JSON
const formData = {};
new FormData(document.getElementById("preferenceForm")).forEach((value, key) => {
	formData[key] = value;
});
console.log(formData);
// Send the JSON data to the server

fetch('/submit-form', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(formData)
})
.then(response => {
	// Handle response from server if needed
})
.catch(error => {
	console.error('Error:', error);
});
});