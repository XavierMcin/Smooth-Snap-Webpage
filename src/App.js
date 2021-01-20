import './App.css';
import './Components/Aside.js';
import React from 'react';
import SideNav from './Components/Aside';
import RightVid from './Components/RightVid';
import LeftVid from './Components/LeftVid';

let slideBlocks = [],
    pScroll = 0,
    cScroll = 0,
    cBlock = 0,
    mainWrapper = document.querySelector('#mainWrap'),
    slide = 0;

  for(let i = 0; i < 12; i++) {
    if (i % 2 === 0) {
      slideBlocks.push(<RightVid key={i} block={i}/>);
    } else {
      slideBlocks.push(<LeftVid key={i} block={i}/>);
    }
  }

let blocks = [
  document.querySelector('.slide-1'),
  document.querySelector('.slide-2'),
  document.querySelector('.slide-3'),
  document.querySelector('.slide-4'),
  document.querySelector('.slide-5'),
  document.querySelector('.slide-6'),
  document.querySelector('.slide-7'),
  document.querySelector('.slide-8'),
  document.querySelector('.slide-9'),
  document.querySelector('.slide-10'),
  document.querySelector('.slide-11'),
  document.querySelector('.slide-12'),
  document.querySelector('.slide-13'),
  document.querySelector('.slide-14')
];

let tForm = {
  transform: "translate(0,0vh)",
  transition: "transform .6s ease-in-out"
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  }

  scroller() {

    let wrap = document.getElementById('mainWrap'),
        body = document.querySelector('body'),
        scroller = document.querySelector('.scroller'),
        top = window.scrollY;


    if (top > cScroll + 50) {
      if (cBlock !== 13) {
        cBlock++;
        cScroll = blocks[cBlock].offsetTop;
        pScroll = blocks[cBlock - 1].offsetTop;
        window.scrollTo(0,cScroll);
        body.classList.add('lock');
        setTimeout(() => {
          body.classList.remove('lock');
        }, 1000);
        tForm = {
          transform: "translate(0,-" + cBlock + "00vh)",
          transition: "transform .6s ease-in-out"
        }
      }

    } else if (top < cScroll - 50) {
      cBlock--;
      cScroll = pScroll;

      if (cBlock !== 0) {pScroll = blocks[cBlock - 1].offsetTop;}
      else {pScroll = blocks[cBlock].offsetTop;}

      window.scrollTo(0,cScroll);
      body.classList.add('lock');
      setTimeout(() => {
        body.classList.remove('lock');
      }, 1000);
      console.log(pScroll);
    } 

  }

  setter() {
    let wrap = document.querySelector('#mainWrap'),
          wHeight = wrap.offsetHeight,
          scroller = document.querySelector('.scroller');

    scroller.style.height = wHeight + "px";


    for (let i = 0; i < 14; i++) {
      blocks[i] = document.querySelector('.slide-' + (i + 1));
    }
  }


  render() {

    window.addEventListener('beforeunload', () => {
      window.scrollTo(0,0);
    });

    window.addEventListener('load', () => {
      this.setter();
    });

    window.addEventListener('scroll', () => {
      this.scroller();
    });

  
    return (

      <div id="mainWrap" style={tForm}>

        <header>
          <p>Fame & Partners</p>
          <span></span>
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
