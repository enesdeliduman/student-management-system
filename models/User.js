const { DataTypes } = require("sequelize");
const { sequelize } = require("../data/databaseConnect");
const bcrypt = require("bcrypt");

const User = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

User.prototype.comparePassword= async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
  };

module.exports = User;
