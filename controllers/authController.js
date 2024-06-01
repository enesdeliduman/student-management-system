const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const Role = require("../models/Role");
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");
const Parent = require("../models/Parent");

module.exports.signInGet = asyncHandler(async (req, res, next) => {
  const alert = req.session.alert;
  delete req.session.alert;

  res.render("auth/sign-in", {
    title: "Giriş Yap",
    csrfToken: req.csrfToken(),
    alert: alert,
  });
});

module.exports.signInPost = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({
    where: {
      username: username,
    },
    include: [
      {
        model: Role,
        attributes: ["name"],
      },
      {
        model: Student,
        attributes: ["fullName"],
      },
      {
        model: Teacher,
        attributes: ["fullName"],
      },
      {
        model: Parent,
        attributes: ["fullName"],
      },
    ],
  });
  if (user) {
    const match = await user.comparePassword(password);
    if (match) {
      req.session.role = user.role.name;
      req.session.isAuth = true;
      req.session.userId = user.id;

      let fullName = "";
      if (user.student) {
        fullName = user.student.fullName;
      } else if (user.teacher) {
        fullName = user.teacher.fullName;
      } else if (user.parent) {
        fullName = user.parent.fullName;
      }

      return res.redirect("/");
    }
    req.session.alert = {
      message: "Kullanıcı adı veya şifre hatalı. Lütfen tekrar deneyiniz",
      type: "error",
    };
    return res.redirect("/auth/sign-in");
  }
  req.session.alert = {
    message:
      "Böyle bir kullanıcı bulamadık. Lütfen bilgilerinizi kontrol ediniz",
    type: "error",
  };

  res.render("auth/sign-in", {
    title: "Giriş Yap",
    csrfToken: req.csrfToken(),
    alert: req.session.alert
  });
});
module.exports.logOut = asyncHandler(async (req, res, next) => {
  req.session.isAuth = false
  req.session.role = null
  req.session.fullName = null

  res.redirect("/")
});
