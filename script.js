// First of all print out all staff objects seperately on the console.

for (stf of staff) {
	console.log(stf);
}

// staff.map((stf) => console.log(stf));

//===================================================================================

// Now, create a “fullName” function inside the objects.and make fullname with the concatenation of firstname and lastname.

const fullNames = (arr) => {
	let names = [];
	for (stf of staff) {
		names.push(stf.firstName + ' ' + stf.lastName);
	}
	return names;
};

console.log(fullNames(staff));

//===================================================================================

// Find all older than 21 age staff, print them out.

for (stf of staff) {
	if (stf.age > 21) {
		console.log(stf.firstName + ' ' + stf.lastName);
	}
}

// staff
// 	.filter((stf) => stf.age > 21)
// 	.map((stf) => console.log(stf.firstName + ' ' + stf.lastName));

//===================================================================================

// Sort staff according to their experience. From low to high.

console.log(
	staff
		.sort((a, b) => a.experience - b.experience)
		.map((stf) => [stf.firstName + ' ' + stf.lastName, stf.experience]),
);

//===================================================================================

// Calculate the average age of the staff.

console.log(staff.reduce((acc, age) => acc + age.age, 0) / staff.length);

//===================================================================================

// You are trying to find a staff exect properties:
// •	Staff should Turkish languange spoken,
// •	Staff should under age 40,
// •	Staff active status should be true,
// Filter out all matching objects and write them another array.
// •	Sort this filtered items by older to younger age.

console.log(
	staff
		.filter(
			(stf) => stf.language == 'Turkish' && stf.age < 40 && stf.isActive,
		)
		.sort((a, b) => b.age - a.age)
		.map((stf) => [stf.firstName + ' ' + stf.lastName, stf.age]),
);
