// module.exports = (req, res, next) => {
//   if (!req.session.isAuth) {
//     return res.redirect("/")
//   }
//   if (req.session.role.includes('Teacher') || req.session.role.includes('Admin')) {
//     next();
//   }
//   return res.redirect("/")
// }

module.exports = (req, res, next) => {
  if (!req.session.isAuth) {
    return res.redirect('/auth/sign-in')
  }
  if (req.session.role != "Admin" && req.session.role != "Teacher") {
    return res.redirect("/")
  }
  next();
}