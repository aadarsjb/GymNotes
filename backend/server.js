require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const workoutRoutes = require('./routes/workouts');


///global middleware

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


//route handlers or middleware
app.use('/api/workouts', workoutRoutes);

//connect to database
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        //listening for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listening on port ', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    });
