function compareSubmissions(submissions) {
	// Implement comparison logic here. Example: Comparing date types

	// Destructuring the array to extract both objects
	const [user1, user2] = submissions;

	// Further destructuring to extract properties from each user object
	const { userId: userId1, ideas: ideas1 } = user1;
	const { userId: userId2, ideas: ideas2 } = user2;

	console.log("User 1 ID:", userId1);
	console.log("User 1 Ideas:", ideas1);
	console.log("User 2 ID:", userId2);
	console.log("User 2 Ideas:", ideas2);

	const matching = [];
	let i = 0;
	let j = 0;

	while (i < ideas1.length) {
		j = 0;
		while (j < ideas2.length) {
			if (ideas1[i] === ideas2[j]) {
				matching.push(ideas1[i]);
			}
			j++;
		}
		i++;
	}
	console.log(matching);
}

module.exports = { compareSubmissions };
