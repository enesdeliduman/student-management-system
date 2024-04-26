const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const GroupLessons = sequelize.define('groupLessons', {
    teacherId: {
        type: DataTypes.INTEGER,
        unique: true
    }
});


module.exports = GroupLessons;