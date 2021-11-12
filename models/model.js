const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: {
            type: String,
            required: 'Choose either cario or resistance'
        },
        name: {
            type: String,
            trim: true,
            required: "Enter name of exercise"
        },
        duration: {
            type: Number,
            trim: true,
            required: "Duration of exercise"
        },
        weight: {
            type: Number,
            trim: true,

        },
        reps: {
            type: Number,
            trim: true,

        },
        sets: {
            type: Number,
            trim: true,

        },
        distance: {
            type: Number,
            trim: true,

        },
    }]
});

const Exercises = mongoose.model("Exercises", exercisesSchema)

module.exports = Exercises;