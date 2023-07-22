const PatientModel = require('../Model/PatModel')

// function to fetch all the patients from the database
const getAllPatient = async () => {

    try {
        const patInfo = await PatientModel.find();
        console.log(`Patient info are as follows: ${patInfo}`);
        return patInfo;
    }
    catch(error) {
        console.log(`Error encountered: ${error}`);
    }
};

module.exports = getAllPatient;

// Working as fine as possible: checked and verified ✅✅