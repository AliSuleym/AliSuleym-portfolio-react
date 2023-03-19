import React from "react";
import { motion } from "framer-motion";
import personalImage from "../../assets/images/me.jpg";
import globeImage from "../../assets/images/global.svg";
import AnimChars from "./AnimChars";
import './style.css';

function Home({personalDetails}) {

  return (
    <section className="home container">
      <div>
          <h3 className="pageTitle">Welcome</h3>
          <p className="pageDescription">Browse {personalDetails.name}'s Portfolio...</p>
      </div>
      <div className='row'>
        <div className="col-12 col-md-3 col-lg-3 image-container">
            <motion.img
              className="personalImage"
              initial={{ y: "10vw", opacity: 0 }}
              animate={{ y: 0, opacity: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              src={personalImage}
              alt=""
            />
        </div>       
      </div> 
    </section>
  );
};

export default Home;
