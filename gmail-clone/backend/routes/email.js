const express = require("express");
const router = express.Router();
const {
	saveSendEmails,
	getEmails,
	toggleStarredEmail,
	deleteEmail,
	deleteEmails,
	moveEmailsToBin,
} = require("../controller/emailController");

router.post("/save", saveSendEmails);
router.post("/save-draft", saveSendEmails);
router.get("/emails/:type", getEmails);
router.post("/starred", toggleStarredEmail);
router.delete("/delete/:id", deleteEmail);
router.delete("/delete", deleteEmails);
router.post("/bin", moveEmailsToBin);

module.exports = router;
