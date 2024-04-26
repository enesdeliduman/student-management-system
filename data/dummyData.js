const Lesson = require("../models/Lesson.js");
const Student = require("../models/Student.js");
const Teacher = require("../models/Teacher.js");
const Grade = require("../models/Grade.js");
const Parent = require("../models/Parent.js");
const Class = require("../models/Class.js");
const Level = require("../models/Level.js");
const Group = require("../models/Group.js");
const Field = require("../models/Field.js");
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
        ]);

        const teachers = await Teacher.bulkCreate([
            { fullName: "Teacher 1" },
            { fullName: "Teacher 2" },
            { fullName: "Teacher 3" },
            { fullName: "Teacher 4" },
            { fullName: "Teacher 5" },
            { fullName: "Teacher 6" },
            { fullName: "Teacher 7" },
            { fullName: "Teacher 8" },
            { fullName: "Teacher 9" },
            { fullName: "Teacher 10" },
        ]);

        const classes = await Class.bulkCreate([
            { name: "293" },
            { name: "516" },
            { name: "315" },
            { name: "716" },
            { name: "815" },
            { name: "414" },
            { name: "816" },
            { name: "789" },
            { name: "345" },
            { name: "345" },
        ])
        const levels = await Level.bulkCreate([
            { name: "9. Sınıflar" },
            { name: "10. Sınıflar" },
            { name: "11. Sınıflar" },
            { name: "12. Sınıflar" },
            { name: "Mezun" },
        ])
        const groups = await Group.bulkCreate([
            { name: "123" },
            { name: "234" },
            { name: "345" },
            { name: "456" },
            { name: "768" },
            { name: "679" },
            { name: "890" },
            { name: "452" },
            { name: "489" },
            { name: "908" },
        ])

        const fields = await Field.bulkCreate([
            { name: "Eşit Ağırlık" },
            { name: "Sayısal" },
            { name: "Sözel" }
        ])

        const students = await Student.bulkCreate([
            { fullName: "Student 1", photo: "student1.jpg" },
            { fullName: "Student 2", photo: "photo1.jpg" },
            { fullName: "Student 3", photo: "photo1.jpg" },
            { fullName: "Student 4", photo: "photo1.jpg" },
            { fullName: "Student 5", photo: "photo1.jpg" },
            { fullName: "Student 6", photo: "photo1.jpg" },
            { fullName: "Student 7", photo: "photo2.jpg" },
            { fullName: "Student 8", photo: "photo2.jpg" },
            { fullName: "Student 9", photo: "photo2.jpg" },
            { fullName: "Student 10", photo: "photo2.jpg" }
        ]);


        const lessons = await Lesson.bulkCreate([
            { name: "Lesson 1" },
            { name: "Lesson 2" },
            { name: "Lesson 3" },
            { name: "Lesson 4" },
            { name: "Lesson 5" },
            { name: "Lesson 6" },
            { name: "Lesson 7" },
            { name: "Lesson 8" },
            { name: "Lesson 9" },
            { name: "Lesson 10" },
        ]);

        await Grade.bulkCreate([
            { grade: 90, studentId: 1, lessonId: 1, },
            { grade: 80, studentId: 1, lessonId: 1, },
            { grade: 60, studentId: 1, lessonId: 1, },
            { grade: 40, studentId: 2, lessonId: 2, },
            { grade: 40, studentId: 2, lessonId: 2, },
            { grade: 40, studentId: 2, lessonId: 2, },
            { grade: 50, studentId: 3, lessonId: 3, },
            { grade: 50, studentId: 3, lessonId: 3, },
            { grade: 50, studentId: 3, lessonId: 3, },
            { grade: 50, studentId: 4, lessonId: 4, },
            { grade: 50, studentId: 4, lessonId: 4, },
            { grade: 50, studentId: 4, lessonId: 4, },
            { grade: 50, studentId: 5, lessonId: 5, },
            { grade: 50, studentId: 5, lessonId: 5, },
            { grade: 50, studentId: 5, lessonId: 5, },
            { grade: 50, studentId: 6, lessonId: 6, },
            { grade: 50, studentId: 6, lessonId: 6, },
            { grade: 50, studentId: 6, lessonId: 6, },
            { grade: 50, studentId: 7, lessonId: 7, },
            { grade: 50, studentId: 7, lessonId: 7, },
            { grade: 50, studentId: 7, lessonId: 7, },
            { grade: 50, studentId: 8, lessonId: 8, },
            { grade: 50, studentId: 8, lessonId: 8, },
            { grade: 50, studentId: 8, lessonId: 8, },
            { grade: 50, studentId: 9, lessonId: 9, },
        ]);

        // Veli ve öğrenci
        await parents[0].addStudent(students[0]);
        await parents[0].addStudent(students[1]);
        await parents[0].addStudent(students[2]);
        await parents[0].addStudent(students[3]);
        await parents[0].addStudent(students[4]);
        await parents[0].addStudent(students[5]);
        await parents[0].addStudent(students[6]);
        await parents[0].addStudent(students[7]);
        await parents[0].addStudent(students[8]);
        await parents[0].addStudent(students[9]);

        // Ders ve öğretmen
        await lessons[0].addTeacher(teachers[0]);
        await lessons[1].addTeacher(teachers[1]);
        await lessons[0].addTeacher(teachers[1]);

        // Grup ve öğrenci
        await groups[0].addStudent(students[0])
        await groups[0].addStudent(students[1])
        await groups[0].addStudent(students[2])
        await groups[0].addStudent(students[3])
        await groups[0].addStudent(students[4])
        await groups[1].addStudent(students[5])
        await groups[1].addStudent(students[6])
        await groups[1].addStudent(students[7])
        await groups[1].addStudent(students[8])
        await groups[2].addStudent(students[9])

        // Class ve grup
        await classes[0].addGroup(groups[0])
        await classes[0].addGroup(groups[0])
        await classes[0].addGroup(groups[1])
        await classes[0].addGroup(groups[1])
        await classes[1].addGroup(groups[2])
        await classes[1].addGroup(groups[2])
        await classes[1].addGroup(groups[3])
        await classes[1].addGroup(groups[3])
        await classes[2].addGroup(groups[4])
        await classes[2].addGroup(groups[4])
        await classes[2].addGroup(groups[5])
        await classes[2].addGroup(groups[5])
        await classes[2].addGroup(groups[6])
        await classes[2].addGroup(groups[6])
        await classes[2].addGroup(groups[7])
        await classes[3].addGroup(groups[7])
        await classes[3].addGroup(groups[8])
        await classes[3].addGroup(groups[8])
        await classes[3].addGroup(groups[9])
        await classes[3].addGroup(groups[9])

        // Grup ve öğretmen
        await teachers[0].addGroups(groups[0])
        await teachers[0].addGroups(groups[0])
        await teachers[1].addGroups(groups[1])
        await teachers[2].addGroups(groups[2])
        await teachers[3].addGroups(groups[3])
        await teachers[4].addGroups(groups[4])
        await teachers[5].addGroups(groups[5])
        await teachers[6].addGroups(groups[6])
        await teachers[7].addGroups(groups[7])
        await teachers[8].addGroups(groups[8])
        await teachers[9].addGroups(groups[9])

        // Field ve grup
        await fields[0].addGroups(groups[0])
        await fields[0].addGroups(groups[1])
        await fields[0].addGroups(groups[2])
        await fields[1].addGroups(groups[3])
        await fields[1].addGroups(groups[4])
        await fields[1].addGroups(groups[5])
        await fields[2].addGroups(groups[6])
        await fields[2].addGroups(groups[7])
        await fields[2].addGroups(groups[8])
        await fields[2].addGroups(groups[9])

        // Grup ve level
        await levels[0].addGroups(groups[0])
        await levels[0].addGroups(groups[1])
        await levels[1].addGroups(groups[2])
        await levels[1].addGroups(groups[3])
        await levels[2].addGroups(groups[4])
        await levels[2].addGroups(groups[5])
        await levels[3].addGroups(groups[6])
        await levels[3].addGroups(groups[6])
        await levels[4].addGroups(groups[7])
        await levels[4].addGroups(groups[7])
        await levels[4].addGroups(groups[8])
        await levels[4].addGroups(groups[8])
        await levels[4].addGroups(groups[9])
        await levels[4].addGroups(groups[9])

        // Ders ve grup
        await lessons[0].addGroup(groups[0], { through: { teacherId: teachers[0].id } });
        await lessons[1].addGroup(groups[0], { through: { teacherId: teachers[1].id } });
        await lessons[2].addGroup(groups[0], { through: { teacherId: teachers[2].id } });
        await lessons[3].addGroup(groups[0], { through: { teacherId: teachers[3].id } });
        await lessons[4].addGroup(groups[0], { through: { teacherId: teachers[4].id } });
        await lessons[5].addGroup(groups[0], { through: { teacherId: teachers[5].id } });
        await lessons[5].addGroup(groups[1], { through: { teacherId: teachers[6].id } });
        await lessons[5].addGroup(groups[2], { through: { teacherId: teachers[7].id } });
        await lessons[4].addGroup(groups[2], { through: { teacherId: teachers[8].id } });
        await lessons[4].addGroup(groups[2], { through: { teacherId: teachers[9].id } });

        console.log("Dummy veriler başarıyla oluşturuldu.");
    } catch (error) {
        console.error("Dummy veriler oluşturulurken bir hata oluştu:", error);
    }
};