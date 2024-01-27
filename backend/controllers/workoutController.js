const Workout = require('../models/workoutmodel');
const mongoose = require('mongoose');


//get Workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1});

    res.status(200).json(workouts);
}


//get a single workout
const getWorkout= async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Workout'});
    }

    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({error: 'Not Found'});
    }

    res.status(200).json(workout);
}


//create a new workout
const createWorkout = async (req, res, next) => { 
    const { title, load, reps } = req.body;

    //add doc to db
    try {
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

}


//delete a workout
const deleteWorkout= async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Workout'});
    }

    const workout = await Workout.findOneAndDelete({_id: id});

    if (!workout) {
        return res.status(404).json({error: 'Not Workout Found'});
    }

    res.status(200).json(workout);
}


//Update workout
const updateWorkout = async (req, res) => { 
    const { id } = req.params;

    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Workout'});
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({error: 'Not Workout Found'});
    }

    res.status(200).json(workout);

}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}