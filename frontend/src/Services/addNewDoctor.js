import axios from "axios";

const addNewDoctor = async(data) => {

    const url = "http://localhost:8000/doctor/addDoctor";

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

export default addNewDoctor;