const ErrorHandler = async (err, req, res, next) => {
    let status=500
    if (err.status == 404) {
        status=404
    }
    console.log(err)
    res.render("site/500", {
        title: "Hata",
        err: err,
    });
};

module.exports.ErrorHandler = ErrorHandler;