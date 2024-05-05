const Lesson = require('../models/Lesson.js')
const Student = require('../models/Student.js')
const Teacher = require('../models/Teacher.js')
const User = require('../models/User.js')
const PracticeExamTYT = require('../models/PracticeExamTYT.js')
const PracticeExamAYT = require('../models/PracticeExamAYT.js')
const Parent = require('../models/Parent.js')
const Class = require('../models/Class.js')
const Level = require('../models/Level.js')
const Group = require('../models/Group.js')
const Field = require('../models/Field.js')
const Role = require('../models/Role.js')
const bcrypt = require('bcrypt')
const { sequelize } = require('./databaseConnect.js')

module.exports.createDummyData = async () => {
  try {
    // Tabloları oluştur
    await sequelize.sync({ force: true })

    // Veri ekleme işlemi
    const parents = await Parent.bulkCreate([
      { fullName: 'Parent 1', telephoneNumber: '1169999250' },
      { fullName: 'Parent 2', telephoneNumber: '5105994374' },
      { fullName: 'Parent 3', telephoneNumber: '1795209956' },
      { fullName: 'Parent 4', telephoneNumber: '3850834346' },
      { fullName: 'Parent 4', telephoneNumber: '3850834346' },
      { fullName: 'Parent 5', telephoneNumber: '7481006621' },
      { fullName: 'Parent 6', telephoneNumber: '3175817427' },
      { fullName: 'Parent 7', telephoneNumber: '4135221094' },
      { fullName: 'Parent 8', telephoneNumber: '1413853514' },
      { fullName: 'Parent 9', telephoneNumber: '8164242074' },
      { fullName: 'Parent 10', telephoneNumber: '4240593014' }
    ])

    const roles = await Role.bulkCreate([
      { name: 'Admin' },
      { name: 'Teacher' },
      { name: 'Student' }
    ])
    const users = await User.bulkCreate([
      {
        username: 'admin',
        password: await bcrypt.hash('root', 10),
        roleId: roles[0].id
      },
      {
        username: 'teacher',
        password: await bcrypt.hash('root', 10),
        roleId: roles[1].id
      },
      {
        username: 'student',
        password: await bcrypt.hash('root', 10),
        roleId: roles[2].id
      }
    ])
    const teachers = await Teacher.bulkCreate([
      { fullName: 'Teacher 1', userId: users[0].id },
      { fullName: 'Teacher 2', userId: users[1].id },
      { fullName: 'Teacher 3' },
      { fullName: 'Teacher 4' },
      { fullName: 'Teacher 5' },
      { fullName: 'Teacher 6' },
      { fullName: 'Teacher 7' },
      { fullName: 'Teacher 8' },
      { fullName: 'Teacher 9' },
      { fullName: 'Teacher 10' }
    ])

    const classes = await Class.bulkCreate([
      { name: '293' },
      { name: '516' },
      { name: '315' },
      { name: '716' },
      { name: '815' },
      { name: '414' },
      { name: '816' },
      { name: '789' },
      { name: '345' },
      { name: '345' }
    ])
    const levels = await Level.bulkCreate([
      { name: '9. Sınıflar' },
      { name: '10. Sınıflar' },
      { name: '11. Sınıflar' },
      { name: '12. Sınıflar' },
      { name: 'Mezun' }
    ])
    const groups = await Group.bulkCreate([
      { name: '123' },
      { name: '234' },
      { name: '345' },
      { name: '456' },
      { name: '768' },
      { name: '679' },
      { name: '890' },
      { name: '452' },
      { name: '489' },
      { name: '908' }
    ])

    const fields = await Field.bulkCreate([
      { name: 'Eşit Ağırlık' },
      { name: 'Sayısal' },
      { name: 'Sözel' }
    ])

    const students = await Student.bulkCreate([
      {
        fullName: 'Enes Deliduman',
        photo: 'student1.jpg',
        userId: users[2].id
      },
      { fullName: 'Bedriye Şimşek', photo: 'photo1.jpg' },
      { fullName: 'Yunuscan Acar', photo: 'photo1.jpg' },
      { fullName: 'Sinem Baş', photo: 'photo1.jpg' },
      { fullName: 'Sibel Akyıldız', photo: 'photo1.jpg' },
      { fullName: 'Merve Kara', photo: 'photo1.jpg' },
      { fullName: 'Emir Bıçakçı', photo: 'photo2.jpg' },
      { fullName: 'Büşra Yavuz', photo: 'photo2.jpg' },
      { fullName: 'Sevcan Kılıç', photo: 'photo2.jpg' },
      { fullName: 'Bbatuhan Özkan', photo: 'photo2.jpg' }
    ])

    const lessons = await Lesson.bulkCreate([
      { name: 'Lesson 1' },
      { name: 'Lesson 2' },
      { name: 'Lesson 3' },
      { name: 'Lesson 4' },
      { name: 'Lesson 5' },
      { name: 'Lesson 6' },
      { name: 'Lesson 7' },
      { name: 'Lesson 8' },
      { name: 'Lesson 9' },
      { name: 'Lesson 10' }
    ])

    await PracticeExamTYT.bulkCreate([
      {
        studentId: 1,
        name: 'Karekök 3',
        totalTrue: 76,
        totalFalse: 18,
        totalBlank: 23,
        totalNet: 68,
        turkish: {
          trueQ: 30,
          falseQ: 4,
          blankQ: 6,
          net: 26
        },
        mathematics: {
          trueQ: 10,
          falseQ: 12,
          blankQ: 18,
          net: 7
        },
        social: {
          totalTrue: 20,
          totalFalse: 0,
          totalBlank: 0,
          totalNet: 20,
          history: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          religiousCulture: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          geography: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          philosophy: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          }
        },
        science: {
          totalTrue: 20,
          totalFalse: 0,
          totalBlank: 0,
          totalNet: 20,
          biology: {
            trueQ: 6,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          chemistry: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 2,
            net: 5
          },
          physics: {
            trueQ: 5,
            falseQ: 2,
            blankQ: 0,
            net: 4.5
          }
        },
        practiceDate: '2023-01-28'
      },
      {
        studentId: 1,
        name: 'Karekök 4',
        totalTrue: 76,
        totalFalse: 18,
        totalBlank: 23,
        totalNet: 69,
        turkish: {
          trueQ: 30,
          falseQ: 4,
          blankQ: 6,
          net: 26
        },
        mathematics: {
          trueQ: 10,
          falseQ: 12,
          blankQ: 18,
          net: 7
        },
        social: {
          totalTrue: 20,
          totalFalse: 0,
          totalBlank: 0,
          totalNet: 20,
          history: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          religiousCulture: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          geography: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          philosophy: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          }
        },
        science: {
          totalTrue: 20,
          totalFalse: 0,
          totalBlank: 0,
          totalNet: 20,
          biology: {
            trueQ: 6,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          chemistry: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 2,
            net: 5
          },
          physics: {
            trueQ: 5,
            falseQ: 2,
            blankQ: 0,
            net: 4.5
          }
        },
        practiceDate: '2023-02-28'
      },
      {
        studentId: 1,
        name: 'Karekök 5',
        totalTrue: 76,
        totalFalse: 18,
        totalBlank: 23,
        totalNet: 70,
        turkish: {
          trueQ: 30,
          falseQ: 4,
          blankQ: 6,
          net: 26
        },
        mathematics: {
          trueQ: 10,
          falseQ: 12,
          blankQ: 18,
          net: 7
        },
        social: {
          totalTrue: 20,
          totalFalse: 0,
          totalBlank: 0,
          totalNet: 20,
          history: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          religiousCulture: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          geography: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          philosophy: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          }
        },
        science: {
          totalTrue: 20,
          totalFalse: 0,
          totalBlank: 0,
          totalNet: 20,
          biology: {
            trueQ: 6,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          chemistry: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 2,
            net: 5
          },
          physics: {
            trueQ: 5,
            falseQ: 2,
            blankQ: 0,
            net: 4.5
          }
        },
        practiceDate: '2023-03-28'
      },
      {
        studentId: 1,
        name: 'Karekök 6',
        totalTrue: 76,
        totalFalse: 18,
        totalBlank: 23,
        totalNet: 71,
        turkish: {
          trueQ: 30,
          falseQ: 4,
          blankQ: 6,
          net: 26
        },
        mathematics: {
          trueQ: 10,
          falseQ: 12,
          blankQ: 18,
          net: 7
        },
        social: {
          totalTrue: 20,
          totalFalse: 0,
          totalBlank: 0,
          totalNet: 20,
          history: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          religiousCulture: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          geography: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          philosophy: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 0,
            net: 5
          }
        },
        science: {
          totalTrue: 20,
          totalFalse: 0,
          totalBlank: 0,
          totalNet: 20,
          biology: {
            trueQ: 6,
            falseQ: 0,
            blankQ: 0,
            net: 5
          },
          chemistry: {
            trueQ: 5,
            falseQ: 0,
            blankQ: 2,
            net: 5
          },
          physics: {
            trueQ: 5,
            falseQ: 2,
            blankQ: 0,
            net: 4.5
          }
        },
        practiceDate: '2023-04-28'
      }
    ])
    await PracticeExamAYT.bulkCreate([
      {
        studentId: 1,
        name: 'Karekök 3',
        totalTrue: 76,
        totalFalse: 18,
        totalBlank: 23,
        totalNet: 68,
        TurkishLanguageAndLiteratureSocialSciences1: {
          TurkishLanguageAndLiterature: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          socialScience1: {
            history1: {
              trueQ: 30,
              falseQ: 4,
              blankQ: 6,
              net: 26
            },
            geography1: {
              trueQ: 30,
              falseQ: 4,
              blankQ: 6,
              net: 26
            }
          }
        },
        mathematics: {
          trueQ: 10,
          falseQ: 12,
          blankQ: 18,
          net: 7
        },
        socialScience2: {
          history2: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          geography2: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          philosophy: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          religiousCulture: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          }
        },
        science: {
          physics: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          chemistry: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          biology: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          }
        },
        practiceDate: '2023-05-28'
      },
      {
        studentId: 1,
        name: 'Karekök 4',
        totalTrue: 76,
        totalFalse: 18,
        totalBlank: 23,
        totalNet: 69,
        TurkishLanguageAndLiteratureSocialSciences1: {
          TurkishLanguageAndLiterature: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          socialScience1: {
            history1: {
              trueQ: 30,
              falseQ: 4,
              blankQ: 6,
              net: 26
            },
            geography1: {
              trueQ: 30,
              falseQ: 4,
              blankQ: 6,
              net: 26
            }
          }
        },
        mathematics: {
          trueQ: 10,
          falseQ: 12,
          blankQ: 18,
          net: 7
        },
        socialScience2: {
          history2: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          geography2: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          philosophy: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          religiousCulture: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          }
        },
        science: {
          physics: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          chemistry: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          biology: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          }
        },
        practiceDate: '2023-06-28'
      },
      {
        studentId: 1,
        name: 'Karekök 5',
        totalTrue: 76,
        totalFalse: 18,
        totalBlank: 23,
        totalNet: 70,
        TurkishLanguageAndLiteratureSocialSciences1: {
          TurkishLanguageAndLiterature: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          socialScience1: {
            history1: {
              trueQ: 30,
              falseQ: 4,
              blankQ: 6,
              net: 26
            },
            geography1: {
              trueQ: 30,
              falseQ: 4,
              blankQ: 6,
              net: 26
            }
          }
        },
        mathematics: {
          trueQ: 10,
          falseQ: 12,
          blankQ: 18,
          net: 7
        },
        socialScience2: {
          history2: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          geography2: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          philosophy: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          religiousCulture: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          }
        },
        science: {
          physics: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          chemistry: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          biology: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          }
        },
        practiceDate: '2023-07-28'
      },
      {
        studentId: 1,
        name: 'Karekök 6',
        totalTrue: 76,
        totalFalse: 18,
        totalBlank: 23,
        totalNet: 71,
        TurkishLanguageAndLiteratureSocialSciences1: {
          TurkishLanguageAndLiterature: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          socialScience1: {
            history1: {
              trueQ: 30,
              falseQ: 4,
              blankQ: 6,
              net: 26
            },
            geography1: {
              trueQ: 30,
              falseQ: 4,
              blankQ: 6,
              net: 26
            }
          }
        },
        mathematics: {
          trueQ: 10,
          falseQ: 12,
          blankQ: 18,
          net: 7
        },
        socialScience2: {
          history2: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          geography2: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          philosophy: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          religiousCulture: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          }
        },
        science: {
          physics: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          chemistry: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          biology: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          }
        },
        practiceDate: '2023-08-28'
      },
      {
        studentId: 1,
        name: 'Karekök 7',
        totalTrue: 76,
        totalFalse: 18,
        totalBlank: 23,
        totalNet: 72,
        TurkishLanguageAndLiteratureSocialSciences1: {
          TurkishLanguageAndLiterature: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          socialScience1: {
            history1: {
              trueQ: 30,
              falseQ: 4,
              blankQ: 6,
              net: 26
            },
            geography1: {
              trueQ: 30,
              falseQ: 4,
              blankQ: 6,
              net: 26
            }
          }
        },
        mathematics: {
          trueQ: 10,
          falseQ: 12,
          blankQ: 18,
          net: 7
        },
        socialScience2: {
          history2: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          geography2: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          philosophy: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          religiousCulture: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          }
        },
        science: {
          physics: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          chemistry: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          biology: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          }
        },
        practiceDate: '2023-10-28'
      },
      {
        studentId: 1,
        name: 'Karekök 8',
        totalTrue: 76,
        totalFalse: 18,
        totalBlank: 23,
        totalNet: 73,
        TurkishLanguageAndLiteratureSocialSciences1: {
          TurkishLanguageAndLiterature: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          socialScience1: {
            history1: {
              trueQ: 30,
              falseQ: 4,
              blankQ: 6,
              net: 26
            },
            geography1: {
              trueQ: 30,
              falseQ: 4,
              blankQ: 6,
              net: 26
            }
          }
        },
        mathematics: {
          trueQ: 10,
          falseQ: 12,
          blankQ: 18,
          net: 7
        },
        socialScience2: {
          history2: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          geography2: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          philosophy: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          religiousCulture: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          }
        },
        science: {
          physics: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          chemistry: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          biology: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          }
        },
        practiceDate: '2023-10-28'
      },
      {
        studentId: 1,
        name: 'Karekök 9',
        totalTrue: 76,
        totalFalse: 18,
        totalBlank: 23,
        totalNet: 74,
        TurkishLanguageAndLiteratureSocialSciences1: {
          TurkishLanguageAndLiterature: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          socialScience1: {
            history1: {
              trueQ: 30,
              falseQ: 4,
              blankQ: 6,
              net: 26
            },
            geography1: {
              trueQ: 30,
              falseQ: 4,
              blankQ: 6,
              net: 26
            }
          }
        },
        mathematics: {
          trueQ: 10,
          falseQ: 12,
          blankQ: 18,
          net: 7
        },
        socialScience2: {
          history2: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          geography2: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          philosophy: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          religiousCulture: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          }
        },
        science: {
          physics: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          chemistry: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          },
          biology: {
            trueQ: 30,
            falseQ: 4,
            blankQ: 6,
            net: 26
          }
        },
        practiceDate: '2023-09-28'
      }
    ])

    // Veli ve öğrenci
    await parents[0].addStudent(students[0])
    await parents[0].addStudent(students[1])
    await parents[0].addStudent(students[2])
    await parents[0].addStudent(students[3])
    await parents[0].addStudent(students[4])
    await parents[0].addStudent(students[5])
    await parents[0].addStudent(students[6])
    await parents[0].addStudent(students[7])
    await parents[0].addStudent(students[8])
    await parents[0].addStudent(students[9])

    // Ders ve öğretmen
    await lessons[0].addTeacher(teachers[0])
    await lessons[1].addTeacher(teachers[1])
    await lessons[0].addTeacher(teachers[1])

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
    await lessons[0].addGroup(groups[0], {
      through: { teacherId: teachers[0].id }
    })
    await lessons[1].addGroup(groups[0], {
      through: { teacherId: teachers[1].id }
    })
    await lessons[2].addGroup(groups[0], {
      through: { teacherId: teachers[2].id }
    })
    await lessons[3].addGroup(groups[0], {
      through: { teacherId: teachers[3].id }
    })
    await lessons[4].addGroup(groups[0], {
      through: { teacherId: teachers[4].id }
    })
    await lessons[5].addGroup(groups[0], {
      through: { teacherId: teachers[5].id }
    })
    await lessons[5].addGroup(groups[1], {
      through: { teacherId: teachers[6].id }
    })
    await lessons[5].addGroup(groups[2], {
      through: { teacherId: teachers[7].id }
    })
    await lessons[4].addGroup(groups[2], {
      through: { teacherId: teachers[8].id }
    })
    await lessons[4].addGroup(groups[2], {
      through: { teacherId: teachers[9].id }
    })

    console.log('Dummy veriler başarıyla oluşturuldu.')
  } catch (error) {
    console.error('Dummy veriler oluşturulurken bir hata oluştu:', error)
  }
}
