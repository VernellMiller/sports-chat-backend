const express = require("express");
const Router = express.Router();
const Player = require("../models/player");

//Index Route
Router.get("/player", async (req, res) => {
    // res.jason(await Player.find({}));
    // or
    try {
        const player = await Player.find({});
        res.jason(player);
        
    } catch (error) {
        res.status(400).jason(error);
    }
});



module.exports = Router;