const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const GroupLessons = sequelize.define('group_lessons', {
    teacherId: {
        type: DataTypes.INTEGER,
        unique: true
    }
});


module.exports = GroupLessons;