import React from "react";
import reaperimg from "../assets/images/noun-soul-ripper.svg";

const About = () => {
  return (
    <>
      <main>
        <h1 className="card-header">About</h1>
        <div className="flex-row">
          <div className="home-card-no-color justify-text">
            <div className="home-card-white">
              This website is a tribute to an idea: humanity has a collective
              limitation. If we come together, we can use that limitation that
              we share for the greater good.{" "}
            </div>
            <br></br>
            <div className="home-card-white">
              The goal is not total morbidity, but a collective sense of purpose
              and movement forward together as humans. Join us in overcoming
              fear, celebrating life, and encouraging one another through
              hardships we all face.
            </div>
            <br></br>

            <div className="home-card-white">
              Made with love by Ryan, Andrew, Kevin, and Gunner
            </div>
          </div>
          <img src={reaperimg} alt="reaper logo" className="reaper-about-img" />
        </div>
      </main>
    </>
  );
};

export default About;
