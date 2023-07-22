import axios from "axios";

const getAllDoctorBySpecialisation = async (specialisation) => {

    const url = "http://localhost:8000/patient/doctorSpecialised";

    try {
        const response = await axios.get(url, {
            params: {
                specialisation: specialisation
            }
        });
        console.log(`Value fetched successfully`);
        return response.data;
    }
    catch(error) {
        console.log(`Error occured: \n ${error}`);
        throw error;
    }
}

export default getAllDoctorBySpecialisation;