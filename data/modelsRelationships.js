const Lesson = require("../models/Lesson.js");
const Student = require("../models/Student.js");
const Teacher = require("../models/Teacher.js");
const Grade = require("../models/Grade.js");
const Class = require("../models/Class.js");
const Parent = require("../models/Parent.js");
const Level = require("../models/Level.js");
const Group = require("../models/Group.js");
const { sequelize } = require("../data/databaseConnect.js");
const Field = require("../models/Field.js");
const GroupLessons = require("../models/GroupLessons.js");

const relationships = async function () {
    
    // Öğrenci ve Veli arasındaki ilişki
    Student.belongsTo(Parent, { foreignKey: 'parentId' });
    Parent.hasMany(Student, { foreignKey: 'parentId' }); // Birden fazla öğrencinin aynı veliye ait olmasını sağlar

    // Ders ve Grup arasındaki ilişki
    Group.belongsToMany(Lesson, { through: GroupLessons });
    Lesson.belongsToMany(Group, { through: GroupLessons });

    // Ders ve Öğretmen arasındaki ilişki
    Lesson.belongsToMany(Teacher, { through: 'LessonTeacher' });
    Teacher.belongsToMany(Lesson, { through: 'LessonTeacher' });

    // Notlar ve Öğrenci arasındaki ilişki
    Grade.belongsTo(Student);
    Student.hasMany(Grade, { foreignKey: 'studentId' });

    // Notlar ve Ders arasındaki ilişki
    Grade.belongsTo(Lesson);
    Lesson.hasMany(Grade, { foreignKey: 'lessonId' });

    // Grup ve öğrenci
    Group.hasMany(Student);
    Student.belongsTo(Group);

    // Grup ve öğretmen
    Teacher.hasMany(Group);
    Group.belongsTo(Teacher);

    // Alan ve grup
    Field.hasMany(Group);
    Group.belongsTo(Field);

    // Class ve Group
    Group.belongsTo(Class);
    Class.hasMany(Group);

    // Level ve öğrenci
    Level.hasMany(Group);
    Group.belongsTo(Level);

    await sequelize.sync();

};
relationships();

module.exports = relationships;