const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const FieldLessons = sequelize.define('field_lessons', {

});


module.exports = FieldLessons;