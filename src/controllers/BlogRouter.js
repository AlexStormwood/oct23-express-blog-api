const express = require("express");
const { BlogModel } = require("../models/BlogModel");
const { UserModel } = require("../models/UserModel"); // Need this imported somewhere in the server code to make the server connection use Users
const router = express.Router();

router.get("/", async (request, response, next) => {

	let result = await BlogModel.find({}).populate("author").exec();

	response.json({
		message:"Blog router homepage",
		result: result
	});
});


router.get("/:id", (request, response, next) => {
	response.json({
		message:"Blog router homepage"
	});
});

router.post("/", (request, response, next) => {
	response.json({
		message:"Blog router homepage"
	});
});

router.put("/", (request, response, next) => {
	response.json({
		message:"Blog router homepage"
	});
});

router.delete("/", (request, response, next) => {
	response.json({
		message:"Blog router homepage"
	});
});

module.exports = router;