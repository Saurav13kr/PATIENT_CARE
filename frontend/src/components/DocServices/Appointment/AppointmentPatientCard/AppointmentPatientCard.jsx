import React, { useEffect, useState } from 'react';
import './PatientCard.css';
import Cookies from 'js-cookie';
import addPatientPrescription from '../../../../Services/addPatientPrescription';

function PatientCard(props) {
    const { name, schedule, dailyCheckup, slot, id } = props;
    const [selected, setSelected] = useState(false);
    const [writePrescription, setWritePrescription] = useState(false);
    const [disease, setDisease] = useState(null);
    const [medicine, setMedicine] = useState(null);

    useEffect(() => {
        console.log("Disease: " + disease);
        console.log("Medicine: " + medicine);
    }, [disease, medicine]);

    const handleVital = () => {
        setSelected(!selected);
    };

    const hanldePrescription = () => {
        setWritePrescription(!writePrescription);
    }

    const handleSubmitPrescription = async (e) => {

        console.log("Submission of the medicine");
        const prescriptionBody = {
            "patientId": id,
            "disease": disease,
            "medicines": medicine,
            "doctorId": Cookies.get("user_id")
        };

        try {
            await addPatientPrescription(prescriptionBody);
            console.log("Patient prescription sent to backend");
            window.location.reload(false);
        } catch (error) {
            console.log("Error found ", error);
        }
    };


    return (
        <div className="patient-card-main-section">
            <div className="patient-card-body">
                {/* for name */}
                <div id="pat-info">
                    <img
                        alt="patImage"
                        src="https://images.healthshots.com/healthshots/en/uploads/2022/06/29194216/doctor-patient.jpg"
                    />
                    <h3>{name}</h3>
                </div>

                {/* for time and slot */}
                <div id="schedule">
                    <p>Schedule is as follows:</p><br></br>
                    <p><b>{schedule.slice(0, 10)}</b></p>
                    <p>Slot: {slot}</p>
                    <button onClick={hanldePrescription}>Write Prescription</button>
                </div>

                {/* for vital checks */}
                <div id="vitals">
                    <button id='vital-btn' onClick={handleVital}>Check Vitals</button>
                </div>
            </div>

            {selected && (
                <div className="vital-checks">
                    <h4>Vital Checks:</h4>
                    <ul>
                        {dailyCheckup.slice(0, 5).map((checkup, index) => (
                            <li key={index}>
                                <h3>Date: {checkup.createdAt.slice(0, 10)}</h3>
                                <ul>
                                    <li>BMI: {checkup.bmi}</li>
                                    <li>BP: {checkup.systolicPressure}/{checkup.diastolicPressure}</li>
                                    <li>sugar: {checkup.bloodSugar}</li>
                                    <li>Calories Intake: {checkup.caloriesIntake}</li>
                                    <li>Calories Burnt: {checkup.caloriesBurnt}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {
                writePrescription && (
                    <div className='prescription-section'>
                        <h3>Write Prescription down below</h3>
                        <div>
                            <label htmlFor='disease'>Enter Disease</label><br></br>
                            <input onChange={(e) => { setDisease(e.target.value) }} type='text' id='disease' name='disease' placeholder='Patients disease'></input>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor='comments'>Enter comments</label><br></br>
                            <textarea onChange={(e) => { setMedicine(e.target.value) }} id='comments' name='comments' placeholder='enter comments/medicines'></textarea>
                        </div>
                        <div>
                            <button onClick={(e) => { handleSubmitPrescription(e) }}>Submit</button>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default PatientCard;
