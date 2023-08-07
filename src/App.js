import "./App.css";
import "./pages/assets/scrollbar.css";

import Right from "./pages/Right";
// import Center from "./pages/Center";
import Left from "./pages/Left";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/assets/centerPages/Home";
import About from "./pages/assets/centerPages/About";
import Skills from "./pages/assets/centerPages/Skills";
import Achievements from "./pages/assets/centerPages/Achievements";
import Projects from "./pages/assets/centerPages/Projects";
import Contact from "./pages/assets/centerPages/Contact";



function App() {
  return (
    <div className="App">
      <div className="panel">
        <BrowserRouter>
          <Left>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Achievements" element={<Achievements />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </Left>
        </BrowserRouter>
        <Right />
      </div>
    </div>
  );
}

export default App;
