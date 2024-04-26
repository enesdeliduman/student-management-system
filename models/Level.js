const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Level = sequelize.define('level', {
    name: {
        type: DataTypes.STRING,
        unique: true
    }
});


module.exports = Level;