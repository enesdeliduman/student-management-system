const express = require("express");
const app = express();
const ejs = require('ejs');
const dotenv=require("dotenv")

dotenv.config({
    path: "./config/.env"
})

// Middleware
app.use(express.json());

// Routers
const routers = require("./routers/index");
app.use(routers)

// EJS
app.set('view engine', 'ejs');
app.use('/views', express.static('views'))
app.use('/public', express.static('public'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`)
})