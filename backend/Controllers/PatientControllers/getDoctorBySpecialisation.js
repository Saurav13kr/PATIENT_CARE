const Doctor = require('../../Model/DocModel');

const getDoctorBySpecialisation = async (specialisation) => {

    try {
        const doctor = await Doctor.find({specialisation : specialisation});
        return doctor;
    } catch (error) {
        console.log(`Error caught at controller: ${error}`);
    }
}

module.exports = getDoctorBySpecialisation;