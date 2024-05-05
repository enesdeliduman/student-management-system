const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const Role = require("../models/Role");
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");

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
    ],
  });
  if (user) {
    const match = await user.comparePassword(password);
    if (match) {
      req.session.role = user.role.name;
      req.session.isAuth = true;
      req.session.fullName = user.student
        ? user.student.fullName
        : user.teacher.fullName;
      console.log(req.session);
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
    alert: req.session.alert, // alert eklemeyi unutmayın
  });
});
