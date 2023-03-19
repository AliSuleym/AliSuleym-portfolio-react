import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import  './style.css';

// const generatePath = (x) => {
//     const y = (Math.sin(x)) / x;
//     return [x, y];
// };

const AnimChars = ({ text }) => {
// splitting text into letters
// const letters = Array.from(text);

// Variants for Container
  // const container = {
  //   hidden: { opacity: 0 },
  //   visible: (i = 1) => ({
  //     opacity: 1,
  //     transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
  //   }),
  // };

// Variants for each letter
//   const child = {
//     visible: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 100,
//       },
//     },
//     hidden: {
//       opacity: 0,
//       x: -20,
//       y: 10,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 100,
//       },
//     },
//   };

//   const points = [];

//   for (let x = -5; x <= 5; x += 0.01) {
//     if (x !== 0) {
//         const [px, py] = generatePath(x);
//         points.push(`${px},${py}`);
//     }
// }

// const pathString = `M ${points.join(' L ')}`;

//const [showText, setShowText] = useState(false);
const [pathLength, setPathLength] = useState(0);

useEffect(() => {
  const pathLength = document.getElementById('curve').getTotalLength();
  setPathLength(pathLength);
}, []);

  return (
    <div>
    <svg viewBox="0 0 425 300">
  <motion.path         
        animate={{ pathLength: pathLength }}
        transition={{ duration: 10,  ease: "easeInOut" }}
    // stroke="#667799"  
    strokeWidth="3" 
    id="curve" 
    fill="none" 
    // d={pathString} 
    // d="M15,177 C195,365 288,18 493,247" 
    d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145"
  />
   {/* d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145" /> */}
  <text x="25" className="animChars">
  <textPath 
    href="#curve"     

  >
    {text}
</textPath>
  </text>
</svg>
    {/* // <svg viewBox="-3 -1 8 3">

    //   <motion.path 
    //     d={pathString} 
    //     stroke="#667799" 
    //     strokeWidth="0.05" 
    //     fill="none" 
    //     strokeLinecap="round"
    //     animate={{ pathLength: pathLength }}
    //     transition={{ duration: 10,  ease: "easeInOut" }}
    //     id="sin-x-curve-path" // Set the id attribute of the path element
    //   />

    // <motion.div
    //   style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
    //   variants={container}
    //   initial="hidden"
    //   animate="visible"
    // >
    //   {letters.map((letter, index) => (
    //     <motion.span variants={child} key={index}>
    //       {letter === " " ? "\u00A0" : letter}
    //     </motion.span>
    //   ))}
    // </motion.div>
    // </svg> */}
    </div>
  );
};

export default AnimChars;
