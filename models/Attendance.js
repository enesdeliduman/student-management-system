const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");
const { student } = require("../controllers/adminController");

let now = new Date

const Attendance = sequelize.define("attendances", {
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: Date.now
    },
    lesson: {
        type: DataTypes.INTEGER,
    },
    confirm: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    }
});
module.exports = Attendance;