const Patient = require('../../Model/PatModel');
const moment = require('moment');

const getAppointment = async (body) => {
    const docId = body.doctorId;

    try {
        const patients = await Patient.find({
            "bookings.doctorId": docId
        });

        // Create a Set to store unique patient IDs
        const uniquePatientIds = new Set();

        // Filter the patients array to include only unique individuals
        const uniquePatients = patients.filter((patient) => {
            if (!uniquePatientIds.has(patient._id.toString())) {
                uniquePatientIds.add(patient._id.toString());
                return true;
            }
            return false;
        });

        return uniquePatients;
    } catch (error) {
        console.log(`Error occurred: ${error}`);
        throw error;
    }
};

module.exports = getAppointment;
