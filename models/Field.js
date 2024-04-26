const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Field = sequelize.define('field', {
    name: {
        type: DataTypes.STRING,
        unique: true
    }
});


module.exports = Field;