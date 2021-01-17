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

        {slideBlocks}
        
      </main>


    </div>

  );
}

export default App;
