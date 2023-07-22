const DoctorModel = require('../Model/DocModel');

const addNewDoctor = (data) => {

    const newDoctor = new DoctorModel ({
        name: data.name,
        age: data.age,
        password: data.password,
        email: data.email,
        city: data.city,
        phoneNumber: data.phoneNumber,
        qualification: data.qualification,
        specialisation: data.specialisation,
    });

    newDoctor.save()
    .then((val) => {
        console.log(`New Patient added with id: ${val._id}`);
    })
    .catch((error) => {
        console.log(`Error occured while adding the patient: \n ${error}`);
    })
}

module.exports = addNewDoctor;