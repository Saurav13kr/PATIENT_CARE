import './Emergency.css';
import React from 'react';


function Emergency() {
    return (
        <div className='emergency-main-container'>
            <h1>Emergency</h1>
            <h2>Contact No: xxxxxxxxxx</h2>
            <a href='tel:108'>
                <button>Call Now</button>
            </a>
        </div>
    )
}

export default Emergency;