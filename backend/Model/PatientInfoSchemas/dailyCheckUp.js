const mongoose = require('mongoose');

const dailyCheckupSchema = new mongoose.Schema({
    height: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    bmi: {
        type: Number,
    },
    systolicPressure: {
        type: Number,
    },
    diastolicPressure: {
        type: Number,
    },
    bloodSugar: {
        type: Number,
    },
    caloriesIntake: {
        type: Number,
    },
    caloriesBurnt: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('DailyCheckup', dailyCheckupSchema);
