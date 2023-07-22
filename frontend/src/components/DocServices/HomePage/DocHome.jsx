import './DocHome.css'
import React from 'react'
import DocHomeCard from './HomePageCards/doctorHomePageCard'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

function DocHome() {

    const navigate = useNavigate();
    const handleLogOut = () => {
        console.log("Logout for doctor clicked");
        Cookies.remove("user_id");
        navigate('/');
    }

    return (
        <div className='doctor-home-main-container'>
            <div id='heading'>
                <h1>Welcome Doctor</h1>
                <button onClick={() => handleLogOut()}>Logout</button>
            </div>

            <div className='doctor-cards-container'>

                {/* Appointment card */}
                <div onClick={() => {navigate('/doctorAppointment')}}>
                    <DocHomeCard
                        heading="Appointments"
                        image = "https://images.unsplash.com/photo-1624969862293-b749659ccc4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwb2ludG1lbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                        info="Manage and look at all your bookings and appointments here."
                    />
                </div>

                {/* Patient Lists */}
                <div onClick={() => {navigate('/patientList')}}>
                    <DocHomeCard
                        heading="Patient List"
                        image = "https://anmj.org.au/wp-content/uploads/2020/03/Older-patient-specialling-in-acute-MAIN-WEB.jpg"
                        info="Have a look at patients and their vitals here."
                    />
                </div>

            </div>
        </div>
    )
}

export default DocHome