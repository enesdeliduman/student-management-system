const Lesson = require("../models/Lesson.js");
const Student = require("../models/Student.js");
const Teacher = require("../models/Teacher.js");
const Grade = require("../models/Grade.js");
const Parent = require("../models/Parent.js");
const { sequelize } = require("../data/databaseConnect.js")

const relationships = async function () {
    // Öğrenci ve Veli arasındaki ilişki
    Student.belongsTo(Parent, { foreignKey: 'parentID' });

    // Ders ve Öğrenci arasındaki ilişki
    Student.belongsToMany(Lesson, { through: Grade });
    Lesson.belongsToMany(Student, { through: Grade });

    // Ders ve Öğretmen arasındaki ilişki
    Lesson.belongsTo(Teacher, { foreignKey: 'teacherId' });
    Teacher.hasMany(Lesson);

    // Notlar ve Öğrenci arasındaki ilişki
    Grade.belongsTo(Student);
    Student.hasMany(Grade);

    // Notlar ve Ders arasındaki ilişki
    Grade.belongsTo(Lesson);
    Lesson.hasMany(Grade);
};
relationships();

module.exports = relationships;