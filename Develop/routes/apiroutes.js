const router = require('express').Router();
const Workout = require('../models/WorkoutModel');

router.get('/api/workouts', async (req, res) => {
    // console.log("workouts route hit!");
    Workout.aggregate([
        { $addFields:{totalDuration:{$sum:"$exercises.duration"}}}
    ])
    .then((data) => {
        // console.log(data)
        return res.status(200).json(data)
    })
    .catch((err) => {
        return res.status(500).json(err)
    });
});


router.get('/api/workouts/range', async (req, res) => {
    try {
        const workoutData = await Workout.find({});
        return res.status(200).json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/api/workouts', async (req, res) => {
    try {
    const workoutId = await Workout.create({});
    console.log("workoutId::::" + workoutId);
    return res.status(200).json(workoutId);
    } catch (err) {
        return res.status(500).json(err)
    }
});


// router.put("/api/workouts/:id", (req, res) => {
//     let excercise = req.body;
//     console.log(excercise);
//     Workout.findByIdAndUpdate(
//         req.params.id,
//         { $push: { exercises: exercise }})
//     .then((data) => {
//         return res.status(200).json(data)
//     })
//     .catch((err) => {
//         return res.status(500).json(err)
//     })
// });


module.exports = router;