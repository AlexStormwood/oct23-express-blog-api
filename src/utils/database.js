const mongoose = require("mongoose");

async function databaseConnect(){
	let databaseURL = process.env.DATABASE_URL || "mongodb://localhost:27017/oct23-blog-db";

	await mongoose.connect(databaseURL);
	console.log("Database connecting completed!");
}

module.exports = {
	databaseConnect
}