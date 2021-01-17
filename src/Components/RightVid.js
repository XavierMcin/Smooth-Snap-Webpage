import React from 'react';
import ReactDOM from 'react-dom';

function RightVid() {
    return (

        <section class="slider slide-3" id="slide1">
            <div class=" flex-contain flex-contain-img">
                <div class="slide-container">
                    <img src="images/LOOK_1.jpg"></img>
                    <p>Wool Overcoat - Floral Midi</p>
                </div>
            </div>
            <div class="flex-contain flex-contain-vid">
                <div class="slide-container">
                    <video src="videos/web-video (4).mp4" muted></video>
                    <h2>Look 01</h2>
                </div>
            </div>
        </section>

        

    )
}

export default RightVid;