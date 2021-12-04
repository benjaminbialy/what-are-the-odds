import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Home.js"
import Game from "./Game.js"
import EndScreen from "./EndScreen.js"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/game" element={<Game name="Benjamin"/>}/>
          <Route path="/end-screen" element={<EndScreen/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
