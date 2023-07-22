import './PatLogin.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import verifyPassWord from '../../../Services/verifyPassWord';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../../Store/Slices/UserSlice';
import Cookies from 'js-cookie';

function PatLogin() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [credential, setCredential] = useState([
        0, // id
        ""  // password
    ]);

    const handleIdChange = (e) => {

        const value = e.target.value;
        const newCred = [...credential];
        newCred[0] = value;
        setCredential(newCred);
    }

    const handlePwChange = (e) => {

        const value = e.target.value;
        const newCred = [...credential];
        newCred[1] = value;
        setCredential(newCred);
    }

    useEffect(() => {

        console.log("Id = " + credential[0]);
        console.log("Pw = " + credential[1]);
        

    }, [credential])

    // Handle form submission
    const handleSubmit = async (e) => {

        try {
            const validate = await verifyPassWord(credential[0].toString(), credential[1]);
            if(validate !== -1) {
                dispatch(userLoggedIn(validate));
                console.log(`Patient id : ${validate}`);
                Cookies.set("user_id", validate);
                navigate('/success');
            }
        } catch (error) {
            console.log(`Error occured: ${error}`);
            navigate('/failure')
        }
    }

    return (
        <div className='pat-login-main-container'>
            <h1>Patient Login!</h1>
            <div className='login-form-container'>
                <div>
                    <label htmlFor='number'>Phone Number</label><br></br>
                    <input onChange={(e) => handleIdChange(e)} name='number' type='number' placeholder='Enter your Phone number'></input><br></br>
                </div>
                <div>
                    <label htmlFor='password'>Password</label><br></br>
                    <input onChange={(e) => handlePwChange(e)} name='password' type='password' placeholder='Enter your password/dob'></input>
                </div>
            </div>
            <div id='login-btn'>
                <div>
                    <button onClick={(e) => handleSubmit(e)}>Login</button>
                </div>
                <div id='signup-btn'>
                    <button onClick={() => navigate('/signUp')}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default PatLogin