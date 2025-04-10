const express = require("express")
const app = express()
require('dotenv').config()
const router = require("./routes/urlRoutes")
const path=require("path")

//setting the ejs or templete engine for SSR
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

//built-in middleware in express js
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(express.static(path.join(__dirname,"model")))



//use routes for better maintainance
app.use(router)


// serving the database datas


//listening the server 
const port = process.env.PORT || 1111
app.listen(port)