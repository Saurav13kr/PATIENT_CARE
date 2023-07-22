import getAllPatient from "./getAllPatient.js";

const verifyPassWord = async (phoneNumber, pw) => {

    try {
        const data = await getAllPatient();
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


export default verifyPassWord;
