import './DailyCheckUp.css'
import React, { useEffect, useState } from 'react'
import addDailyCheckupData from '../../../Services/addDailyCheckupData';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function DailyCheckup() {

  const navigate = useNavigate();
  const patientId = Cookies.get("user_id");

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!patientId) {
      navigate('/patientLogin');
    }
    else {
      try {
        await addDailyCheckupData(data);
      } catch (error) {
        console.log(`Error occured: ${error}`);
      }
    }
  }


  const [data, setData] = useState({

    "height": 0,
    "weight": 0,
    "systolicPressure": 0,
    "diastolicPressure": 0,
    "bloodSugar": 0,
    "caloriesIntake": 0,
    "caloriesBurnt": 0,
    "patientId": patientId,
  });

  const handleChange = (e) => {

    const vital = e.target;
    console.log(`Vital: ${vital.name}`);
    const value = vital.value;

    switch (vital.name) {

      case "height": setData((prev) => ({
        ...prev,
        "height": value,
      }));
        break;
      case "weight": setData((prev) => ({
        ...prev,
        "weight": value,
      }));
        break;
      case "systolicPressure": setData((prev) => ({
        ...prev,
        "systolicPressure": value,
      }));
        break;
      case "diastolicPressure": setData((prev) => ({
        ...prev,
        "diastolicPressure": value,
      }));
        break;
      case "bloodSugar": setData((prev) => ({
        ...prev,
        "bloodSugar": value,
      }));
        break;
      case "caloriesIntake": setData((prev) => ({
        ...prev,
        "caloriesIntake": value,
      }));
        break;
      case "caloriesBurnt": setData((prev) => ({
        ...prev,
        "caloriesBurnt": value,
      }));
        break;
      default: console.log(`not possible`);
    }
  }


  useEffect(() => {
    console.log(`Data Changed: ${data.height}`);
  }, [data])

  return (
    <div className='daily-checkup-body'>

      <div id='heading'>
        <h1>Daily Checkup</h1>
      </div>

      <div className='form-container'>

        <form onSubmit={handleSubmit}>

          <div className='bmi-section sub-section'>
            <h3>BMI</h3>
            <label htmlFor="height">Height</label><br></br>
            <input
              name='height'
              type='number'
              placeholder='Enter height in cm'
              onChange={handleChange}>
            </input>
            <br></br>
            <label htmlFor='weight'>Weight</label><br></br>
            <input
              name='weight'
              type='number'
              placeholder='Enter Weight in Kgs'
              onChange={handleChange}>
            </input>
            <br></br>
            <br></br>
            <div className='vital-check-section'>
              <div>
                <button>My BMI</button>
              </div>
              <div>
                <input name='bmi' type='number'></input>
              </div>
            </div>
            <br></br>
            <button id='popup-button'>Check BMI index</button>
          </div>

          <div className='blood-pressure-section sub-section'>
            <h3>
              Blood Pressure
            </h3>
            <label htmlFor='systolicPressure'>Systolic Pressure</label><br></br>
            <input
              name='systolicPressure'
              placeholder='Enter systolic pressure'
              onChange={handleChange}>
            </input>
            <br></br>
            <label htmlFor='diastolicPressure'>Diastolic Pressure</label><br></br>
            <input
              name='diastolicPressure'
              placeholder='Enter the diastolic processure'
              onChange={handleChange}>
            </input>
            <br></br>
            <br></br>
            <div className='vital-check-section'>
              <div>
                <button>Status</button>
              </div>
              <div>
                <input
                  name='bloodPressureStatus'
                  value="Click to check"
                  onChange={handleChange}>
                </input>
              </div>
            </div>
            <br></br>
            <button id='popup-button'>Check Blood Pressure Status</button>
          </div>

          <div className='general-info sub-section'>
            <label htmlFor='bloodSugar'>Blood Sugar</label><br></br>
            <input
              name='bloodSugar'
              placeholder='Enter your blood sugar in dg/mg'
              onChange={handleChange}>
            </input>
            <br></br>
            <label htmlFor='calorieIntake'>Calories Intake</label><br></br>
            <input
              name='caloriesIntake'
              placeholder='Enter calories intake in kcal'
              onChange={handleChange}>
            </input>
            <br></br>
            <label htmlFor='calorieBurnt'>Calories Burnt</label><br></br>
            <input
              name='caloriesBurnt'
              placeholder='Enter Calories burnt in kcal'
              onChange={handleChange}>
            </input>
          </div>

          <input id='submit-btn' type='submit'></input>
        </form>
      </div>
    </div>
  )
}

export default DailyCheckup;