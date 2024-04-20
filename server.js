const express = require("express");
const app = express();
const ejs = require('ejs');
const dotenv = require("dotenv")

dotenv.config({
    path: "./config/.env"
})

const routers = require("./routers/index");
const { connectDB } = require('./data/databaseConnect.js');
const { ErrorHandler } = require("./middlewares/ErrorHandler.js")
const relationships = require("./data/modelsRelationships.js");
const createTables = require("./data/dummyData.js").createTables;
const createDummyData = require("./data/dummyData.js").createDummyData;

// Middleware
app.use(express.json());

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
    // await relationships();
    // await createDummyData();
})();

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`)
})
