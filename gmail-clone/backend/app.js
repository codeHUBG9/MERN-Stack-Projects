const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/errors");
/**
 * Middleware
 */
//
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * Api Versioning
 */
const ver1 = "/api/v1";

/**
 * Import All Routes
 */
const user = require("./routes/auth");
const email = require("./routes/email");

/**
 * Map the routes
 */
app.use(ver1, user);
app.use(ver1, email);

//Custom Middleware to handle error
app.use(errorMiddleware);

module.exports = app;
