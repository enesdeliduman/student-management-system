module.exports = (req, res, next) => {
  if (!req.session.isAuth) {
    return res.redirect('/auth/sign-in')
  }
  if (req.session.role != "Teacher") {
    return false
  }
  // if (req.session.role != "Admin" && req.session.role != "Teacher") {
  //   return res.redirect("/")
  // }
  next();
}