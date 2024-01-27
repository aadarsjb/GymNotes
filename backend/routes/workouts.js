const express = require('express');

const router = express.Router();
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');



///Get all workouts
router.get('/', getWorkouts);
 
//GEt a single workout
router.get('/:id', getWorkout);

//POST a new workout
router.post ('/', createWorkout);


//DeleTE a single workout
router.delete('/:id', deleteWorkout);


//Udate a single workout
router.patch('/:id', updateWorkout);


module.exports = router;