import './App.css';
import './Components/Aside.js';
import React from 'react';
import SideNav from './Components/Aside';
import RightVid from './Components/RightVid';
import LeftVid from './Components/LeftVid';

let slideBlocks = [],
    mainWrapper = document.querySelector('#mainWrap'),
    slide = 0;

  for(let i = 0; i < 12; i++) {
    if (i % 2 === 0) {
      slideBlocks.push(<RightVid key={i} block={i}/>);
    } else {
      slideBlocks.push(<LeftVid key={i} block={i}/>);
    }
  }

class App extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  }

  scroller() {
    let wrap = document.getElementById('mainWrap');
    let top = window.pageYOffset;
    console.log(top);
  }


  render() {

    window.addEventListener('load', () => {
      let wrap = document.querySelector('#mainWrap'),
          wHeight = wrap.offsetHeight,
          scroller = document.querySelector('.scroller');

      scroller.style.height = wHeight + "px";

      console.log(scroller);
    });

    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
    });

    let topper = 25,
        tStyle = "translate(0," + topper + "vh)";

    let tForm = {
        transform: tStyle
    }

  
    return (

      <div id="mainWrap">

        <header>
          <p>Fame & Partners</p>
              <p>Fall / Winter 2018 Preview</p>

          {/* Fixed Side Navigation */}
        </header>

        <SideNav />

        <main>

          <section className="slider slide-1">
            <img src="./images/hero.jpg"></img>
            <div className="image-wrap">
              <h1>The World. As She Wears It.</h1>
            </div>
          </section>
          
          <section className="slider slide-2">
            <p>She is limitless. Without boundaries. Multifaceted. Global. Fluid and free.</p>
            <p>Introducing a collection that lives this life with her; taking her from day to night and back again, from boardroom to brunch and back home. Trans-seasonal, multi-purpose, all-occasion–and all her own.</p>
          </section>

          {slideBlocks}

        </main>


      </div>
      

    )

  }


}

export default App;
