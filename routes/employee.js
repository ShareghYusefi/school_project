// express router function returns a router object
const router = require("express").Router();

// import the Employee model
const Employee = require("../models/employee");

// get all employees
router.get("/employees", (req, res) => {
  // find all employees using the Employee model
  Employee.findAll()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

// post a new employee
router.post("/employees", (req, res) => {
  // create a new employee using the Employee model
  Employee.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    salary: req.body.salary,
    createdAt: new Date(),
    updatedAt: new Date(),
    department_Id: req.body.department_Id,
  })
    .then((employee) => {
      res.status(200).send(employee);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

// patch method for updating an employee
router.patch("/employees/:id", (req, res) => {
  // find the employee by id
  Employee.findByPk(req.params.id)
    .then((employee) => {
      // update the employee record
      employee.firstName = req.body.firstName;
      employee.lastName = req.body.lastName;
      employee.salary = req.body.salary;
      employee.updatedAt = new Date();
      employee.department_Id = req.body.department_Id;

      // save the updated employee record
      employee
        .save()
        .then((employee) => {
          res.status(200).send(employee);
        })
        .catch((err) => {
          res.status(err.status).send(err.message);
        });
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

// delete an employee
router.delete("/employees/:id", (req, res) => {
  // find the employee by id
  Employee.findByPk(req.params.id)
    .then((employee) => {
      // We can access model methods from the returned promise object
      employee
        .destroy()
        .then((employee) => {
          res.status(200).send(employee);
        })
        .catch((err) => {
          res.status(err.status).send(err.message);
        });
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

// export the router
module.exports = router;
