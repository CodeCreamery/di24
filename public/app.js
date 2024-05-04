document
	.getElementById("preferenceForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		const selectedDateType = document.querySelector(
			'input[name="dateType"]:checked'
		).value;
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

		console.log("Selected date type:", selectedDateType);
		console.log("Preferred time of day:", selectedTimeOfDay);
		console.log("Budget for the date:", selectedBudget);
	});
