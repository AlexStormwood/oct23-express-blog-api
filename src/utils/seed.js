const { UserModel } = require("../models/UserModel");
const { databaseConnect, databaseClear, databaseClose } = require("./database");


async function seedUsers () {
	let userData = [
		{
			username: "alex"
		},
		{
			username: "pikachu"
		}
	];

	let result = await UserModel.insertMany(userData)
	console.log(result);
	return result;
}


async function seedBlogPosts (usersToUse) {
	
}


async function seed(){

	await databaseConnect();
	await databaseClear();

	let newUsers = await seedUsers();
	let newBlogs = await seedBlogPosts(newUsers);

	console.log("Seeded data!");
	await databaseClose();
}

seed();