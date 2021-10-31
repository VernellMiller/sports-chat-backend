const express = require("express");
const router = express.Router();

// I want this to route to the player the is selected
// the will come from an API
router.get("/player", (req, res) => {
    res.send("this is working");
});

module.exports = router;