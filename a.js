const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");
const { student } = require("../controllers/adminController");

let now = new Date

const Attendance = sequelize.define("attendances", {
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: Date.now
    },
    lesson: {
        type: DataTypes.INTEGER,
    },
    confirm: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    }
});
module.exports = Attendance;



const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");

const Student = sequelize.define("student", {
  fullName: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      notEmpty: {
        msg: "İsim boş olamaz"
      },
      isTwoWords(value) {
        if (value.trim().split(' ').length < 2) {
          throw new Error('İsim en az iki kelime olmalıdır');
        }
      }
    }
  },
  tcNo: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      notEmpty: {
        msg: "TC No boş olamaz"
      }
    }
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "photo2.jpeg",
  },
  telephoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      notEmpty: {
        msg: "Telefon numarası boş olamaz"
      }
    }
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: new Date("2003-12-28"),
    validate: {
      notEmpty: {
        msg: "Doğum tarihi boş olamaz"
      },
      isDate: {
        msg: "Doğum tarihi geçerli bir tarih olmalıdır"
      }
    }
  }
});

module.exports = Student;



Attendance.belongsToMany(Student, { through: "AttendanceStudent" });
Student.belongsToMany(Attendance, { through: "AttendanceStudent" });



