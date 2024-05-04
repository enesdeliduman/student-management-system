const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Student = sequelize.define("student", {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING,
        allowNull:false
    },
    telephoneNumber: {
        type: DataTypes.STRING,
        allowNull:true
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date("2003-12-28")
    }
});

module.exports = Student;