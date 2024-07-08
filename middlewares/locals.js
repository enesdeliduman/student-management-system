module.exports = function (req, res, next) {
    res.locals.isAuth = req.session.isAuth;
    res.locals.fullname = req.session.fullname;

    res.locals.isTeacher = req.session.role ? req.session.role.includes('Teacher') : false;
    res.locals.isParent = req.session.role ? req.session.role.includes('Parent') : false;
    res.locals.isAdmin = req.session.role ? req.session.role.includes('Admin') : false;
    next();
}