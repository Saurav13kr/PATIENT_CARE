import axios from "axios";

const getAllAppointment = async (body) => {
    const url = "http://localhost:8000/doctor/getAppointment";
    console.log(`docId: ${body.doctorId}`);

    try {
        const appointment = await axios.get(url, {
            params: {
                "doctorId": body.doctorId,
            }, 
        });
        return appointment.data; 
    } catch (error) {
        console.log(`Error occurred: ${error}`);
        throw error; 
    }
};

export default getAllAppointment;
