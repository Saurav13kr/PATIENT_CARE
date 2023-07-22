const mongoose = require('mongoose');


const prescriptionSchema = new mongoose.Schema({

    disease: {
        type: String,
        required: true,
    },
    medicines: {
        type: String
    },
    doctorId: {
        type: String
    },
    doctorName: {
        type: String
    }
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription;