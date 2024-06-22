const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Parent = sequelize.define("parent", {
    fullName: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: {
                msg: "İsim boş olamaz"
            }
        }
    },
    telephoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: {
                msg: "Telefon numarası boş olamaz"
            },
            isNumeric: {
                msg: "Telefon numarası sadece rakamlardan oluşmalıdır"
            }
        }
    }
});

module.exports = Parent;
