const DoctorModel = require('../Model/DocModel')

// function to fetch all the patients from the database
const getAllDoctors = async () => {

    try {
        const docInfo = await DoctorModel.find();
        console.log(`Patient info are as follows: ${docInfo}`);
        return docInfo;
    }
    catch(error) {
        console.log(`Error encountered: ${error}`);
    }
};

module.exports = getAllDoctors;

// Working as fine as possible: checked and verified ✅✅