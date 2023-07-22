import './Prescription.css';
import React, { useEffect, useState } from "react";
import PrescriptionCard from './PresciptionCard/PrescriptionCard';
import getPrescription from '../../../Services/getPrescription';
import Cookies from 'js-cookie';

function Prescriptions() {
    const patientId = Cookies.get("user_id");
    const [prescription, setPrescription] = useState(null);

    useEffect(() => {
        const fetchPrescription = async () => {
            try {
                const prescriptionData = await getPrescription({ patientId });
                setPrescription(prescriptionData);
                console.log(prescriptionData);
            } catch (error) {
                console.log("Error occurred: ", error);
            }
        };

        fetchPrescription();
    }, [patientId]);

    return (
        <>
            <h1>Prescriptions</h1>
            <div className='prescription-card-container'>
                {prescription ? (
                    prescription.map((data, index) => (
                        <PrescriptionCard
                            key={index}
                            doctor={data.doctorName}
                            disease={data.disease}
                            medicine={data.medicines}
                        />
                    ))
                ) : (
                    <h1>No Data Found</h1>
                )}
            </div>
        </>
    );
}

export default Prescriptions;
