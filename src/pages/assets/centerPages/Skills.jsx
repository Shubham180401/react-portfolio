import './cssfiles/Skills.css';

import cpp from "./skillsicons/cplusplus.svg";
import c from "./skillsicons/c.svg";
import python from "./skillsicons/python.svg";
import html from "./skillsicons/html.svg";
import css from "./skillsicons/css.svg";
import javascript from "./skillsicons/javascript.svg";
import java from "./skillsicons/java.svg";
import microsoftsqlserver from "./skillsicons/microsoftsqlserver.svg";
import mysql from "./skillsicons/mysql.svg";
import mongodb from "./skillsicons/mongodb.svg";
import express from "./skillsicons/express.svg";
import react from "./skillsicons/react.svg";
import nodejs from "./skillsicons/nodejs.svg";
import npm from "./skillsicons/npm.svg";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedText from "./AnimatedText";

const Skills = () => {


  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Skills" }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };


    return (
      <div className="Skills">
              <motion.div
        className="container text-center  bg-black"
        initial={{ x: 50,opacity: 0 }}
        animate={{ x: 0,opacity: 1 }}
        exit={{ x: 50,opacity: 0 }}
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
            <div className="skillscards">
                <img src={cpp} className='skillsicons' />
                <img src={c} className='skillsicons' />
                <img src={python} className='skillsicons' />
                <img src={html} className='skillsicons' />
                <img src={css} className='skillsicons' />
                <img src={javascript} className='skillsicons' />
                <img src={java} className='skillsicons' />
                <img src={microsoftsqlserver} className='skillsicons' />
                <img src={mysql} className='skillsicons' />
                <img src={mongodb} className='skillsicons' />
                <img src={express} className='skillsicons' />
                <img src={react} className='skillsicons' />
                <img src={nodejs} className='skillsicons' />
                <img src={npm} className='skillsicons' />
            </div>
            <h1>
                Knowledge
                <k>I know about them</k>
            </h1>
            </motion.div>
        </div>
    );
}

export default Skills;