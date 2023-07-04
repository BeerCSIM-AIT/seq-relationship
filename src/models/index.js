const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

/* Define Models */
db.products = require("./product.model.js")(sequelize, Sequelize);
db.employees = require("./employee.model.js")(sequelize, Sequelize);
db.customers = require("./customer.model.js")(sequelize, Sequelize);
db.categories = require("./category.model.js")(sequelize, Sequelize);
db.Users = require("./user.model.js")(sequelize, Sequelize);

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.tags = require("./tag.model.js")(sequelize, Sequelize);

/* Define relationship */
db.categories.hasMany(db.products, { as : "products" });
db.products.belongsTo(db.categories, { as: "category" });

db.tags.belongsToMany(db.tutorials, {
  through: "tutorial_tag",
  as: "tutorials",
});
db.tutorials.belongsToMany(db.tags, {
  through: "tutorial_tag",
  as: "tags",
});


module.exports = db;