const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Role = sequelize.define('role', {
    name: {
        type: DataTypes.STRING,
        unique: true
    }
});

module.exports = Role;