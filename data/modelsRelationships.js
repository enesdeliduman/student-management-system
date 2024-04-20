const Lesson = require("../models/Lesson.js");
const Student = require("../models/Student.js");
const Teacher = require("../models/Teacher.js");
const Grade = require("../models/Grade.js");
const Class = require("../models/Class.js");
const Parent = require("../models/Parent.js");
const { sequelize } = require("../data/databaseConnect.js")

const relationships = async function () {
    // Öğrenci ve Veli arasındaki ilişki
    Student.belongsTo(Parent, { foreignKey: 'parentId' });
    Parent.hasMany(Student, { foreignKey: 'parentId' }); // Birden fazla öğrencinin aynı veliye ait olmasını sağlar

    // Ders ve Öğrenci arasındaki ilişki
    Student.belongsToMany(Lesson, { through: Grade });
    Lesson.belongsToMany(Student, { through: Grade });

    // Ders ve Öğretmen arasındaki ilişki
    Lesson.belongsToMany(Teacher, { through: 'LessonTeacher' }); // Birden fazla öğretmenin aynı dersi verebilmesini sağlar
    Teacher.belongsToMany(Lesson, { through: 'LessonTeacher' }); // Bir dersin birden fazla öğretmen tarafından verilmesini sağlar

    // Notlar ve Öğrenci arasındaki ilişki
    Grade.belongsTo(Student);
    Student.hasMany(Grade);

    // Notlar ve Ders arasındaki ilişki
    Grade.belongsTo(Lesson);
    Lesson.hasMany(Grade);

    // Sınıf ve öğretmen
    Class.belongsTo(Teacher);
    Teacher.hasOne(Class);

    // Sınıf ve öğrenci
    Class.hasMany(Student);
    Student.belongsTo(Class);

    await sequelize.sync();

};
relationships();

module.exports = relationships;