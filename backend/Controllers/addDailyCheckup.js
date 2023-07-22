const Patient = require('../Model/PatModel');
const DailyCheckup = require('../Model/PatientInfoSchemas/dailyCheckUp');

const addDailyCheckUp = async (body) => {
    const bmi = body.weight / ((body.height / 100) * (body.height / 100));
    console.log(`Body received at adding daily checkup: ${body}`);

    try {
        const patientId = body.patientId;
        const patient = await Patient.findById(patientId);

        const vitals = new DailyCheckup({
            height: body.height,
            weight: body.weight,
            bmi: bmi,
            systolicPressure: body.systolicPressure,
            diastolicPressure: body.diastolicPressure,
            bloodSugar: body.bloodSugar,
            caloriesIntake: body.caloriesIntake,
            caloriesBurnt: body.caloriesBurnt
        });

        patient.dailyCheckup.push(vitals);
        await patient.save();
        console.log(`Patient vitals recorded successfully`);
    } catch (error) {
        console.log(`Error occurred: ${error}`);
    }
};

module.exports = addDailyCheckUp;
