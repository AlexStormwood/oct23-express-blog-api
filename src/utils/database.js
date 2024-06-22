const mongoose = require("mongoose");

async function databaseConnect(){
	let databaseURL = process.env.DATABASE_URL || "mongodb://localhost:27017/oct23-blog-db";

	await mongoose.connect(databaseURL);
	console.log("Database connecting completed!");
}

async function databaseClose(){
	// Disconnect from database 
	await mongoose.connection.close();
	console.log("DB is disconnected!");
}

async function databaseClear(){
	// Delete all data in database
	await mongoose.connection.db.dropDatabase();
}

module.exports = {
	databaseConnect,
	databaseClose,
	databaseClear
}