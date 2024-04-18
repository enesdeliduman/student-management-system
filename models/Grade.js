const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Grade = sequelize.define("grade", {
    grade: {
        type: DataTypes.INTEGER,
    },
    examNumber: {
        type: DataTypes.INTEGER
    }
});

module.exports = Grade;