import './cssfiles/Achievements.css';

import a from "./certificate/sampleProject.jpg"


import Certificatecard from './Certificatecard';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Projects = () => {

    const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Projects" }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };



    return (
      <div className="Projects">
        <motion.div
          className="container text-center  bg-black"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            //   className="App"
            initial="hidden"
            // animate="visible"
            animate={replay ? "visible" : "hidden"}
            variants={container}
          >
            <div className="centerheading">
              {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}
            </div>
          </motion.div>
          <div className="certificatepanel">
            
            
            
            <Certificatecard
              // style={{backgroundImage:'url(./certificate/sampleProject.jpg)'}}
              imgs={a}
              title="CARD GAME"
              describtion="a simple and fun card game that played by 2 players"
              links="link here"
            />

            
            <Certificatecard
              // style={{backgroundImage:'url(./certificate/sampleProject.jpg)'}}
              imgs={a}
              title="CARD GAME"
              describtion="a simple and fun card game that played by 2 players"
              links="link here"
            />

            
            <Certificatecard
              // style={{backgroundImage:'url(./certificate/sampleProject.jpg)'}}
              imgs={a}
              title="CARD GAME"
              describtion="a simple and fun card game that played by 2 players"
              links="link here"
            />

            
            <Certificatecard
              // style={{backgroundImage:'url(./certificate/sampleProject.jpg)'}}
              imgs={a}
              title="CARD GAME"
              describtion="a simple and fun card game that played by 2 players"
              links="link here"
            />

            
            <Certificatecard
              // style={{backgroundImage:'url(./certificate/sampleProject.jpg)'}}
              imgs={a}
              title="CARD GAME"
              describtion="a simple and fun card game that played by 2 players"
              links="link here"
            />

            
            <Certificatecard
              // style={{backgroundImage:'url(./certificate/sampleProject.jpg)'}}
              imgs={a}
              title="CARD GAME"
              describtion="a simple and fun card game that played by 2 players"
              links="link here"
            />

            
            <Certificatecard
              // style={{backgroundImage:'url(./certificate/sampleProject.jpg)'}}
              imgs={a}
              title="CARD GAME"
              describtion="a simple and fun card game that played by 2 players"
              links="link here"
            />

            
            <Certificatecard
              // style={{backgroundImage:'url(./certificate/sampleProject.jpg)'}}
              imgs={a}
              title="CARD GAME"
              describtion="a simple and fun card game that played by 2 players"
              links="link here"
            />

            
            <Certificatecard
              // style={{backgroundImage:'url(./certificate/sampleProject.jpg)'}}
              imgs={a}
              title="CARD GAME"
              describtion="a simple and fun card game that played by 2 players"
              links="link here"
            />

            
            <Certificatecard
              // style={{backgroundImage:'url(./certificate/sampleProject.jpg)'}}
              imgs={a}
              title="CARD GAME"
              describtion="a simple and fun card game that played by 2 players"
              links="link here"
            />

            
          </div>
        </motion.div>
      </div>
    );
}

export default Projects;