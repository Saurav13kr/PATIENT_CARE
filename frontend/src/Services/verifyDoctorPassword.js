import getAllDoctor from '../Services/getAllDoctor';

const verifyDoctorPassword = async (phoneNumber, pw) => {

    try {
        const data = await getAllDoctor();
        let found = -1;

        data.forEach((patient) => {
            if (patient.phoneNumber === phoneNumber && patient.password === pw) {
                found = patient._id;
            }
        });

        return found;
    } catch (error) {
        console.log(`Error occured: ${error}`);
    }

};


export default verifyDoctorPassword;
