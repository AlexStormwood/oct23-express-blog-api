const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();


async function databaseConnect(){

	// if (process.env.NODE_ENV == "production"){
	// 	databaseUrl = process.env.DATABASE_URL_PRODUCTION
	// }
	let databaseURL = process.env.DATABASE_URL;

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