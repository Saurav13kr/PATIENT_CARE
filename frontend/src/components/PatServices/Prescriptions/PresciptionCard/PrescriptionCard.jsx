import './PrescriptionCard.css'
import React from 'react'

function PrescriptionCard(props) {

    const { doctor, disease, medicine } = props;

    return (
        <>
            <div className='prescription-card-main-body'>
                <div>
                    <h3>Dr. {doctor}</h3>
                </div>
                <div>
                    <h3>Disease</h3>
                    <p>{disease}</p>
                </div>
                <div>
                    <h3>Medicine</h3>
                    <p>{medicine}</p>
                </div>
            </div>
        </>
    )
}

export default PrescriptionCard;