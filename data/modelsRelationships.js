const Truancy = require("../models/Truancy.js");
const Leave = require("../models/Leave.js");
const Lesson = require("../models/Lesson.js");
const Student = require("../models/Student.js");
const Teacher = require("../models/Teacher.js");
const User = require("../models/User.js");
const Class = require("../models/Class.js");
const Branch = require("../models/Branch.js");
const Parent = require("../models/Parent.js");
const Role = require("../models/Role.js");
const Level = require("../models/Level.js");
const Group = require("../models/Group.js");
const Field = require("../models/Field.js");
const GroupLessons = require("../models/GroupLessons.js");
const PracticeExamAYT = require("../models/PracticeExamAYT.js");
const PracticeExamTYT = require("../models/PracticeExamTYT.js");
const Attendance = require("../models/Attendance.js");

const { sequelize } = require("../data/databaseConnect.js");

const relationships = async function () {
  // Öğrenci ve Veli arasındaki ilişki
  Student.belongsTo(Parent, { foreignKey: "parentId" });
  Parent.hasMany(Student, { foreignKey: "parentId" }); // Birden fazla öğrencinin aynı veliye ait olmasını sağlar

  // Ders ve Grup arasındaki ilişki
  Group.belongsToMany(Lesson, { through: GroupLessons });
  Lesson.belongsToMany(Group, { through: GroupLessons });

  // Ders ve Öğretmen arasındaki ilişki
  Lesson.belongsToMany(Teacher, { through: "Lesson_Teachers" });
  Teacher.belongsToMany(Lesson, { through: "Lesson_Teachers" });

  // AYT ve Öğrenci arasındaki ilişki
  PracticeExamAYT.belongsTo(Student);
  Student.hasMany(PracticeExamAYT, { foreignKey: "studentId" });

  // TYT ve Öğrenci arasındaki ilişki
  PracticeExamTYT.belongsTo(Student);
  Student.hasMany(PracticeExamTYT, { foreignKey: "studentId" });

  // Branş ve öğretmen
  Branch.hasMany(Teacher);
  Teacher.belongsTo(Branch);

  // Yoklama ve öğretmen
  Teacher.hasMany(Attendance)
  Attendance.belongsTo(Teacher)

  // Yoklama ve öğrenci
  Attendance.belongsToMany(Student, { through: "AttendanceStudent" });
  Student.belongsToMany(Attendance, { through: "AttendanceStudent" });

  // Yoklama ve grup
  Group.hasMany(Attendance)
  Attendance.belongsTo(Group)


  // Devamsızlık ve öğrenci
  Student.hasMany(Truancy);
  Truancy.belongsTo(Student);

  // İzin ve öğretmen
  Teacher.hasMany(Leave);
  Leave.belongsTo(Teacher);

  // Grup ve öğrenci
  Group.hasMany(Student);
  Student.belongsTo(Group);

  // Grup ve öğretmen
  Teacher.hasMany(Group);
  Group.belongsTo(Teacher);

  // Kullanıcı ve öğrenci
  User.hasOne(Student);
  Student.belongsTo(User);

  // Kullanıcı ve öğrenci
  User.hasOne(Parent);
  Parent.belongsTo(User);

  // Kullanıcı ve öğretmen
  User.hasOne(Teacher);
  Teacher.belongsTo(User);

  // Kullanıcı ve rol
  Role.hasOne(User);
  User.belongsTo(Role);

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
