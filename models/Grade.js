const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");
const Student = require("./Student");
const Lesson = require("./Lesson");


const Grade = sequelize.define('grade', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Student,
            key: "id"
        },
    },
    lessonId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Lesson,
            key: "id"
        },
    },
    grade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{timestamps:true});


module.exports = Grade;