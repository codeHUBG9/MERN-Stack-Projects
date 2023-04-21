const User = require("../models/user");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const errorHandler = require("../utils/errorHandler");
const { findByIdAndUpdate } = require("../models/user");

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

/**
 * Login User => /api/v1/login
 */
exports.userLogin = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  //Check email and password is entered by user or not
  if (!email || !password) {
    return next(new errorHandler("Please enter user credentials", 400));
  }
  //Find use in database
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new errorHandler("User Not Found", 401));
  }

  //Check if Password is correct or not
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return next(new errorHandler("Invalid user credentials", 401));
  }
  res.status(200).json({
    success: true,
    user: user,
  });
});

/**
 * Update user profile => /api/v1/me/update/:id
 */
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };
  //Update Avatar TODO
  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  if (!user) {
    return next(new errorHandler("User Not Found", 401));
  }
  res.status(200).json({
    success: true,
  });
});

/**
 * Admin Routes- Delete user  => /api/v1/admin/user/:id
 */
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new errorHandler(`User not found for id : ${req.params.id}`));
  }
  //  Remove Avatar from couldnary TODO
  user.remove();
  res.status(200).json({
    success: true,
    message: "User deleted !",
  });
});
