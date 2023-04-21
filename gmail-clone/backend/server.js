const dotenv = require("dotenv");
const app = require("./app");
const connectDatabase = require("./config/database");

/**
 * Handle Uncaught Exception
 */
process.on("uncaughtException", (err) => {
	console.log(`Message : ${err.message}`);
	console.log(`Error : ${err.stack}`);
	console.log("Shutting down the server due to uncaught Exception!");
	process.exit(1);
});
/**
 * setting up config file
 */
dotenv.config({ path: "backend/config/config.env" });
/**
 * Connect with Database
 */
connectDatabase();

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
	console.log(
		`Server is running on the PORT: ${PORT} in ${process.env.NODE_ENV} mode.`
	);
});

/**
 * Handle Unhandled Promise Rejection
 */
process.on("unhandledRejection", (err) => {
	console.log(`Error : ${err.message}`);
	console.log("Shutting down the server due to Unhandled Promise Rejection");
	server.close(() => {
		process.exit(1);
	});
});
