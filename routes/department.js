// express router function returns a router object
const router = require("express").Router();

// import the Department model
const Department = require("../models/department");
const Employee = require("../models/employee");

// get all departments
router.get("/departments", (req, res) => {
  // find all departments using the Department model
  Department.findAll({
    include: Employee,
  })
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

// post a new department
router.post("/departments", (req, res) => {
  // create a new department using the Department model
  Department.create({
    name: req.body.name,
  })
    .then((department) => {
      res.status(200).send(department);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

// export the router
module.exports = router;
