const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const showSchema = new Schema({
    team: { type: String },
    image: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    position: { type: String },
    heightFeet: { type: String },
    heightInches: { type: String },
    weight: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Players", showSchema);