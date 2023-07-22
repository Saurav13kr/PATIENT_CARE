import axios from "axios";


const addPatientBooking = async(data) => {

    const url = "http://localhost:8000/patient/addBooking";

    await axios.post(url, data)
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch((error) => {
        console.log(`error occured:\n ${error}`);
        throw error;
    });

}

export default addPatientBooking;