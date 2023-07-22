const Patient = require('../../Model/PatModel');

const DeleteAppointment = async (body) => {
    const patId = body.patientId;
    const docId = body.doctorId;

    try {
        const patient = await Patient.findById(patId);

        if (!patient) {
            throw new Error("No patient found");
        }

        // Remove the booking with the specified doctorId
        patient.bookings = patient.bookings.filter((booking) => booking.doctorId !== docId);

        // Save the updated patient information
        await patient.save();

        return patient;
    } catch (error) {
        console.log(`Error occurred: ${error}`);
        throw error;
    }
};

module.exports = DeleteAppointment;
