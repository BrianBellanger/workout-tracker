const { Router } = require("express");

Router.put("/api/workouts/:id", (req, res) => {
    let excercise = req.body;
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: exercise }}
    )

    .catch(err => {})
    )

}