const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
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

/**
 * Map the routes
 */
app.use(ver1, user);

module.exports = app;
