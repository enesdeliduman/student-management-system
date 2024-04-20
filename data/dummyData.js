const Lesson = require("../models/Lesson.js");
const Student = require("../models/Student.js");
const Teacher = require("../models/Teacher.js");
const Grade = require("../models/Grade.js");
const Parent = require("../models/Parent.js");
const Class = require("../models/Class.js");
const { sequelize } = require("./databaseConnect.js");

module.exports.createDummyData = async () => {
    try {
        // Tabloları oluştur
        await sequelize.sync({ force: true });

        // Veri ekleme işlemi
        const parents = await Parent.bulkCreate([
            { name: 'Parent 1', telephoneNumber: '1169999250' },
            { name: 'Parent 2', telephoneNumber: '5105994374' },
            { name: 'Parent 3', telephoneNumber: '1795209956' },
            { name: 'Parent 4', telephoneNumber: '3850834346' },
            { name: "Parent 4", telephoneNumber: "3850834346" },
            { name: 'Parent 5', telephoneNumber: '7481006621' },
            { name: 'Parent 6', telephoneNumber: '3175817427' },
            { name: 'Parent 7', telephoneNumber: '4135221094' },
            { name: 'Parent 8', telephoneNumber: '1413853514' },
            { name: 'Parent 9', telephoneNumber: '8164242074' },
            { name: 'Parent 10', telephoneNumber: '4240593014' },
            { name: 'Parent 11', telephoneNumber: '1187317509' },
            { name: 'Parent 12', telephoneNumber: '1784869406' },
            { name: 'Parent 13', telephoneNumber: '3019036232' },
            { name: 'Parent 14', telephoneNumber: '2374196563' },
            { name: 'Parent 15', telephoneNumber: '6260384311' },
            { name: 'Parent 16', telephoneNumber: '1967023962' },
            { name: 'Parent 17', telephoneNumber: '5595811777' }
        ]);

        const teachers = await Teacher.bulkCreate([
            { fullName: "Teacher 1" },
            { fullName: "Teacher 2" },
            { fullName: "Teacher 3" }
        ]);

        const classes = await Class.bulkCreate([
            { name: "293", teacherId: teachers[0].id },
            { name: "516", teacherId: teachers[1].id },
            { name: "315", teacherId: teachers[2].id }
        ])
        const students = await Student.bulkCreate([
            { fullName: "Student 1", classId: classes[0].id, photo: "student1.jpg", parentId: parents[0].id },
            { fullName: "Student 2", classId: classes[0].id, photo: "photo1.jpg", parentId: parents[1].id },
            { fullName: "Student 3", classId: classes[0].id, photo: "photo1.jpg", parentId: parents[2].id },
            { fullName: "Student 4", classId: classes[0].id, photo: "photo1.jpg", parentId: parents[3].id },
            { fullName: "Student 5", classId: classes[0].id, photo: "photo1.jpg", parentId: parents[4].id },
            { fullName: "Student 6", classId: classes[0].id, photo: "photo1.jpg", parentId: parents[5].id },
            { fullName: "Student 7", classId: classes[1].id, photo: "photo2.jpg", parentId: parents[6].id },
            { fullName: "Student 8", classId: classes[1].id, photo: "photo2.jpg", parentId: parents[7].id },
            { fullName: "Student 9", classId: classes[1].id, photo: "photo2.jpg", parentId: parents[8].id },
            { fullName: "Student 10", classId: classes[1].id, photo: "photo2.jpg", parentId: parents[9].id },
            { fullName: "Student 11", classId: classes[1].id, photo: "photo2.jpg", parentId: parents[10].id },
            { fullName: "Student 12", classId: classes[1].id, photo: "photo2.jpg", parentId: parents[11].id },
            { fullName: "Student 13", classId: classes[2].id, photo: "photo3.jpg", parentId: parents[12].id },
            { fullName: "Student 14", classId: classes[2].id, photo: "photo3.jpg", parentId: parents[13].id },
            { fullName: "Student 15", classId: classes[2].id, photo: "photo3.jpg", parentId: parents[14].id },
            { fullName: "Student 16", classId: classes[2].id, photo: "photo3.jpg", parentId: parents[15].id },
            { fullName: "Student 17", classId: classes[2].id, photo: "photo3.jpg", parentId: parents[16].id },
            { fullName: "Student 18", classId: classes[2].id, photo: "photo3.jpg", parentId: parents[17].id },
        ]);


        const lessons = await Lesson.bulkCreate([
            { name: "Lesson 1" },
            { name: "Lesson 2" }
        ]);

        await Grade.bulkCreate([
            { grade: 90, examNumber: 1, studentId: 1, lessonId: 1 },
            { grade: 80, examNumber: 2, studentId: 2, lessonId: 1 },
            { grade: 60, examNumber: 2, studentId: 3, lessonId: 1 },
            { grade: 40, examNumber: 2, studentId: 4, lessonId: 1 },
            { grade: 50, examNumber: 2, studentId: 5, lessonId: 1 },
        ]);

        // Öğretmen ve sınıf

        // Ders ve öğretmen
        await lessons[0].addTeacher(teachers[0]);
        await lessons[1].addTeacher(teachers[1]);
        await lessons[0].addTeacher(teachers[1]);

        console.log("Dummy veriler başarıyla oluşturuldu.");
    } catch (error) {
        console.error("Dummy veriler oluşturulurken bir hata oluştu:", error);
    }
};