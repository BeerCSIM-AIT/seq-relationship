const db = require("../models");
const Tutorial = db.tutorials;
const Tag = db.tags;
const Op = db.Sequelize.Op;

exports.getAll = ((req, res)=>{
    // res.json({ message: "Hello from product." })
    Tutorial.findAll(
      { 
        include: [{
          model: Tag,
          as : 'tags',
        }]
      }
    )
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