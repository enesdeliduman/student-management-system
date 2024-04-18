// parent.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Parent = sequelize.define("parent", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telephoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Parent;
