import './PatHome.css';
import React from "react";
import PatHomeCard from './PatHomeCard/PatHomeCard';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function PatHome() {

    const nav = useNavigate();
    const handleLogout = () => {
        console.log("LogOut Clicked");
        Cookies.remove("user_id");
        nav('/');
    }

    return (
        <div className="pat-home-main-container">

            <h1>Welcome Patient! How may we help you</h1>
            <button onClick={() => handleLogout()}>Logout</button>

            <div className='pat-cards-container'>

                {/* Book an appointment card */}
                <div id='appointment' onClick={() => { nav('/patientAppointmentBooking') }}>
                    <PatHomeCard
                        heading={"Book Appointment"}
                        image={"https://tilestonesource.com/wp-content/uploads/2022/07/bookappointment.jpg"}
                        info={"Book appointment with your doctor."}
                    />
                </div>

                {/* First aid card */}
                <div id='first-aid' onClick={() => { nav('/firstAid') }}>
                    <PatHomeCard
                        heading={"First Aid"}
                        image={"https://media.tenor.com/Ou58OPjLMuMAAAAC/mivkbp-first-aid.gif"}
                        info={"Learn some basic first-Aid solutions in medical emergency."}
                    />
                </div>

                {/* Daily Health Report */}
                <div id='daily-report' onClick={() => { nav('/dailyCheckup') }}>
                    <PatHomeCard
                        heading={"Report"}
                        image={"https://i.pinimg.com/originals/b4/3d/b7/b43db78f64c8e26fb580bb7f00b66222.gif"}
                        info={"Enter your daily health report for analysisand examination."}
                    />
                </div>

                {/* medical-information and previous history */}
                <div id='prescribed-medicine' onClick={() => { nav('/reportsAndMedicines') }}>
                    <PatHomeCard
                        heading={"Medicine"}
                        image={"https://pharmanewsintel.com/images/site/article_headers/_normal/2020-02-25-GettyImages-913088320.png"}
                        info={"Get information of earlier medicines and prescriptions."}
                    />
                </div>

                {/* Emergency-services */}
                <div id='emergency' onClick={() => { nav('/emergency') }}>
                    <PatHomeCard
                        heading={"Emergency"}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjwbLkbImDOfbigy0Zb0NxhxO3_7RThpL_VNkBfj_PHBTSOsE8x3gGAz4hio4waQ1ohM&usqp=CAU"}
                        info={"Contact us in case of any medical emergency and urgent care."}
                    />
                </div>

            </div>
        </div>
    );
}

export default PatHome;