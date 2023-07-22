const Patient = require('../../Model/PatModel');

const getAllPrescription = async (body) => {

    try {
        if(!body.patientId) {
            throw new Error(`Patient Id not found`);
        }

        const id = body.patientId;
        const patient = await Patient.findById(id);

        if(!patient) {
            throw new Error(`Patient not found`);
        }

        const prescription = patient.prescription;
        console.log(`Bookings found: ${prescription}`);
        return prescription;
    } catch (error) {
        console.log(`Error found: ${error}`);
    }
}

module.exports = getAllPrescription;