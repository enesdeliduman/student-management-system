const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Teacher = sequelize.define("teacher", {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Teacher;