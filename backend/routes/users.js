const router = require('express').Router()
let User = require('../models/user')

router.route("/").get((req,res)=>{
    User.find().then(users=>res.json(users))
    .carch(err=>res.status(400).json('error'+err))
})


module.exports = router


