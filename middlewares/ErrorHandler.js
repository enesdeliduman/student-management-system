const ErrorHandler = async (err, req, res, next) => {
    console.log(err)
    res.render("site/404", {
        title: "Hata"
    })
};

module.exports.ErrorHandler = ErrorHandler