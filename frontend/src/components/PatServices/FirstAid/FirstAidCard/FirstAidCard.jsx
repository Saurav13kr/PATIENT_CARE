import './FirstAidCard.css'
import React from 'react'

function FirstAidCard(props) {

    const { name, img_src } = props.data;

    return (
        <div className='first-aid-card-main-container'>
            <div>
                <img alt={name} src={img_src}></img>
            </div>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default FirstAidCard;