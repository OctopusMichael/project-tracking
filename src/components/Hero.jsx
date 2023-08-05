import React from "react";
import hero from "../images/illustration-devices.svg";

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero-left">
        <div className="title-one">
          <h1>New</h1>
          <h2>Monograph Dashboard</h2>
        </div>
        <div className="title-two">
          <h1> Powerful insights into your team</h1>
          <h2>Project planning and time tracking for agile teams</h2>
        </div>
        <div className="title-three">
          <button className="btn-one">Schedule a demo</button>
          <button className="btn-two">to see a live preview</button>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
