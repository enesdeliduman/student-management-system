const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Teacher = sequelize.define("teacher", {
    fullName: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //     notNull: { msg: "İsim gereklidir" },
        //     notEmpty: { msg: "İsim boş olamaz" },
        //     isTwoWords(value) {
        //         if (value.split(' ').length < 2) {
        //             throw new Error("İsim en az iki kelime olmalıdır");
        //         }
        //     }
        // }
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    telephoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //     notNull: { msg: "Telefon numarası gereklidir" },
        //     notEmpty: { msg: "Telefon numarası boş olamaz" }
        // }
    },
    dateOfEmployment: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        // validate: {
        //     notNull: { msg: "Doğum tarihi gereklidir" },
        //     notEmpty: { msg: "Doğum tarihi boş olamaz" },
        //     isDate: { msg: "Doğum tarihi geçerli bir tarih olmalıdır" }
        // }
    },
    tcNo: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //     notNull: { msg: "TC No gereklidir" },
        //     notEmpty: { msg: "TC No boş olamaz" }
        // }
    }
});

module.exports = Teacher;
