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


router.route("/:id").get((req,res)=>{
    Exercise.findById(req.params.id)
    .then(i=>res.json(i))
    .catch(err=>res.status(400).json('error'+err))
})


router.route("/:id").delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Item was deleted"))
    .catch(err=>res.status(400).json('error'+err))
})


// PUT
router.route("/:id").put((req,res)=>{
    Exercise.findById(req.params.id)
    .then(i=>{
        i.username = req.body.username
        i.description = req.body.description
        i.duration = Number(req.body.duration)

        i.save()
        .then(()=>res.json('exercise updated'))
        .catch(err=>res.status(400).json('error:'+err))
    })
})


module.exports = router




