import axios from "axios";


const addDailyCheckupData = async(data) => {

    const url = "http://localhost:8000/patient/addDailyCheckupData";

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

export default addDailyCheckupData;