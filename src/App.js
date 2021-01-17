import './App.css';
import './Components/Aside.js';
import SideNav from './Components/Aside';
import RightVid from './Components/RightVid';
import LeftVid from './Components/LeftVid';

function App() {

  let slideBlocks = [];
  for(let i = 0; i < 12; i++) {
    if (i % 2 === 0) {
      slideBlocks.push(<RightVid key={i} block={i}/>);
    } else {
      slideBlocks.push(<LeftVid key={i} block={i}/>);
    }
  }

  return (

    <div>

      <header>
        <p>Fame & Partners</p>
            <p>Fall / Winter 2018 Preview</p>

        {/* Fixed Side Navigation */}
      </header>

      <SideNav />

      <main>

        <section class="slider slide-1">
          <img src="./images/hero.jpg"></img>
          <div class="image-wrap">
            <h1>The World. As She Wears It.</h1>
          </div>
        </section>
        
        <section class="slider slide-2">
          <p>She is limitless. Without boundaries. Multifaceted. Global. Fluid and free.</p>
          <p>Introducing a collection that lives this life with her; taking her from day to night and back again, from boardroom to brunch and back home. Trans-seasonal, multi-purpose, all-occasion–and all her own.</p>
        </section>

        {slideBlocks}

      </main>


    </div>

  );
}

export default App;
