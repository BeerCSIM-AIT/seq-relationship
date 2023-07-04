module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    name:{ type: Sequelize.STRING(100) }
  });

  return Category
}