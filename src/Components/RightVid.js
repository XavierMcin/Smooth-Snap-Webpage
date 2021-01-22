import React from 'react';

function RightVid(props) {
    return (

        <section className={`slider slide-${(props.block + 3)}`} id={`slide${(props.block + 1)}`}>
            <div className=" flex-contain flex-contain-img">
                <div className="slide-container">
                    <img src={`./images/block-${(props.block + 1)}.jpg`} alt=""></img>
                    <p>Wool Overcoat - Floral Midi</p>
                </div>
            </div>
            <div className="flex-contain flex-contain-vid">
                <div className="slide-container">
                    <video src={`./Videos/slidevideo-${(props.block + 1)}.mp4`} autoPlay paused="true" playsInline autoPlay loop muted></video>
                    <h2>Look {`0${(props.block + 1)}`}</h2>
                </div>
            </div>
        </section>

        

    )
}

export default RightVid;