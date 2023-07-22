const Patient = require('../../Model/PatModel');

const getPatientsList = async (doctorId) => {

    try {
        const patients = await Patient.find({'bookings.doctorId' : doctorId});
        return patients;
    } catch (error) {
        console.log(`Error Occured: ${error}`);
    }

}

module.exports = getPatientsList;