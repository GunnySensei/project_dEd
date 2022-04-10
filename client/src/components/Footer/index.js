import React from "react";
const gunneravatar = require("../../assets/images/gunneravatar.svg");
const kevinavatar = require("../../assets/images/kevinavatar.svg");
const andrewavatar = require("../../assets/images/andrewavatar.svg");
const ryanavatar = require("../../assets/images/ryanavatar.svg");

const Footer = () => {
  return (
    <div className="footer-div">
      <section className="avatar-container">
        <ul className="avatar-list">
          <a href="https://github.com/GunnySensei" className="avatar">
            <img src={gunneravatar} alt="Gunner's avatar"></img>
          </a>
          <a href="https://github.com/KevinJWilkerson" className="avatar">
            <img src={kevinavatar} alt="Kevin's avatar"></img>
          </a>
          <a href="https://github.com/diirtydog" className="avatar">
            <img src={andrewavatar} alt="Andrew's avatar"></img>
          </a>
          <a href="https://github.com/Sly-Ry" className="avatar">
            <img src={ryanavatar} alt="Ryan's avatar"></img>
          </a>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
