const Patient = require('../../Model/PatModel');

const getAllBookings = async (body) => {

    try {
        if(!body.patientId) {
            throw new Error(`Patient Id not found`);
        }

        const id = body.patientId;
        const patient = await Patient.findById(id);

        if(!patient) {
            throw new Error(`Patient not found`);
        }

        const bookings = patient.bookings;
        console.log(`Bookings found: ${bookings}`);
        return bookings;
    } catch (error) {
        console.log(`Error found: ${error}`);
    }
}

module.exports = getAllBookings;