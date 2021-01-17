import React from 'react';
import ReactDOM from 'react-dom';

function RightVid(props) {
    return (

        <section class={"slider " + "slide-" + (props.block + 1)} id={"slide" + (props.block + 1)}>
            <div class=" flex-contain flex-contain-img">
                <div class="slide-container">
                    <img src={"./images/" + "block-" + (props.block + 1) + ".jpg"}></img>
                    <p>Wool Overcoat - Floral Midi</p>
                </div>
            </div>
            <div class="flex-contain flex-contain-vid">
                <div class="slide-container">
                    <video src={"./Videos/" + "slidevideo-" + (props.block + 1) + ".mp4"} muted></video>
                    <h2>Look 01</h2>
                </div>
            </div>
        </section>

        

    )
}

export default RightVid;