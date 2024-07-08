const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");
const { student } = require("../controllers/adminController");

AttendanceStudent.init({}, {
    sequelize,
    modelName: 'AttendanceStudent',
    timestamps: false
});

module.exports = AttendanceStudent;