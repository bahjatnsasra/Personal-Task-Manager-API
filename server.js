const express = require('express');
const DB = require("./database/DB_connection");
const userApi = require("./routes/userRoutes")
const taskApi = require("./routes/taskRoutes")
const categoryApi = require("./routes/categoryRoutes")

require("dotenv").config();

const app = express()
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
})
app.use(express.json())
app.use(express.urlencoded({extended : false}))

DB.connectToDB();
app.use("/user", userApi)
app.use("/task", taskApi)
app.use("/category", categoryApi)


const port = process.env.PORT 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});