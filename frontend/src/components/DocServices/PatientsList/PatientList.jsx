import './PatientList.css'
import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
import getAllPatientList from '../../../Services/getAllPatientListForADoctor';
import PatientListCard from './PatientListCard/patientListCard';
import Cookies from 'js-cookie';

function PatientList() {

    const doctorId = Cookies.get("user_id");
    const [patients, setPatients] = useState([]);
    // console.log(`Doctor id in jsx: ${doctorId}`);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const data = await getAllPatientList({
                    "doctorId": doctorId
                });
                setPatients(data);
            } catch (error) {
                console.log(`Error occurred: ${error}`);
            }
        };

        fetchPatients();
    }, [doctorId]);

    return (
        <div className='patient-list-main-container'>
            <div id='heading'>
                <h1>Patient List</h1>
            </div>
            <div className='patient-list-card-container'>
                {patients.map((data, id) => (
                    <PatientListCard
                        key={id}
                        name={data.name}
                        image="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/QIAQ9Rd/videoblocks-doctor-with-patient-characters-animation-4k-video-animated_hbx0tgo8l_thumbnail-1080_01.png"
                    />
                ))}
            </div>
        </div>
    )
}

export default PatientList;
