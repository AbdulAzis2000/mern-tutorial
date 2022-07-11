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
})// @route   PUT /api/goals/:id
// @access  Private 
const updateGoal = asyncHandler (async(req,res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true})

    res.status(200).json(updatedGoal)
})
// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @route   DELETE /api/goals/:id
// @access  Private 
const deleteGoal = asyncHandler (async(req,res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()

    res.status(200).json({id: req.params.id})
})
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}