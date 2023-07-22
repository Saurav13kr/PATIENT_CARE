import './FirstAidPopUp.css'
import React, { useEffect } from 'react'

function FirstAidPopUp(props) {

    const { name, information, yt_url } = props.data;

    useEffect (() => {
        document.body.style.overflowY = "hidden";
        return() => {
            document.body.style.overflowY = "scroll";
        }
    }, [])

    return (
        <div onClick={() => {props.close()}} className='first-aid-popup-body'>
            <div id='first-aid-information'>
                <h1>{name}</h1>
                <p>{information}</p>
                <iframe src={yt_url}
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
            </div>
        </div>
    )
}

export default FirstAidPopUp;