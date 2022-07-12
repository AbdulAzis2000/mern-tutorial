const express = require ('express')
const router = express.Router()


router.get ('/' (req,res)=>{
    res.status(200).json({message: 'Get Goals'})
})
router.post('/', (req,res)=>{
    res.status(200).json({message: 'Set Goal'})
})
router.put('/:id',req,res)=>{
    res.status(200).json({message: `update Goal ${req.params.id}`})
}
router.delete('/id',(req,res)=>{
    res.status(200).json({message: 'Delete Goal ${req.params.id}'})
})
const { getGoals } = require('../controllers/goalController')
mmodule.exports = router
const express = require("express");
const router = express.Router();
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
  } = require("../controllers/goalController");
  const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router; 