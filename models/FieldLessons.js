const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const FieldLessons = sequelize.define('fieldlessons', {

});


module.exports = FieldLessons;