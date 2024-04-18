const { DataTypes } = require("sequelize");
const {sequelize} = require("../data/databaseConnect");

const Lesson = sequelize.define("lesson", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Lesson;