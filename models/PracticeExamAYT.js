const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");
const Student = require("./Student");
const Lesson = require("./Lesson");


const PracticeExamAYT = sequelize.define('practice_exam_AYT', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING,
        defaultValue: "AYT"
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
    TurkishLanguageAndLiteratureSocialSciences1: {
        type: DataTypes.JSON,
        TurkishLanguageAndLiterature: {
            type: DataTypes.JSON,
            allowNull: false,
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
        socialScience1: {
            type: DataTypes.JSON,
            allowNull: false,
            history1: {
                type: DataTypes.JSON,
                allowNull: false,
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
                },
            },
            geography1: {
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
        }
    },
    socialScience2: {
        type: DataTypes.JSON,
        allowNull: false,
        history2: {
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
        geography2: {
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
    mathematics: {
        type: DataTypes.JSON,
        allowNull: false,
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


module.exports = PracticeExamAYT;