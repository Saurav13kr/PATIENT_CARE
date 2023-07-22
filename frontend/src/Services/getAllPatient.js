import axios from "axios";

const getAllPatient = async () => {

    try {
        const response = await axios.get('http://localhost:8000/patient/allPatient');
        console.log(`Value fetched successfully`);
        return response.data;
    }
    catch(error) {
        console.log(`Error occured: \n ${error}`);
        throw error;
    }
}

export default getAllPatient;