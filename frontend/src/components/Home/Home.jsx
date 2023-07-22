import './Home.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();


    return (
        <div className='home-main-container'>

            <div>
                <h1>
                    Patient Care
                </h1>
            </div>
            <div>
                <img
                    id='hosp-logo'
                    alt='globe'
                    src='https://media.istockphoto.com/id/1139549801/vector/stethoscope-heart-icon.jpg?s=612x612&w=0&k=20&c=qEJ7fFxWkok8j7FYYj4NwAlHSgqsw-azZz7c3IQJ4KI='
                >
                </img>
            </div>
            <div className='navigatingg-logos'>
                <div id='doc' onClick={() => {navigate('/docLogin')}}>
                    <img
                        id='doc-logo'
                        alt='doctor'
                        src='https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-doctor-icon-circle-png-image_2055257.jpg'
                        >
                    </img>
                </div>
                <div id='pat' onClick={() => {navigate('/patientLogin')}}>
                    <img
                        id='pat-logo'
                        alt='patient'
                        src='https://icon-library.com/images/patient-icon-png/patient-icon-png-26.jpg'
                    >
                    </img>
                </div>
            </div>
        </div>
    )
}

export default Home