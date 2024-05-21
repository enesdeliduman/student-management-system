const ErrorHandler = async (err, req, res, next) => {
    console.log(err)
    res.render("site/500", {
        title: "Hata",
        err: err
    });
};

module.exports.ErrorHandler = ErrorHandler;