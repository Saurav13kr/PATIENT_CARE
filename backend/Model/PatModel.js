const mongoose = require('mongoose');
const Prescription = require('./PatientInfoSchemas/prescription');
const DailyCheckup = require('./PatientInfoSchemas/dailyCheckUp');
const moment = require('moment');

const patientSchema = new mongoose.Schema({
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
        unique: true,
    },
    city: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    bookings: [
        {
            doctorName: {
                type: String,
            },
            doctorId: {
                type: String,
                required: true,
            },
            slot: {
                type: Number,
            },
            appointmentDay: {
                type: Date,
            },
            time: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    prescription: [Prescription.schema],
    dailyCheckup: [DailyCheckup.schema],
}, { timestamps: true });

patientSchema.virtual('formattedAppointmentDate').get(function() {
    return moment(this.bookings[0].appointmentDay).format('DD-MM-YYYY');
});

patientSchema.pre('save', function (next) {
    const currentDate = new Date();
    this.bookings = this.bookings.filter(
        (booking) => booking.appointmentDay >= currentDate
    );
    next();
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
