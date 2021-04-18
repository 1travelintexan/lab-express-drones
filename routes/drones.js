const express = require("express");
const { Mongoose } = require("mongoose");
const router = express.Router();
//this will let me access the DB
const Drones = require("../models/Drone.model.js");
// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // get the drones from the DB
  Drones.find().then((allDrones) => {
    console.log(allDrones);
    //render DB elements to page
    //never start with / in render!!!
    res.render(`drones/list.hbs`, { allDrones });
  });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  Drones.create().then(() => {
    res.render("drones/create-form.hbs");
  });
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
