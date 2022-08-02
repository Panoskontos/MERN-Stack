const router = require('express').Router()
let User = require('../models/user')

router.route("").get(async (req,res)=>{
    try{
        const users = await User.find()
        res.json(users)

    }catch(err){
        res.status(400).json('error'+err)}
})

router.route("/add").post((req,res)=>{
    const newUser = new User({
        username:req.body.username,
    })
    newUser.save().then(()=>res.json(newUser)).catch(err=>res.status(400).json("Error"+err))
})


module.exports = router


