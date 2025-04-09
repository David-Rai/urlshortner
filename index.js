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

//use routes for better maintainance
app.use(router)

//listening the server 
const port = process.env.PORT || 10000
app.listen(port)
