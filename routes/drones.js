const express = require("express");
const { Mongoose } = require("mongoose");
const router = express.Router();
//this will let me access the DB
const Drones = require("../models/Drone.model.js");
// require the Drone model here

// Iteration #2: List the drones
router.get("/drones", (req, res, next) => {
  // get the drones from the DB
  Drones.find().then((allDrones) => {
    console.log(allDrones);
    //render DB elements to page
    //never start with / in render!!!
    res.render(`drones/list.hbs`, { allDrones });
  });
});

// Iteration #3: Add a new drone
router.get("/drones/create", (req, res, next) => {
  Drones.create().then(() => {
    //show form page
    res.render("drones/create-form.hbs");
  });
});

// Iteration #3: Add a new drone
router.post("/drones/create", (req, res, next) => {
  //check info being sent from user
  const { title, propellers, maxSpeed } = req.body;
  console.log(title, propellers, maxSpeed);
  //create new element with this info
  Drones.create({ title, propellers, maxSpeed })
    .then((data) => {
      //send the user somewhere
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Iteration #4: Update the drone
router.get("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;

  Drones.findById(id)
    //show the form (update-form.hbs)
    .then((data) => {
      res.render("update-form.hbs", { data });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Iteration #4: Update the drone
router.post("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;

  //get the body elements from post
  const { title, propellers, maxSpeed } = req.body;
  // use the body to update the DB
  Drones.findByIdAndUpdate(id, { titl, propellers, maxSpeed })
    .then((data) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Iteration #5: Delete the drone

router.post("/drones/:id/delete", (req, res, next) => {
  //get id from user
  const { id } = req.params;
  //now delete the element
  Drones.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/drones");
    })
    .catch(() => {
      console.log(err);
    });
});

module.exports = router;
