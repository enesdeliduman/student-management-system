const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");
const Student = require("./Student");
const Lesson = require("./Lesson");


const PracticeExamTYT = sequelize.define('practice_exam_TYT', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING,
        defaultValue: "TYT"
    },
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Student,
            key: "id"
        },
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Kurum içi deneme"
    },
    totalTrue: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    totalFalse: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    totalBlank: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    totalNet: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    turkish: {
        type: DataTypes.JSON,
        trueQ: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        falseQ: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        blankQ: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        net: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    },
    mathematics: {
        type: DataTypes.JSON,
        trueQ: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        falseQ: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        blankQ: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        net: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    },
    social: {
        type: DataTypes.JSON,
        history: {
            type: DataTypes.JSON,
            trueQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            falseQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            blankQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            net: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            }
        },
        religiousCulture: {
            type: DataTypes.JSON,
            trueQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            falseQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            blankQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            net: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            }
        },
        geography: {
            type: DataTypes.JSON,
            trueQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            falseQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            blankQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            net: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            }
        },
        philosophy: {
            type: DataTypes.JSON,
            trueQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            falseQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            blankQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            net: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            }
        },
    },
    science: {
        type: DataTypes.JSON,
        biology: {
            type: DataTypes.JSON,
            trueQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            falseQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            blankQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            net: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            }
        },
        chemistry: {
            type: DataTypes.JSON,
            trueQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            falseQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            blankQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            net: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            }
        },
        physics: {
            type: DataTypes.JSON,
            trueQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            falseQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            blankQ: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            net: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            }
        }
    },
    practiceDate: {
        type: DataTypes.DATEONLY
    }
}, { timestamps: true });


module.exports = PracticeExamTYT;