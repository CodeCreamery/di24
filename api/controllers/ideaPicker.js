//dont look
function getDateIdea(type, timeOfDay, budget) {
	let ideas = [];

	// First level: Type of Date
	for (let i = 0; i < type.length; i++) {
		switch (type[i]) {
			case "Dining":
				switch (budget) {
					case "High":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("GO EAT YUMYUM KFC");
						}
						break;
					case "Medium":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					case "Low":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					default:
						ideas.push("broke ass(you arent supposed to see this)");
				}
				break;
			case "Outdoor":
				switch (budget) {
					case "High":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					case "Medium":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					case "Low":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					default:
						ideas.push("broke ass(you arent supposed to see this)");
				}
				break;
			case "Cultural":
				switch (budget) {
					case "High":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					case "Medium":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					case "Low":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					default:
						ideas.push("broke ass(you arent supposed to see this)");
				}
			case "Entertainment":
				switch (budget) {
					case "High":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					case "Medium":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					case "Low":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					default:
						ideas.push("broke ass(you arent supposed to see this)");
				}
				break;
			case "Adventure":
				switch (budget) {
					case "High":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					case "Medium":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					case "Low":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					default:
						ideas.push("broke ass(you arent supposed to see this)");
				}
				break;
			case "Relaxation":
				switch (budget) {
					case "High":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					case "Medium":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					case "Low":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					default:
						ideas.push("broke ass(you arent supposed to see this)");
				}
				break;
			case "Educational":
				switch (budget) {
					case "High":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					case "Medium":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					case "Low":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					default:
						ideas.push("broke ass(you arent supposed to see this)");
				}
				break;
			case "Seasonal":
				switch (budget) {
					case "High":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					case "Medium":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					case "Low":
						if (timeOfDay === "morning") {
							ideas.push("a");
						} else if (timeOfDay === "evening") {
							ideas.push("b");
						} else {
							ideas.push("c");
						}
						break;
					default:
						ideas.push("broke ass(you arent supposed to see this)");
				}
				break;
			default:
				ideas.push("Break up xDDD (you arent supposed to see this)");
				break;
		}
	}

	return ideas;
}

module.exports = {
	getDateIdea,
};
