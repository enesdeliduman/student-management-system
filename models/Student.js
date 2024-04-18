const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Student = sequelize.define("student", {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    class: {
        type: DataTypes.STRING
    },
    photo: {
        type: DataTypes.STRING
    }
});

module.exports = Student;
// x name
// sınıf
// ogretmen
// dersler
// notlar
// ortalama
// x Fotograf
// Veli