import './DoctorListCard.css'
import React from 'react'

function DoctorsListCard(props) {
    
    const docName = props.docName;
    const image = props.image;

    return (
        <div className='doctor-list-card-body'>

            <div>
                <h2>
                    Dr. {docName}
                </h2>
            </div>
            <div>
                <img alt='doctorImg' src={image}></img>
            </div>
        </div>
    )
}

export default DoctorsListCard;