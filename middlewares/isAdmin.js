module.exports = (req, res, next) => {
  if (!req.session.isAuth) {
    return res.redirect('/auth/sign-in')
  }
  if (req.session.role != 'Admin') {
    return res.redirect('/')
  }
  next()
}
