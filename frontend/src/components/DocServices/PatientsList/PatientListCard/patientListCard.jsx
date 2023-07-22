import './patientListCard.css'
import React from 'react'

function patientListCard(props) {

    const image = props.image;
    const heading = props.name;

    return (
        <div className='patient-list-card-body'>
            <div>
                <h1>{heading}</h1>
            </div>
            <div>
                <img alt='imageSection' src={image}></img>
            </div>
            <div>
                <button>Check Vitals</button>
            </div>
        </div>
    )
}

export default patientListCard