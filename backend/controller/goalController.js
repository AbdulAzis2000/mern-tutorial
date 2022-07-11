const asynHandler = require(`express-async-handler`)
const Goal = require ('../models/goalModel')
//@desc Get goals
//@route GET /api/goals
//@acces Private

const getGoals = asynHandler (async (req,res) => {
    res.status(200).json({message: 'Get Goals'})
})
module.exports = {
    getGoals
}
//@desc Set goals 
//@route POST /api/goals
//acces Private
const setGoal = asyncHandler (async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error ('Please add a text filed')  
    }

res.status(200).json({message: 'Get Goals'})
})
const upadateGoal = asyncHandler (async(req,res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
})
const deletGoal = asyncHandler (async(req,res) => {
    res.status(200).json({message: `Delet Goal ${req.params.id}`})
})