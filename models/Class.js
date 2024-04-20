const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Class = sequelize.define("class", {
    name: {
        type: DataTypes.INTEGER,
    }
});
module.exports = Class;