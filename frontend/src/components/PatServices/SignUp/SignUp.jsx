import './SignUp.css'
import React, { useEffect, useState } from 'react'
import addNewPatient from '../../../Services/addNewPatient';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",  // for name
        email: "",  //email,
        password: "",  //password
        city: "", // city
        age: null,   //age
        phoneNumber: null,   //phoneNumber
    });

    useEffect(() => {
        console.log("New values: ", data);
    }, [data])

    const submitResponse = (e) => {

        e.preventDefault();

        try {
            addNewPatient(data);
            console.log(`patient added successfully`);
            navigate('/patientLogin');
        }
        catch (error) {
            console.log(`Error occured: ${error}`);
            navigate('/failure');
        }
    }

    const handleChange = (e) => {

        const change = e.target.name, value = e.target.value;;

        switch (change) {
            case "name": setData((prev) => ({
                ...prev,
                "name": value
            }));
                break;
            case "email": setData((prev) => ({
                ...prev,
                "email": value
            }));
                break;
            case "password": setData((prev) => ({
                ...prev,
                "password": value
            }));
                break;
            case "city": setData((prev) => ({
                ...prev,
                "city": value
            }));
                break;
            case "age": setData((prev) => ({
                ...prev,
                "age": value
            }));
                break;
            case "phoneNumber": setData((prev) => ({
                ...prev,
                "phoneNumber": value
            }));
                break;
            default:
                console.log("Wrong choince");
        }
    }



    return (
        <div className='signup-main-container'>

            <div>
                <h1>
                    Enter the required Details
                </h1>
            </div>

            <div className='form-container'>

                <div>
                    <label htmlFor='name'>
                        Name
                    </label><br></br>
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter Your Name'
                        onChange={handleChange}>
                    </input>
                </div>

                <div>
                    <label htmlFor='email'>
                        Email
                    </label><br></br>
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter Your Email'
                        onChange={handleChange}>
                    </input>
                </div>

                <div>
                    <label htmlFor='password'>
                        Password
                    </label><br></br>
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter a password'
                        onChange={handleChange}>
                    </input>
                </div>

                <div>
                    <label htmlFor='age'>
                        Age
                    </label><br></br>
                    <input
                        type='number'
                        name='age'
                        placeholder='Enter Your Age'
                        onChange={handleChange}>
                    </input>
                </div>

                <div>
                    <label htmlFor='phoneNumber'>
                        Phone Number
                    </label><br></br>
                    <input
                        type='number'
                        name='phoneNumber'
                        placeholder='Enter Phone Number'
                        onChange={handleChange}>
                    </input>
                </div>

                <div>
                    <label htmlFor='city'>
                        City Name
                    </label><br></br>
                    <input
                        type='text'
                        name='city'
                        placeholder='Enter your City'
                        onChange={handleChange}>
                    </input>
                </div>

                <div id='submit-btn'>
                    <button
                        onClick={(e) => { submitResponse(e) }}>
                        Submit
                    </button>
                </div>

            </div>

        </div>
    )
}

export default SignUp