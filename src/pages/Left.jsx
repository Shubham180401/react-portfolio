import "./assets/left.css";
import { useState , useEffect } from "react";
import { NavLink } from "react-router-dom";
import Center from "./Center";

import { AnimatePresence } from "framer-motion";
import { useRef } from "react";

// 80x80
import resume from "./icons/resume.png";


const Left = ({ children }) => {


  const [showSidebar, setShowSidebar] = useState(false);
  const buttonRef = useRef();


  useEffect(() => {
    let handler = (e) => {
      if(!buttonRef.current.contains(e.target)){
        setShowSidebar(false);
      }
    }
    document.addEventListener("mousedown",handler);
    return () => {
      document.removeEventListener("mousedown",handler);
    }
  });



  return (
    <AnimatePresence>

    
    <div className="main-body">
      <div className={(showSidebar ? "Left-open" : "Left")} ref={buttonRef}>

        
        <div className="sidebar">
          <k className="toggler" onClick={() => setShowSidebar(showSidebar => !showSidebar)}>
            {/* <span className="material-symbols-sharp">menu</span> */}
            <label for="check">
              <span className="menuline"></span>
              <span className="menuline"></span>
              <span className="menuline"></span>
            </label>
          </k>
          <div className="nameheading">
            Shubham
          </div>

          <div className="navbar">
            <div className="leftmenu">
              <h4>Menu</h4>
            </div>
            <div className="leftmenuoptions">
              <NavLink to="">Home</NavLink>
              <NavLink to="/About">About</NavLink>
              <NavLink to="/Skills">Skills</NavLink>
              <NavLink to="/Achievements">Achievements</NavLink>
              <NavLink to="/Projects">Projects</NavLink>
            </div>
          </div>

          <div className="navbar">
            <div className="leftmenu">
              <h4>Contact me</h4>
            </div>
            <div className="leftmenuoptions">
              <NavLink to="/Contact">Contact</NavLink>
              <NavLink to="/">email</NavLink>
              <NavLink to="/">linkedin</NavLink>
              <NavLink to="/">github</NavLink>
              <NavLink to="/">resume</NavLink>
            </div>
          </div>
          {/* <div className="followme">contact me</div> */}
        </div>
      </div>
      <div className="Centerpanel">
        <Center>
          <main>{children}</main>
        </Center>
      </div>
    </div>

    </AnimatePresence>
  );
};

export default Left;
