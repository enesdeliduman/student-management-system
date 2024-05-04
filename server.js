const express = require("express");
const app = express();
const ejs = require('ejs');
const dotenv = require("dotenv")
const bodyParser = require('body-parser');
const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
dotenv.config({
    path: "./config/.env"
})

const routers = require("./routers/index");
const { connectDB, sequelize } = require('./data/databaseConnect.js');
const { ErrorHandler } = require("./middlewares/ErrorHandler.js")
const relationships = require("./data/modelsRelationships.js");
const createTables = require("./data/dummyData.js").createTables;
const createDummyData = require("./data/dummyData.js").createDummyData;

// Middleware
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

// EJS
app.set('view engine', 'ejs');
app.use('/views', express.static('views'))
app.use('/uploads', express.static('uploads'))
app.use('/public', express.static('public'))

// Routers
app.use(routers);

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
