import React from "react";
import { motion } from "framer-motion";
import ranjImg from "../../assets/images/me.jpg";
import './style.css'

function About({personalDetails}) {

  return (
    <div className="aboutContainer container">
      <div>
          <h3 className="pageTitle">About Me</h3>
         
      </div>
      <br />
      <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-4"
          initial={{ x: "-10vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img src={ranjImg} alt={personalDetails.name} />
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          initial={{ x: "10vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h5>{personalDetails.moniker}</h5>
            <div className="contentDescription">
              <p>{personalDetails.brand}</p>
            </div>
            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Name:</span>
                  <p>{personalDetails.name}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${personalDetails.email}`}>{personalDetails.email}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Location:</span>
                  <p>{personalDetails.location}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Availability:</span>
                  <p>{personalDetails.availability}</p>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
