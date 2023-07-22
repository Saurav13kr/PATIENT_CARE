const Patient = require('../../Model/PatModel');
const Doctor = require('../../Model/DocModel')
const Prescription = require('../../Model/PatientInfoSchemas/prescription');

const addPrescription = async (body) => {
    const patId = body.patientId;
    const docId = body.doctorId;

    try {
        const patient = await Patient.findById(patId);
        const doctor = await Doctor.findById(docId);
        
        if (!patient) {
            throw new Error('Patient not found');
        }

        const prescription = new Prescription({
            disease: body.disease,
            medicines: body.medicines,
            doctorId: docId,
            doctorName: doctor.name
        });

        patient.prescription.push(prescription); 

        await patient.save();

        return prescription;
    } catch (error) {
        console.log(`Error occurred: ${error}`);
        throw error;
    }
};

module.exports = addPrescription;
