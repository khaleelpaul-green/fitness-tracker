const Workout = require('../models/model');
const router = require("express").Router();

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ])
        .then(exercise => {
            res.json(exercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then(WorkoutExercises => {
      res.json(WorkoutExercises);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,
        {
            $push: { exercises: req.body },
            $inc: { totalDuration: req.body.duration },
        },

    ).then(exercise => {
        res.json(exercise)
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ])
        .sort({ day: -1 }).limit(7)
        .then(exercise => {
            res.json(exercise.reverse());
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

module.exports = router;