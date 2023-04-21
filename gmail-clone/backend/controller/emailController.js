const Email = require("../models/email");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const errorHandler = require("../utils/errorHandler");

/**
 * Save send emails    /api/v1/save
 */

exports.saveSendEmails = catchAsyncErrors(async (req, res, next) => {
	const email = await new Email(req.body);
	const result = await email.save();

	res.status(201).json({
		success: true,
		msg: `Email saved successfully`,
	});
});

/**
 * Get emails    /api/v1/emails/:type
 */

exports.getEmails = catchAsyncErrors(async (req, res, next) => {
	let emails;
	const paramsType = req.params.type;

	switch (paramsType) {
		case "starred":
			emails = await Email.find({ starred: true, bin: false });
			break;
		case "bin":
			emails = await Email.find({ starred: false, bin: false });
			break;
		case "allmail":
			emails = await Email.find({});
			break;
		case "inbox":
			emails = [];
			break;
		default:
			emails = await Email.find({ type: paramsType });
			break;
	}

	res.status(200).json(emails);
});

/**
 * Star Email    /api/v1/starred
 */

exports.toggleStarredEmail = catchAsyncErrors(async (req, res, next) => {
	const email = await Email.updateOne(
		{ _id: req.body.id },
		{ $set: { starred: req.body.value } }
	);

	res.status(200).json({
		success: true,
		email: email,
	});
});

/**
 *  Delete single email  => /api/v1/email/:id
 */

exports.deleteEmail = catchAsyncErrors(async (req, res, next) => {
	const email = await Email.findById(req.params.id);
	if (!email) {
		return next(new errorHandler("Email not found"));
	}

	await Email.deleteOne({ _id: req.params.id });

	res.status(200).json({
		success: true,
		message: "Email deleted !",
	});
});

/**
 *  Delete many emails  => /api/v1/emails
 */
exports.deleteEmails = catchAsyncErrors(async (req, res, next) => {
	await Email.deleteMany({ _id: { $in: req.body } });

	res.status(200).json({
		success: true,
		message: "Emails deleted !",
	});
});

/**
 *  Move email to bin  => /api/v1/bin
 */
exports.moveEmailsToBin = catchAsyncErrors(async (req, res, next) => {
	await Email.updateMany(
		{ _id: { $in: req.body } },
		{ $set: { bin: true, starred: false, type: "" } }
	);
});
