import "./cssfiles/Home.css";

import profileimg from "./cssfiles/sampleProject.jpg";

import { motion } from "framer-motion";



const Home = () => {
  return (
    <div className="Home">
    <motion.div
      className="container text-center  bg-black"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
      transition={{ duration: 1 }}
    >
        <div className="profile">
          <div className="iconposition">
            <div className="icons">a</div>
            <div className="icons">b</div>
            <div className="icons">c</div>
          </div>
          <div className="profile-avatar">
            <img src={profileimg} alt="d" className="profile-img" />
            <div className="profile-name">Shubham</div>
          </div>
        </div>
        
        <div className="homecontent">
            <div className="homeleft">
    
                <div className="homewidget">
                  <h1 className="headfont">Introduction</h1>
                  <p>student at college</p>
                  <p>live in delhi</p>
                  <p>ign wrake</p>
                </div>
                


                
                <div className="homewidget">
                  <h1 className="headfont">Education</h1>
                  <div className="school">
                    <p>college school from<k className="highlight">sos hgs</k> in <br/><k className="highlight">2017 to 2019</k></p>
                  </div>
                  <div className="school">
                    <p>senoir school school from<k className="highlight">sos hgs</k> in <br/><k className="highlight">2017 to 2019</k></p>                         
                  </div>
                  <div className="school">
                    <p>high school school from<k className="highlight">sos hgs</k> in <br/><k className="highlight">2017 to 2019</k></p> 
                  </div>
                </div>


            </div>
            
            <div className="homeright">
    
                <div className="homewidget">
                  <h1 className="headfont">Work Experience</h1>
                  <div className="school">
                    <p>college school from<k className="highlight">sos hgs</k> in <br/><k className="highlight">2017 to 2019</k></p>
                  </div>
                  <div className="school">
                    <p>senoir school school from<k className="highlight">sos hgs</k> in <br/><k className="highlight">2017 to 2019</k></p>                         
                  </div>
                  <div className="school">
                    <p>high school school from<k className="highlight">sos hgs</k> in <br/><k className="highlight">2017 to 2019</k></p> 
                  </div>
                </div>


                <div className="homewidget headfont">
                Living, learning, & leveling up one day at a time.
                </div>

                <button className="resumeButton">
                  <div className="resumecontent">resume</div>
                  <div className="downloadicon">do</div>
                </button>
    

            </div>
        </div>


    </motion.div>
      </div>
  );
};

export default Home;
