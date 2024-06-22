const logger = require("./logger")

const ErrorHandler = async (err, req, res, next) => {
    console.log(err)
    console.log(req.originalUrl)
    if (err.name == 'SequelizeValidationError') {
        const validationErrors = err.errors.map(error => ({
            message: error.message,
        }));
        req.session.errors = validationErrors;
        return res.redirect(req.originalUrl)
    }
    if (process.env.NODE_ENV == "production") {
        let status = 500
        if (err.status == 404) {
            status = 404
        }
        res.render("site/500", {
            title: "Hata",
            err: err,
        });
        logger.error(`${status} - ${err} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    }
};

module.exports.ErrorHandler = ErrorHandler;