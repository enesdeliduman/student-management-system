const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

let now = new Date

const Teacher = sequelize.define("teacher", {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telephoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "5419440253",
    },
    dateOfEmployment: {
        type: DataTypes.DATEONLY,
        defaultValue: Date.now
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date("2003-12-28"),
    }
});

module.exports = Teacher;