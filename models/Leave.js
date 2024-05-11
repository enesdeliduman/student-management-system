const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Leave = sequelize.define('leave', {
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: Date.now
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: "ACİL DURUM"
    },
    type: {
        type: DataTypes.STRING,
        defaultValue: "ÜCRETLİ"
    },
});

module.exports = Leave;