//@desc Get goals
//@route GET /api/goals
//@acces Private
const getGoals = (req,res) => {
    res.status(200).json({message: 'Get Goals'})
}
module.exports = {
    getGoals
}
//@desc Set goals 
//@route POST /api/goals
//acces Private
const setGoal = (req,res) => {
    console.log(req.body)
res.status(200).json({message: 'Get Goals'})
}