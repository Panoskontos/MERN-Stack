const router = require('express').Router()
let Exercise = require('../models/exercise')

router.route("/").get((req,res)=>{
   res.send("test")
})


module.exports = router




