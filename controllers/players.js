const express = require("express");
const Router = express.Router();
const Players = require("../models/players");

//Index Route
Router.get("/players", async (req, res) => {
    // const players = await Players.find({});
    // res.jason(players);
    // or
    try {
        res.json(await Players.find({}));
        
    } catch (error) {
        res.status(400).json(error);
    }
});

// Create Route
Router.post("/players", async (req, res) => {
    try {
        res.json(await Players.create(req.body));
    } catch (error) {
        res.status(400).json(error); 
    }
});

module.exports = Router;