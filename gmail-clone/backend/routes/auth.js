const express = require("express");
const router = express.Router();

const {
  registerUser,
  userLogin,
  updateProfile,
  deleteUser,
} = require("../controller/authController");

router.route("/register").post(registerUser);
router.route("/login").post(userLogin);
router.route("/me/update/:id").put(updateProfile);
router.route("/admin/user/:id").delete(deleteUser);

module.exports = router;
