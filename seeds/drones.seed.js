// Iteration #1
//connect to DB with mongoose
require("../db");

// Seeded Drones (first in the DB)
const myDrones = [
  { name: "Sky Surfer", propellers: 4, maxSpeed: 18 },
  { name: "The Twinny", propellers: 2, maxSpeed: 12 },
  { name: "The John John", propellers: 6, maxSpeed: 25 },
];

const mongoose = require("mongoose");
const Drones = require("../models/Drone.model.js");

Drones.create({ myDrones })
  .then(() => {
    console.log("3 Drones seeded");
    // close the connection
    mongoose.connection.close();
  })
  .catch(() => {
    console.log("There was a problem seeding!");
  });
