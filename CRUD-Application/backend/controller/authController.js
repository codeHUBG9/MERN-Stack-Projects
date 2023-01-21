const User = require("../models/user");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

/**
 * Register a user    /api/v1/register
 */
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name: name,
    email: email,
    password: password,
    avatar: {
      public_id: "",
      url: "",
    },
  });

  res.status(201).json({
    success: true,
    user: user,
  });
});
