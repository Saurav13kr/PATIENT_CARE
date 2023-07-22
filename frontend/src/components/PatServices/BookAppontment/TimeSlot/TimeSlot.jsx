import './TimeSlot.css';
import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import addPatientBooking from '../../../../Services/addPatientBooking';
import Cookies from 'js-cookie';

function TimeSlot(props) {

    const [selectedButton, setSelectedButton] = useState(null);
    const [day, setDay] = useState(null);
    const doctor = props.doctor;
    const patientId = Cookies.get("user_id");

    const handleClick = (buttonId) => {
        setSelectedButton(buttonId);
    };

    const handleChange = (e) => {
        
        const daySelected = e.target.value;
        console.log(`Day selected: ${daySelected}`);
        setDay(daySelected);
    }

    useEffect(() => {
        if(day) {
            console.log(`day selected: ${day}`);
        }
    }, [day])

    const handleSubmit = async (e) => {

        e.preventDefault();
        const slot = selectedButton;
        const body = {
            "patientId": patientId,
            "doctorId": doctor._id,
            "slot": slot,
            "doctorName": doctor.name,
            "appointmentDay": day,
        }

        try {
            await addPatientBooking(body);
            console.log(`Booking done for patient`);
        } catch (error) {
            console.log(`Error occured while booking`);
        }
        props.close();
    }


    function calculateMaxDate() {
        const maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + 7);
        return maxDate.toISOString().split('T')[0];
    }


    return (
        <div className='time-slot-body'>
            <div className="time-slot-main-container">
                <div>
                    <h1>Choose Time Slot</h1>
                    <div className="time-slots">
                        <div>
                            <button
                                className={selectedButton === 1 ? 'selected' : ''}
                                onClick={() => handleClick(1)}
                            >
                                <h3>8 - 10 AM</h3><br></br>
                                <p>x seats are left</p>
                            </button>
                            <button
                                className={selectedButton === 2 ? 'selected' : ''}
                                onClick={() => handleClick(2)}
                            >
                                <h3>10 - 12 AM</h3><br></br>
                                <p>x seats are left</p>
                            </button>
                            <button
                                className={selectedButton === 3 ? 'selected' : ''}
                                onClick={() => handleClick(3)}
                            >
                                <h3>12 - 2 PM</h3><br></br>
                                <p>x seats are left</p>
                            </button>
                            <button
                                className={selectedButton === 4 ? 'selected' : ''}
                                onClick={() => handleClick(4)}
                            >
                                <h3>2 - 4 PM</h3><br></br>
                                <p>x seats are left</p>
                            </button>
                        </div>
                        <div id='calendar'>
                            <label htmlFor="day">Appointment Day</label><br></br>
                            <input type="date" id="day" onChange={handleChange} name="day" min={new Date().toISOString().split('T')[0]} max={calculateMaxDate()}></input>
                        </div>

                    </div>
                    <div className="submit-btn">
                        <button id='close' onClick={() => { props.close() }} >Close Window</button>
                        <button onClick={(e) => { handleSubmit(e) }}>Confirm Selection</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TimeSlot;
