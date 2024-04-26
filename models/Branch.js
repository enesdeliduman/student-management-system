const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Branch = sequelize.define('branch', {
    name: {
        type: DataTypes.STRING,
        unique: true
    }
});


module.exports = Branch;