// Require Dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const { application } = require("express");
const teamsController = require("./controllers/teams");
const playersController = require("./controllers/players");

// Initialize Express App
const app = express();

//Configure Settings
require("dotenv").config();
const { DATABASE_URL, PORT=3001 } = process.env;

// Configure connection to MongoDB
mongoose.connect(DATABASE_URL);
const db = mongoose.connection;

db.on("connected", () => console.log("Connected to mongoDB"));
db.on("disconnected", () => console.log("Disconnected to mongoDB"));
db.on("error", (error) => console.log("MongoDB has an error" + error.message));

//Mount Middleware


    // attaches a Access-Control-Allow-Origin header to the response
app.use(cors()); 
app.use(express.json()); // creates req.body
app.use(morgan("dev"));
// app.use("/teams, teamsController");
app.use("/", playersController);

// Mount Routes
app.get("/api", (req, res) => {
     res.jason({message: "Welcome to the React Sports Chat API"})
});

app.get("/api/*", (req, res) => {
    res.status(404).jason({message: "That route is not found"});
});

// Listen
app.listen(PORT, () => {
    console.log(`You are now listening to the smooth sounds of typing on port: ${PORT}`);
});