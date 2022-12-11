const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		first_name: "John",
		last_name: "Doe",
		department: "Engineering"
	});

	const dummyEmployee1 = await Employee.create({
		first_name: "Hello",
		last_name: "Kitty",
		department: "HR"
	});

	const dummyTask = await Task.create({
		description: "Build space rocket",
        priority_level: "Low",
		completion_status: "Not Completed"
	});

	const dummyTask1 = await Task.create({
		description: "Fire John",
        priority_level: "Low",
		completion_status: "Not Completed"
	});

	await dummyTask.setEmployee(dummyEmployee);
	await dummyTask1.setEmployee(dummyEmployee1);
	
}

module.exports = seedDB;