const express = require("express");
const { BlogModel } = require("../models/BlogModel");
const router = express.Router();

router.get("/", async (request, response, next) => {

	let result = await BlogModel.find({}).exec();

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