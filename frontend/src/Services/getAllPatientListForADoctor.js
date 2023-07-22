import axios from "axios";

const getAllPatientList = async (body) => {

    const url = "http://localhost:8000/doctor/getAllPatients";
    console.log(`data at controller: ${body.doctorId}`);

    try {
        const response = await axios.get(url, { params: body });

        console.log("Data fetched successfully");
        return response.data;
    } catch (error) {
        console.log("Error occurred:", error);
        throw error;
    }
};

export default getAllPatientList;
