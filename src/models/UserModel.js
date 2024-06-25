/*
- username
- blog post view history 
*/

const mongoose = require("mongoose");
const { commentSchema } = require("./CommentSchema");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	viewHistory: {
		type: [{ type: mongoose.Schema.Types.ObjectId, ref:"Blog"}],
		required: false, 
		unique: false
	},
	password: {
		type: String, 
		required: true, 
		unique: false
	}
	// isAdmin // boolean for role authorization 
	// comments: {
	// 	// These are NOT the same comments as what the Blogs contain, they just reuse the comment schema
	// 	types: [commentSchema],
	// 	required: false
	// }
});


userSchema.pre(
	"save",
	async function (next) { 
		const user = this;
		console.log("Pre-save hook running.");

		if (!user.isModified("password")){
			return next();
		}

		console.log("Pre-save hook runnin and password is modified!");
		// if we reach this line of code, the password is modified
		// and thus is not encrypted!
		// we must encrypt it!

		console.log("Raw password is: " + this.password);
		
		const hash = await bcrypt.hash(this.password, 10);

		console.log("Hashed and encrypted and salted password is: " + hash)

		this.password = hash;

		next();
	}
)



const UserModel = mongoose.model("User", userSchema);

module.exports = {
	UserModel
}