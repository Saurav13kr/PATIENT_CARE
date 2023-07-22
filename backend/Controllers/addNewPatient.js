const PatientModel = require('../Model/PatModel');

const addNewPatient = (data) => {

    const newPatient = new PatientModel ({
        name: data.name,
        age: data.age,
        password: data.password,
        email: data.email,
        phoneNumber: data.phoneNumber,
        city: data.city,
    });

    newPatient.save()
    .then((val) => {
        console.log(`New Patient added with id: ${val._id}`);
    })
    .catch((error) => {
        console.log(`Error occured while adding the patient: \n ${error}`);
    })
}

module.exports = addNewPatient;