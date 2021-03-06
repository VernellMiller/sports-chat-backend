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

// New Routes

// Delete Route
Router.delete("/Players/:id", async (req,res) => {
    try {
        res.json(await Players.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
})

//Update Route
Router.put("/players/:id", async (req, res) => {
    try {
        res.json(await Players.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new: true})
        );
    } catch (error) {
        res.status(400).json(error);
    }
})


// Create Route
Router.post("/players", async (req, res) => {
    try {
        res.json(await Players.create(req.body));
    } catch (error) {
        res.status(400).json(error); 
    }
});

// Edit Route

// Show Route

module.exports = Router;