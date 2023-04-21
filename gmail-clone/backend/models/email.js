const mongoose = require("mongoose");

const EmailSchema = mongoose.Schema({
	to: {
		type: String,
		required: [true, "Please enter to"],
	},
	from: {
		type: String,
		required: [true, "Please enter from"],
	},
	subject: String,
	body: String,
	date: {
		type: Date,
		required: [true, `Please enter date`],
		default: Date.now,
	},
	image: String,
	name: {
		type: String,
		required: [true, "Please enter name"],
	},
	starred: {
		type: Boolean,
		default: false,
	},
	bin: {
		type: Boolean,
		default: true,
	},
	type: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	modifiedAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("email", EmailSchema);
