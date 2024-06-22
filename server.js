const express = require("express");
const app = express();
const ejs = require('ejs');
const dotenv = require("dotenv")
const csurf = require("csurf");
const bodyParser = require('body-parser');
const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
dotenv.config({
    path: "./config/.env"
})

const routers = require("./routers/index");
const { connectDB, sequelize } = require('./data/databaseConnect.js');
const { ErrorHandler } = require("./middlewares/ErrorHandler.js")
const locals = require("./middlewares/locals.js")
const relationships = require("./data/modelsRelationships.js");
const createTables = require("./data/dummyData.js").createTables;
const createDummyData = require("./data/dummyData.js").createDummyData;

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    },
    store: new SequelizeStore({
        db: sequelize
    })
}));
app.use(locals)
app.use(csurf())

// EJS
app.set('view engine', 'ejs');

// Static Files
app.use('/views', express.static('views'))
app.use('/uploads', express.static('uploads'))
app.use('/public', express.static('public'))

if (process.env.NODE_ENV === "production") {
    app.use(routers);
    app.use((req, res, next) => {
        let err = new Error("")
        err.status = 404
        next(err)
    });
} else if (process.env.NODE_ENV == "fixed") {
    app.use((req, res) => {
        res.render("site/notProductionMode",{
            title:"Yapım aşamasında"
        });
    }); 
}

// Error Handler Middleware
app.use(ErrorHandler);

// Veritabanı bağlantısı
(async () => {
    await connectDB();
    await relationships();
    await createDummyData();
})();

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`)
})
