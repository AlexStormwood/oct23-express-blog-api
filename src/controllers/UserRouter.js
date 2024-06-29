const express = require("express");
const { UserModel } = require("../models/UserModel"); // Need this imported somewhere in the server code to make the server connection use Users
const { comparePasswords, createJwt, decodeJwt } = require("../utils/authHelpers");
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

	console.log("User signup body is:");
	console.log(request.body);

	let result = await UserModel.create(request.body).catch(error => {
		error.status = 400;
		console.log("Error on creating a user", error);
		return error
	});

	let jwt = createJwt(result._id);
	let decodedJwt = decodeJwt(jwt);

	if (result.errors) {
		return next(result);
	}

	response.json({
		message:"User router operation",
		result: result,
		jwt: jwt,
		decodedJwt
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



// Login route 
router.post("/jwt", async (request, response, next) => {
	let newJwt = "";

	if (!request.body.password || !request.body.username){
		return next(new Error("Missing login details in login request."));
	}

	// Find user by username in DB
	let foundUser = await UserModel.findOne({username: request.body.username}).exec();

	console.log(request.body, foundUser);

	// Compare request.body.password to foundUser.password using the compare function 
	let isPasswordCorrect = await comparePasswords(request.body.password, foundUser.password);


	// Create a JWT based on foundUser._id 
	if (isPasswordCorrect){

		newJwt = createJwt(foundUser._id);

		response.json({
			jwt: newJwt
		});
	} else {
		return next(new Error("Incorrect password."));
	}

	
})

// Validate JWT route 




module.exports = router;