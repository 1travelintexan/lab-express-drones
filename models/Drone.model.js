// Iteration #1
const { Schema, model } = require("mongoose");

//The schema or parameters for the drones to meet before they can enter the DB
const droneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

const drones = model("Drone", droneSchema);

module.exports = drones;
