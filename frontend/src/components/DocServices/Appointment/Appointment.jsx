import './Appointment.css';
import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import PatientCard from './AppointmentPatientCard/AppointmentPatientCard';
import getAllAppointments from '../../../Services/getAllAppointments';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


function Appointment() {

    const navigate = useNavigate();
    const doctorId = Cookies.get("user_id");
    console.log(`Doctor id after rendering: ${doctorId}`);

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if (appointments) {
            console.log(`aappointments are: ${appointments}`);
        }
    }, [appointments])

    useEffect(() => {

        const fetchAppointments = async () => {
            try {
                const data = await getAllAppointments({
                    "doctorId": doctorId,
                });
                setAppointments(data);
                console.log('Appointments fetched successfully:', data);

            } catch (error) {
                console.log('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, [doctorId, navigate]);

    return (
        <div className="appointment-main-container">
            <div>
                <h1>Appointment</h1>
            </div>

            {appointments.length > 0 ? (
                <div className="patient-card-holder">
                    {appointments.map((data) => {
                        const matchingBookings = data.bookings.filter(
                            (booking) => booking.doctorId === doctorId
                        );
                        return matchingBookings.map((booking) => (
                            <PatientCard
                                key={data._id}
                                id={data._id}
                                name={data.name}
                                schedule={booking.appointmentDay}
                                slot={booking.slot}
                                dailyCheckup={data.dailyCheckup}
                            />
                        ));
                    })}
                </div>
            ) : (
                <div id="no-appointment">
                    <h2>No Appointment Found !</h2>
                </div>
            )}
        </div>
    );
}

export default Appointment;
