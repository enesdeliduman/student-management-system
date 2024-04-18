// dummyData.js
// const {  Teacher, Lesson, Parent, Grade } = require("./modelsRelationships");
const Lesson = require("../models/Lesson.js");
const Student = require("../models/Student.js");
const Teacher = require("../models/Teacher.js");
const Grade = require("../models/Grade.js");
const Parent = require("../models/Parent.js");

const { sequelize } = require("../data/databaseConnect.js")
const createDummyData = async () => {
    await sequelize.sync({ force: true });

    try {
        // Öğrenciler
        await Student.bulkCreate([
            { fullName: "Ali Veli", class: "10-A", parentID: 1, photo: "path/to/photo1.jpg" },
            { fullName: "Ayşe Fatma", class: "11-B", parentID: 2, photo: "path/to/photo2.jpg" },
            // Diğer öğrenciler buraya eklenebilir
        ]);

        // Öğretmenler
        await Teacher.bulkCreate([
            { fullName: "Ahmet Hoca" },
            { fullName: "Ayşe Öğretmen" },
            // Diğer öğretmenler buraya eklenebilir
        ]);

        // Dersler
        await Lesson.bulkCreate([
            { name: "Matematik", teacherID: 1 },
            { name: "Türkçe", teacherID: 2 },
            // Diğer dersler buraya eklenebilir
        ]);

        // Veliler
        await Parent.bulkCreate([
            { name: "Veli Baba", telephoneNumber: "05419440253" },
            { name: "Anne Veli", telephoneNumber: "05555555555" },
            // Diğer veliler buraya eklenebilir
        ]);

        // Notlar
        // await Grade.bulkCreate([
        //     { studentId: 1, lessonId: 1, examNumber: 1, grade: 80 },
        //     { studentId: 1, lessonId: 1, examNumber: 2, grade: 75 },
        //     // Diğer notlar buraya eklenebilir
        // ]);

        console.log("Dummy veri seti oluşturuldu.");
    } catch (error) {
        console.error("Dummy veri seti oluşturulurken bir hata oluştu:", error);
    }
};

createDummyData();

module.exports.createDummyData = createDummyData
