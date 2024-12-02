const mongoose = require("mongoose");

// Database connection URL
const dbURL = "mongodb://127.0.0.1:27017/ShiftLeft1";

// Connect to the MongoDB database
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });

// Event listeners for the Mongoose connection
const db = mongoose.connection;

// Listen for errors after the initial connection
db.on('error', (error) => {
    console.error("Database connection error:", error);
});

// Listen for successful reconnections
db.on('connected', () => {
    console.log("Mongoose reconnected to the database");
});

// Listen for disconnection events
db.on('disconnected', () => {
    console.log("Mongoose disconnected from the database");
});

// Properly close the Mongoose connection on application termination
process.on('SIGINT', () => {
    db.close(() => {
        console.log("Mongoose connection closed due to application termination");
        process.exit(0);
    });
});
