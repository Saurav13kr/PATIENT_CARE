const mongoose = require('mongoose');

const DocSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: Buffer,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    city:{
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    specialisation: {
        type: String,
        required: true,
    },
    patientList: [{
        name: {
            type: String,
        },
        patientId: {
            type: String,
        },
    }],
    appointment: [{
        time: {
            type: Date,
        },
        patientName: {
            type: String,
        },
        problemStatement: {
            type: String,
        },
    }],
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', DocSchema);
module.exports = Doctor;
