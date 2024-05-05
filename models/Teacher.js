const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Teacher = sequelize.define("teacher", {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Teacher;