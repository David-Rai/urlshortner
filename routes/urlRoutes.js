const express = require("express")
const router = express.Router()
const {sent,goto}=require("../controllers/urlControllers")
const path=require('path')

//senting routes data is received here
router.get('/',sent)

//redirecting route
router.get('/goto/:id',goto)

//serving the database data short urls
router.get('/data',(req,res)=>{
    res.sendFile(path.resolve("model","data.json"))
})

module.exports = router