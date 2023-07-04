const db = require("../models");
const Category = db.categories;
const Op = db.Sequelize.Op;

exports.getAll = ((req, res)=>{
    // res.json({ message: "Hello from product." })
    Category.findAll({ include: ['products']})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
  })