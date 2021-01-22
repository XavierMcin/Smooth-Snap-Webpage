import './App.css';
import './Components/Aside.js';
import React from 'react';
import SideNav from './Components/Aside';
import RightVid from './Components/RightVid';
import LeftVid from './Components/LeftVid';

let slideBlocks = [],
    pScroll = 0,
    cScroll = 0,
    cBlock = 0;

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


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      tForm: {
        transform: "translate(0,0vh)",
        transition: "transform .6s ease-in-out"
      },
      headerTop: {
        transform: "translate(0,0vh)",
        transition: "transform .6s ease-in-out"
      }

    }
    this.scroller = this.scroller.bind(this);
    this.jumper = this.jumper.bind(this);
  }

  scroller() {

    let body = document.querySelector('body'),
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

        this.setState({
          tForm: {
            transform: `translate(0,-${cBlock}00vh)`,
            transition: "transform .6s ease-in-out"
          },
          headerTop: {
            transform: `translate(0,${cBlock}00vh)`,
            transition: "transform .6s ease-in-out"
          }
        });
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
      
      this.setState({
        tForm: {
          transform: `translate(0,-${cBlock}00vh)`,
          transition: "transform .6s ease-in-out"
        },
        headerTop: {
          transform: `translate(0,${cBlock}00vh)`,
          transition: "transform .6s ease-in-out"
        }
      });
    } 

  }

  jumper(elem) {
    let bJump = elem.currentTarget.className,
        body = document.querySelector('body');

    if (bJump.length === 6) {

      cBlock = parseInt(bJump.slice(bJump.length - 2)) + 1;
      cScroll = blocks[cBlock].offsetTop;
      pScroll = blocks[cBlock - 1].offsetTop;
      window.scrollTo(0,cScroll);
      body.classList.add('lock');
      setTimeout(() => {
        body.classList.remove('lock');
      }, 1000);

      this.setState({
        tForm: {
          transform: `translate(0,-${cBlock}00vh)`,
          transition: "transform .6s ease-in-out"
        },
        headerTop: {
          transform: `translate(0,${cBlock}00vh)`,
          transition: "transform .6s ease-in-out"
        }
      });
    } else {
      cBlock = parseInt(bJump.slice(bJump.length - 1)) + 1;
      cScroll = blocks[cBlock].offsetTop;
      pScroll = blocks[cBlock - 1].offsetTop;
      window.scrollTo(0,cScroll);
      body.classList.add('lock');
      setTimeout(() => {
        body.classList.remove('lock');
      }, 1000);

      this.setState({
        tForm: {
          transform: `translate(0,-${cBlock}00vh)`,
          transition: "transform .6s ease-in-out"
        },
        headerTop: {
          transform: `translate(0,${cBlock}00vh)`,
          transition: "transform .6s ease-in-out"
        }
      });
    }

    
    console.log(bJump);
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

  previewsShow(elem) {
    let pic = elem.currentTarget,
        pName = pic.className;

    if (pName.length === 6) {
      let cName = parseInt(pName.slice(pName.length - 2)),
          pPicture = document.querySelector(`.pic-wrap div:nth-of-type(${cName})`);
          
      pPicture.classList.remove('hide');
    } else {
      let cName = parseInt(pName[pName.length - 1]),
          pPicture = document.querySelector(`.pic-wrap div:nth-of-type(${cName})`);
      
      pPicture.classList.remove('hide');
    }

    
  }

  previewsHide(elem) {
    let pic = elem.currentTarget,
        pName = pic.className;

    if (pName.length === 6) {
      let cName = parseInt(pName.slice(pName.length - 2)),
          pPicture = document.querySelector(`.pic-wrap div:nth-of-type(${cName})`);
          
      pPicture.classList.add('hide');
    } else {
      let cName = parseInt(pName[pName.length - 1]),
          pPicture = document.querySelector(`.pic-wrap div:nth-of-type(${cName})`);
      
      pPicture.classList.add('hide');
    }
  }


  render() {

    window.addEventListener('beforeunload', () => {
      window.scrollTo(0,0);
    });

    window.addEventListener('load', () => {
      this.setter();
    });

    setTimeout(() => {
      window.addEventListener('scroll', () => {
        this.scroller();
      });
    }, 500);


  
    return (

      <div id="mainWrap" style={this.state.tForm}>

        <header style={this.state.headerTop}>
          <p>Fame & Partners</p>
          <span></span>
          <p>Fall / Winter 2018 Preview</p>

          {/* Fixed Side Navigation */}
        </header>

        <SideNav sPreview={this.previewsShow} hPreview={this.previewsHide} bJumper={this.jumper} mover={this.state.headerTop}/>

        <main>

          <section className="slider slide-1">
            <img src="./images/hero.jpg" alt=""></img>
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
