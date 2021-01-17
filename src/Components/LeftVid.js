import React from 'react';
import ReactDOM from 'react-dom';

function LeftVid(props) {
    return (

        <section class={"slider " + "slide-" + (props.block + 3)} id={"slide" + (props.block + 1)}>
            <div class="flex-contain flex-contain-vid">
                <div class="slide-container">
                    <video src={"./Videos/" + "slidevideo-" + (props.block + 1) + ".mp4"} muted></video>
                    <h2>Look {"0" + (props.block + 1)}</h2>
                </div>
            </div>
            <div class=" flex-contain flex-contain-img">
                <div class="slide-container">
                    <img src={"./images/" + "block-" + (props.block + 1) + ".jpg"}></img>
                    <p>Windowpane Dress</p>
                </div>
            </div>
        </section>

        

    )
}

export default LeftVid;