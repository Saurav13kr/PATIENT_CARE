import './BookAppointment.css'
import React, { useEffect, useState } from 'react'
import DoctorsListCard from './DoctorsListCard/DoctorsListCard';
import getAllDoctorBySpecialisation from '../../../Services/getAllDoctorBySpecialisation'
import TimeSlot from './TimeSlot/TimeSlot'

function BookAppointment() {


    const [speciality, setSpecialisation] = useState(null);
    const [doctors, setDoctors] = useState(null);
    const [choosenDoc, setChoosenDoc] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const closePopUp = () => {
        return setShowPopup(false);
    }

    useEffect(() => {
        if (choosenDoc) {
            console.log(`Choose Doctor: ${choosenDoc.name}`);
            console.log(`choosen doctor id: ${choosenDoc._id}`);
        }
    }, [choosenDoc]);


    useEffect(() => {
        console.log(`Specialisation set to : ${speciality}`);
    }, [speciality])


    const handleClick = async (e) => {

        const specialisation = e.target.name;
        setSpecialisation(specialisation)
        console.log(`Specialisation: ${specialisation}`);

        try {
            const doctor = await getAllDoctorBySpecialisation(specialisation);
            setDoctors(doctor);
            console.log(`Doctors fetched successfully: doctors are: ${doctor}`);
        } catch (error) {
            console.log(`Error caught: ${error}`);
        }
    }

    return (
        <div className='book-appointment-main-container'>
            <div id='heading'>
                <h1>Book Appointments</h1>
            </div>

            {/* secondary container */}
            <div className='second-container'>

                {/* Left side container */}
                <div className='button-container'>
                    <button onClick={(e) => { handleClick(e) }} name="Medicine">Medicine</button><br></br>
                    <button onClick={(e) => { handleClick(e) }} name="Surgery">Surgery</button><br></br>
                    <button onClick={(e) => { handleClick(e) }} name='Gynecology'>Gynecology</button><br></br>
                    <button onClick={(e) => { handleClick(e) }} name='Psychiatry'>Psychiatry</button><br></br>
                    <button onClick={(e) => { handleClick(e) }} name='Opthalmology'>Opthalmology</button><br></br>
                    <button onClick={(e) => { handleClick(e) }} name='ENT'>ENT</button><br></br>
                    <button onClick={(e) => { handleClick(e) }} name='Dermatology'>Dermatology</button><br></br>
                    <button onClick={(e) => { handleClick(e) }} name='Radiology'>Radiology</button><br></br>
                    <button onClick={(e) => { handleClick(e) }} name='Pediatrics'>Pediatrics</button><br></br>
                </div>

                {/* Right side section, displaying doctors */}
                <div className='doctor-list'>
                    {
                        speciality && doctors &&
                        doctors.map((data) => {
                            return (
                                <div onClick={() => {
                                    setShowPopup(true);
                                    setChoosenDoc(data);
                                }}>
                                    <DoctorsListCard
                                        key={data?._id}
                                        docName={data?.name}
                                        image="https://cdn.firstcry.com/education/2022/04/26104239/1686721738.jpg"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {
                showPopup && <TimeSlot close={closePopUp} doctor={choosenDoc} />
            }
        </div>
    )
}

export default BookAppointment;