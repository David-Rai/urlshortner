const express = require("express")
const router = express.Router()
const {sent,goto}=require("../controllers/urlControllers")

//senting routes data is received here
router.get('/',sent)

//redirecting route
router.get('/goto/:id',goto)

module.exports = router