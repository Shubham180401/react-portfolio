import './cssfiles/About.css';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedText from './AnimatedText';


const About = () => {

    const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "About" }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };



    return (
        
        <div className="About">

        


        <motion.div
        className="container text-center  bg-black"
        initial={{ x: 50,opacity: 0 }}
        animate={{ x: 0,opacity: 1 }}
        exit={{ x: 50,opacity: 0 }}
        transition={{ duration: 1 }}
        >

            <div className="aboutbody">
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
                <p>Hi,I am <aaa>Shubham</aaa> protagonist of my story and I'm absolutely ecstatic to introduce myself! I am an student who loves finding creative ways to solve challenging problems. I'm really motivated by working with others, especially on projects that can create a positive impact in the my skills. I strongly believe in teamwork, open collaboration and knowledge sharing, so I invest my energy in learning new skillsets and finding out what works best for each group. In my free time, I enjoy playing story based video games and reading blogs about trends, tech, and art. Furthermore, I'm always looking for opportunities to try out new activities; such as hiking or visiting different cities around the world("maybe in future i get a chance.")!
                </p>
                <div className="table">
                    <div className="aboutheadtable">Main skills</div>
                    <div className="aboutheadlist">
                        <p>problem solving, algorithm building</p>
                        <p>python, c++, c, javascript</p>
                        <p>frontend, html5, css3, js, react</p>
                        <p>SQL, mongodb</p>
                    </div>
                    <div className="aboutheadtable">Hobies</div>
                    <div className="aboutheadlist">
                        <p>d</p>
                        <p>c</p>
                        <p>b</p>
                        <p>a</p>
                    </div>
                    <div className="aboutheadtable">Also busy with</div>
                    <div className="aboutheadlist">
                        <p>Games</p>
                        <p>phone</p>
                        <p>blogs</p>
                    </div>

                </div>
            </div>


        </motion.div>

        </div>

    );
}

export default About;