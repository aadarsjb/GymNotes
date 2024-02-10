const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Schema for the databases
const workoutSchema = new Schema({
title: {
    type: String,
    required: true      
},

reps: {
    type: Number,
    required: true
},

load: {
    type: Number,
    required: true
},
}, { timestamps: true } );      //Automatically creates the property

module.exports = mongoose.model('Workout', workoutSchema)

