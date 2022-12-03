const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		first_name: "John",
		last_name: "Doe",
		department: "Engineering"
	});

	const dummyTask = await Task.create({
		description: "Build space rocket",
        priority_level: "Low",
        completion_level: false
	});

	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;