const express = require("express");
const router = express.Router();

router.get("/", (request, response, next) => {
	response.json({
		message:"Blog router homepage"
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