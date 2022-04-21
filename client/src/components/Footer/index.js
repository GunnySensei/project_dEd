import React from "react";
import gunneravatar from "../../assets/images/gunneravatar.svg";
import kevinavatar from "../../assets/images/kevinavatar.svg";
import andrewavatar from "../../assets/images/andrewavatar.svg";
import ryanavatar from "../../assets/images/ryanavatar.svg";

const Footer = () => {
  return (
    <div className="footer-div footer">
      <section className="avatar-container">
        <div className="avatar-list">
          <a
            href="https://github.com/GunnySensei"
            target="_blank"
            className="avatar"
            rel="noreferrer"
          >
            <img
              src={gunneravatar}
              alt="Gunner's avatar"
              className="avatar-img"
            ></img>
          </a>
          <a
            href="https://github.com/KevinJWilkerson"
            target="_blank"
            className="avatar"
            rel="noreferrer"
          >
            <img
              src={kevinavatar}
              alt="Kevin's avatar"
              className="avatar-img"
            ></img>
          </a>
          <a
            href="https://github.com/diirtydog"
            target="_blank"
            className="avatar"
            rel="noreferrer"
          >
            <img
              src={andrewavatar}
              alt="Andrew's avatar"
              className="avatar-img"
            ></img>
          </a>
          <a
            href="https://github.com/Sly-Ry"
            target="_blank"
            className="avatar"
            rel="noreferrer"
          >
            <img
              src={ryanavatar}
              alt="Ryan's avatar"
              className="avatar-img"
            ></img>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
