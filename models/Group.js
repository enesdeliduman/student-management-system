const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Group = sequelize.define('group', {
    name: {
        type: DataTypes.STRING,
        unique: true
    }
});


module.exports = Group;