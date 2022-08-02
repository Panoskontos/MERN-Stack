const router = require('express').Router()
let Exercise = require('../models/exercise')

router.route("/").get(async (req,res)=>{
    try{
        const users = await Exercise.find()
        res.json(users)

    }catch(err){
        res.status(400).json('error'+err)}
})

router.route("/").post((req,res)=>{
    const newExercise = new Exercise({
        username: req.body.username,
        description: req.body.description,
        duration: req.body.duration
    })
    newExercise.save().then(()=>res.json(newExercise)).catch(err=>res.status(400).json("Error"+err))
})



module.exports = router




