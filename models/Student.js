const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Student = sequelize.define("student", {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tcNo: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "yok"

  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "photo2.jpeg"

  },
  telephoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "5419440253",
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    defaultValue: new Date("2003-12-28"),
  },
});

module.exports = Student;
