const express = require("express");
const { UserModel } = require("../models/UserModel"); // Need this imported somewhere in the server code to make the server connection use Users
const router = express.Router();

router.get("/", async (request, response, next) => {

	let result = await UserModel.find({}).exec();

	response.json({
		message:"User router operation",
		result: result
	});
});


router.get("/findById/:id", async (request, response, next) => {

	let result = await UserModel.findById(request.params.id).exec();

	response.json({
		message:"User router operation",
		result: result
	});
});

router.post("/findOneQuery", async (request, response, next) => {

	let result = await UserModel.findOne(request.body).exec();

	response.json({
		message:"User router operation",
		result: result
	});
});

router.post("/findManyQuery", async (request, response, next) => {

	let result = await UserModel.find(request.body).exec();

	response.json({
		message:"User router operation",
		result: result
	});
});


router.post("/", async (request, response, next) => {

	let result = await UserModel.create(request.body).catch(error => {
		error.status = 400;
		return error
	});

	if (result.errors) {
		return next(result);
	}

	response.json({
		message:"User router operation",
		result: result
	});
});

router.patch("/findById/:id", async (request, response, next) => {

	let result = await UserModel.findByIdAndUpdate(
		request.params.id, 
		request.body,
		{
			returnDocument: "after"
		}
	);

	response.json({
		message:"User router operation",
		result: result
	});
});

router.delete("/", async (request, response, next) => {

	let result = await UserModel.findByIdAndDelete(request.body.id);

	response.json({
		message:"User router operation",
		result: result
	});
});

module.exports = router;