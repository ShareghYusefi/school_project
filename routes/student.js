// express router function returns a router object
const router = require("express").Router();

// import the Student model
const Student = require("../models/student");

// get all students
router.get("/students", (req, res) => {
  // find all students using the Student model
  Student.findAll()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

// post a new student
router.post("/students", (req, res) => {
  // create a new student using the Student model
  Student.create({
    name: req.body.name,
    level: req.body.level,
  })
    .then((student) => {
      res.status(200).send(student);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

// patch method for updating an student
router.patch("/students/:id", (req, res) => {
  // find the student by id
  Student.findByPk(req.params.id)
    .then((student) => {
      // update the student record
      student.name = req.body.name;
      student.level = req.body.level;

      // save the updated student record
      student
        .save()
        .then((student) => {
          res.status(200).send(student);
        })
        .catch((err) => {
          res.status(err.status).send(err.message);
        });
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

// delete an student
router.delete("/students/:id", (req, res) => {
  // find the student by id
  Student.findByPk(req.params.id)
    .then((student) => {
      // We can access model methods from the returned promise object
      student
        .destroy()
        .then((student) => {
          res.status(200).send(student);
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
