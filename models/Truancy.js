const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Truancy = sequelize.define('truancy', {
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: Date.now
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: "Tüm gün"
    }
});

module.exports = Truancy;