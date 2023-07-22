import './FirstAid.css'
import React, { useState } from 'react'
import firstAids from '../../../elements/firstaidInfo';
import FirstAidCard from './FirstAidCard/FirstAidCard';
import FirstAidPopUp from './FirstAidPopUps/FirstAidPopUp';

function FirstAid() {

    const closePopUp = () => {
        return setShowPopUp(false);
    }

    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpData, setPopUpData] = useState();

    return (
        <>
            <h1>First Aid</h1>

            <div className='cards-container'>

                {
                    firstAids.map((data, index) => {
                        return (
                            <div onClick={() => {
                                    setShowPopUp(true);
                                    setPopUpData(data);
                                }}
                                className='first-aid-card'
                            >
                                <FirstAidCard data={data} key={index}/>
                            </div>
                        );
                    })
                }

            </div>

            {
                showPopUp ? <FirstAidPopUp data={popUpData} close={closePopUp}/> : ""
            }
        </>
    )
}

export default FirstAid;