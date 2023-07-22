const express = require('express');
const router = express.Router();

const addNewDoctor = require('../Controllers/addNewDoctor');
const getAllDoctors = require('../Controllers/getAllDoctors');
const getPatientsList = require('../Controllers/DoctorController/getPateintsList');
const getAppointment = require('../Controllers/DoctorController/getAppointments');
const addPrescription = require('../Controllers/DoctorController/addPrescription');
const DeleteAppointment = require('../Controllers/DoctorController/DeleteAppointment');



// route to get all doctors
router.get('/allDoctors', async (req, res, next) => {
    const docInfo = await getAllDoctors();
    res.status(200).send(docInfo);
});


router.post('/addDoctor', async (req, res, next) => {

    const data = req.body;
    console.log(req.body);

    // Adding validation
    if (!data.name || !data.age || !data.password || !data.phoneNumber || !data.qualification || !data.specialisation || !data.city) {
        return res.status(400).json({
            error: 'Missing required fields'
        });
    }

    try {
        await addNewDoctor(data);
        res.status(200).json({
            success: `Doctor Added Successfully`
        })
    }
    catch (error) {
        console.log(`Error occured: ${error}`);
        res.status(500).json({
            error: `Problem in adding the new Doctor`
        })
    }
})

// router to get all the patients 
router.get('/getAllPatients', async (req, res, next) => {

    // console.log(`Data at router: ${req.body}`);
    var doctorId = req.query.doctorId;
    console.log(`Doctor id at router: ${doctorId}`);

    if (!doctorId) {
        doctorId = req.body.doctorId;
        try {
            const patientlist = await getPatientsList(doctorId);
            res.status(200).send(patientlist);
        } catch (error) {
            res.status(500).json({
                "error": error
            });
        }
    }
    else {
        try {
            const patientlist = await getPatientsList(doctorId);
            res.status(200).send(patientlist);
        } catch (error) {
            res.status(500).json({
                "error": error
            });
        }
    }
});


// router to get all appointments within this week
router.get('/getAppointment', async (req, res, next) => {
    try {
        const body = req.query;
        console.log(`Doctor Id: ${body.doctorId}`);
        const patients = await getAppointment(body);
        console.log(`Patients list: ${patients}`);
        res.status(200).send(patients);
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).send({ error: "An error occurred while fetching appointments" });
    }
});


// router to add patient prescription 
router.post('/addPatientPrescription', async (req, res) => {
    try {
        const body = req.body;
        console.log("patient id: " + body.patientId);
        await addPrescription(body);
        await DeleteAppointment(body);
        res.status(200).json({
            "Success": "Added patient's prescription, also removed the appointment of patient"
        });
    } catch (error) {
        res.status(400).json({
            "Failure": "Could not add patient's prescription"
        });
    }
});



module.exports = router;