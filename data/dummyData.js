const Lesson = require('../models/Lesson.js')
const Student = require('../models/Student.js')
const Teacher = require('../models/Teacher.js')
const Leave = require('../models/Leave.js')
const User = require('../models/User.js')
const PracticeExamTYT = require('../models/PracticeExamTYT.js')
const PracticeExamAYT = require('../models/PracticeExamAYT.js')
const Parent = require('../models/Parent.js')
const Branch = require('../models/Branch.js')
const Class = require('../models/Class.js')
const Level = require('../models/Level.js')
const Group = require('../models/Group.js')
const Field = require('../models/Field.js')
const Role = require('../models/Role.js')
const bcrypt = require('bcrypt')
const { sequelize } = require('./databaseConnect.js')
const Truancy = require('../models/Truancy.js')
const Attendance = require('../models/Attendance.js')

module.exports.createDummyData = async () => {
  try {
    await sequelize.sync({ force: true })

    const parents = await Parent.bulkCreate([
      { fullName: 'Parent 1', telephoneNumber: "0000000000" },
      { fullName: 'Parent 2', telephoneNumber: "0000000000" },
      { fullName: 'Parent 3', telephoneNumber: "0000000000" },
      { fullName: 'Parent 4', telephoneNumber: "0000000000" },
      { fullName: 'Parent 4', telephoneNumber: "0000000000" },
      { fullName: 'Parent 5', telephoneNumber: "0000000000" },
      { fullName: 'Parent 6', telephoneNumber: "0000000000" },
      { fullName: 'Parent 7', telephoneNumber: "0000000000" },
      { fullName: 'Parent 8', telephoneNumber: "0000000000" },
      { fullName: 'Parent 9', telephoneNumber: "0000000000" },
      { fullName: 'Parent 10', telephoneNumber: "0000000000" },
      { fullName: 'Parent 11', telephoneNumber: "0000000000" },
      { fullName: 'Parent 12', telephoneNumber: "0000000000" },
      { fullName: 'Parent 13', telephoneNumber: "0000000000" },
      { fullName: 'Parent 14', telephoneNumber: "0000000000" },
      { fullName: 'Parent 14', telephoneNumber: "0000000000" },
      { fullName: 'Parent 15', telephoneNumber: "0000000000" },
      { fullName: 'Parent 16', telephoneNumber: "0000000000" },
      { fullName: 'Parent 17', telephoneNumber: "0000000000" },
      { fullName: 'Parent 18', telephoneNumber: "0000000000" },
      { fullName: 'Parent 19', telephoneNumber: "0000000000" },
      { fullName: 'Parent 20', telephoneNumber: "0000000000" }
    ])

    const roles = await Role.bulkCreate([
      { name: 'Admin' },
      { name: 'Teacher' },
      { name: 'Student' },
      { name: 'Parent' },
    ])

    const branches = await Branch.bulkCreate([
      { name: "Türkçe" },
      { name: "Matematik" },
      { name: "İngilizce" },
      { name: "Biyoloji" },
      { name: "Kimya" },
      { name: "Fizik" },
      { name: "Tarih" },
      { name: "Coğrafya" },
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
        username: 'parent',
        password: await bcrypt.hash('root', 10),
        roleId: roles[3].id
      },
      {
        username: 'student',
        password: await bcrypt.hash('root', 10),
        roleId: roles[2].id
      }
    ])

    const teachers = await Teacher.bulkCreate([
      { fullName: 'Teacher 1', telephoneNumber: '0000000000',dateOfBirth:'2003.02.02', userId: users[0].id },
      { fullName: 'Teacher 2', telephoneNumber: '0000000000',dateOfBirth:'2003.02.02', userId: users[1].id },
      { fullName: 'Teacher 3', telephoneNumber: '0000000000' ,dateOfBirth:'2003.02.02'},
      { fullName: 'Teacher 4', telephoneNumber: '0000000000' ,dateOfBirth:'2003.02.02'},
      { fullName: 'Teacher 5', telephoneNumber: '0000000000' ,dateOfBirth:'2003.02.02'},
      { fullName: 'Teacher 6', telephoneNumber: '0000000000' ,dateOfBirth:'2003.02.02'},
      { fullName: 'Teacher 7', telephoneNumber: '0000000000' ,dateOfBirth:'2003.02.02'},
      { fullName: 'Teacher 8', telephoneNumber: '0000000000' ,dateOfBirth:'2003.02.02'},
      { fullName: 'Teacher 9', telephoneNumber: '0000000000' ,dateOfBirth:'2003.02.02'},
      { fullName: 'Teacher 10', telephoneNumber: '0000000000',dateOfBirth:'2003.02.02' }
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
      { fullName: 'Enes Deliduman', photo: 'student1.jpg', userId: users[2].id },
      { fullName: 'Student 1', photo: 'photo1.jpg' },
      { fullName: 'Student 2', photo: 'photo1.jpg' },
      { fullName: 'Student 3', photo: 'photo1.jpg' },
      { fullName: 'Student 4', photo: 'photo1.jpg' },
      { fullName: 'Student 5', photo: 'photo1.jpg' },
      { fullName: 'Student 6', photo: 'photo2.jpg' },
      { fullName: 'Student 7', photo: 'photo2.jpg' },
      { fullName: 'Student 8', photo: 'photo2.jpg' },
      { fullName: 'Student 9', photo: 'photo2.jpg' },
      { fullName: 'Student 10', photo: 'photo1.jpg' },
      { fullName: 'Student 11', photo: 'photo1.jpg' },
      { fullName: 'Student 12', photo: 'photo1.jpg' },
      { fullName: 'Student 13', photo: 'photo1.jpg' },
      { fullName: 'Student 14', photo: 'photo1.jpg' },
      { fullName: 'Student 15', photo: 'photo2.jpg' },
      { fullName: 'Student 16', photo: 'photo2.jpg' },
      { fullName: 'Student 17', photo: 'photo2.jpg' },
      { fullName: 'Student 18', photo: 'photo2.jpg' }
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

    await Truancy.bulkCreate([
      { studentId: 1 },
      { studentId: 1 },
      { studentId: 1 },
      { studentId: 1 },
      { studentId: 2 },
      { studentId: 2 },
      { studentId: 3 },
      { studentId: 4 },
      { studentId: 4 },
      { studentId: 4 },
      { studentId: 4 },
      { studentId: 4 },
      { studentId: 4 },
      { studentId: 4 },
      { studentId: 4 },
      { studentId: 4 },
      { studentId: 5 },
      { studentId: 6 },
      { studentId: 7 },
      { studentId: 8 },
      { studentId: 9 },
      { studentId: 10 },
    ])

    await Leave.bulkCreate([
      { teacherId: 1, type: "Ücretli" },
      { teacherId: 1, type: "Ücretli" },
      { teacherId: 1, type: "Ücretli" },
      { teacherId: 1, type: "Ücretli" },
      { teacherId: 2, type: "Ücretli" },
      { teacherId: 2, type: "Ücretli" },
      { teacherId: 3, type: "Ücretli" },
      { teacherId: 4, type: "Ücretli" },
      { teacherId: 4, type: "Ücretli" },
      { teacherId: 4, type: "Ücretli" },
      { teacherId: 4, type: "Ücretli" },
      { teacherId: 4, type: "Ücretli" },
      { teacherId: 4, type: "Ücretli" },
      { teacherId: 4, type: "Ücretli" },
      { teacherId: 4, type: "Ücretli" },
      { teacherId: 4, type: "Ücretli" },
      { teacherId: 5, type: "Ücretli" },
      { teacherId: 6, type: "Ücretli" },
      { teacherId: 7, type: "Ücretli" },
      { teacherId: 8, type: "Ücretli" },
      { teacherId: 9, type: "Ücretli" },
      { teacherId: 10, type: "Ücretli" },
    ])


    // Veli ve öğrenci
    await parents[0].addStudent(students[0])
    await parents[1].addStudent(students[1])
    await parents[2].addStudent(students[2])
    await parents[3].addStudent(students[3])
    await parents[4].addStudent(students[4])
    await parents[5].addStudent(students[5])
    await parents[6].addStudent(students[6])
    await parents[7].addStudent(students[7])
    await parents[8].addStudent(students[8])
    await parents[9].addStudent(students[9])
    await parents[10].addStudent(students[10])
    await parents[11].addStudent(students[11])
    await parents[12].addStudent(students[12])
    await parents[13].addStudent(students[13])
    await parents[14].addStudent(students[14])
    await parents[15].addStudent(students[15])
    await parents[16].addStudent(students[16])
    await parents[17].addStudent(students[17])
    await parents[18].addStudent(students[18])
    await parents[19].addStudent(students[19])

    // Ders ve öğretmen
    await lessons[0].addTeacher(teachers[0])
    await lessons[1].addTeacher(teachers[1])
    await lessons[0].addTeacher(teachers[1])


    // Branş ve öğretmen
    await branches[0].addTeacher(teachers[0])
    await branches[0].addTeacher(teachers[1])
    await branches[1].addTeacher(teachers[2])
    await branches[2].addTeacher(teachers[3])
    await branches[3].addTeacher(teachers[4])
    await branches[4].addTeacher(teachers[4])
    await branches[5].addTeacher(teachers[5])
    await branches[6].addTeacher(teachers[6])
    await branches[7].addTeacher(teachers[7])
    await branches[7].addTeacher(teachers[8])
    await branches[7].addTeacher(teachers[9])

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
    await groups[3].addStudent(students[10])
    await groups[3].addStudent(students[11])
    await groups[3].addStudent(students[12])
    await groups[3].addStudent(students[13])
    await groups[4].addStudent(students[14])
    await groups[5].addStudent(students[15])
    await groups[5].addStudent(students[16])
    await groups[5].addStudent(students[17])
    await groups[6].addStudent(students[18])
    await groups[6].addStudent(students[19])

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

    // const attendances = await Attendance.bulkCreate([{
    //   lesson: 1
    // }])
    // await students[0].addAttendance(attendances[0], {
    //   through: {
    //     teacher: teachers[0]
    //   }
    // })
    // Ders ve grup
    await lessons[0].addGroup(groups[0], {
      through:
      {
        teacherId: teachers[0].id
      }
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
