import './doctorHomeCard.css'
import React from 'react'

function doctorHomePageCard(props) {

    const image = props.image;
    const heading = props.heading;
    const details = props.info;

    return (
        <div className='doctor-home-page-card-body'>
            <div>
                <h1>{heading}</h1>
            </div>
            <div>
                <img alt='imageSection' src={image}></img>
            </div>
            <div>
                <p>{details}</p>
            </div>
        </div>
    )
}

export default doctorHomePageCard;