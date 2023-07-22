var express = require('express');
var router = express.Router();

const getAllPatient = require('../Controllers/getAllPatients')
const addNewPatient = require('../Controllers/addNewPatient')
const addDailyCheckUp = require('../Controllers/addDailyCheckup')
const addBooking = require('../Controllers/addPatientBooking')
const getAllBookings = require('../Controllers/PatientControllers/getAllBookings')
const getDoctorBySpecialisation = require('../Controllers/PatientControllers/getDoctorBySpecialisation')
const getAllPrescription = require('../Controllers/PatientControllers/getAllPrescription')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/allPatient', async (req, res, next) => {
  const patInfo = await getAllPatient();
  res.status(200).send(patInfo);
});


// routing to add a new patient
router.post('/addPatient', async (req, res, next) => {
  const data = req.body;
  console.log(req.body);

  // Adding validation
  if (!data.name || !data.age || !data.password || !data.phoneNumber || !data.city) {
    return res.status(400).json({
      error: 'Missing required fields'
    });
  }

  try {
    await addNewPatient(data);
    res.status(200).json({
      success: `Patient Added Successfully`
    })
  }
  catch (error) {
    console.log(`Error occured: ${error}`);
    res.status(500).json({
      error: `Problem in adding the new patient`
    })
  }
});

// route to add daily checkup details
router.post('/addDailyCheckupData', async (req, res, next) => {

  const data = req.body;
  console.log(`data received to add to daily checkup is: ${data}`);
  try {
    await addDailyCheckUp(data);
    res.status(200).json({
      "success": "Data added in the daily checkup section"
    });
  } catch (error) {
    res.status(500).json({
      "failure": `Error occured: ${error}`
    });
  }
});


// router to add new booking into user account
router.post('/addBooking', async (req, res, next) => {

  const data = req.body;
  console.log(`Data received for booking is as follows: ${data.doctorId}`);
  // console.log(`Slot number: ${data.slot}`);

  if(!data.patientId || !data.doctorId || !data.slot) {
    res.status(404).json({
      "Failure": "required elements missing"
    });
    console.log(`Missing elements`);
  }
  else{
    try {
      await addBooking(data);
      res.status(200).json({
        "success": "Booking added successfully"
      });
    } catch (error) {
      res.status(500).json({
        "failure": `Error occured: ${error}`
      });
    }
  }
});


// router to find all the bookings done by a patient
router.get('/allBookings', async (req, res, next) => {

  const body = req.body;
  if(!body.patientId) {
    res.status(404).json({
      "error": "Patient Id not found"
    });
  }

  try {
    const bookings = await getAllBookings(body);
    res.status(200).send(bookings);
  } catch (error) {
    res.status(500).json({
      "error": error
    })
  }
});

router.get('/doctorSpecialised', async(req, res, next) => {

  let specialisation = req.query.specialisation;

  if(!specialisation) {
    try {
      const doctors = await getDoctorBySpecialisation(req.body.specialisation);
      res.status(200).send(doctors);
    } catch (error) {
      res.status(500).json({
        "error": error
      })
    }
  }
  else {
    try {
      const doctors = await getDoctorBySpecialisation(specialisation);
      res.status(200).send(doctors);
    } catch (error) {
      res.status(500).json({
        "error": error
      })
    }
  }
})


// get all the prescriptions from the doctor
router.get('/getAllPrescription', async (req, res) => {

  const body = req.query;
  try {
    const prescription = await getAllPrescription(body);
    res.status(200).send(prescription);
  } catch (error) {
    res.status(500).json({
      "error": error
    })
  }
});


module.exports = router;
