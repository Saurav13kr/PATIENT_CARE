import axios from "axios";

const getPrescription = async (body) => {
    const url = "http://localhost:8000/patient/getAllPrescription";
    console.log(`patient Id: ${body.patientId}`);

    try {
        const prescription = await axios.get(url, {
            params: {
                "patientId": body.patientId,
            }, 
        });
        return prescription.data; 
    } catch (error) {
        console.log(`Error occurred: ${error}`);
        throw error; 
    }
};

export default getPrescription;