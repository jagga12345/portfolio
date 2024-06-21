import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profile} alt="Profile" title="Profile" />
      <h1>
        <span>I'm Jagadeesh,</span> Front End Developer
      </h1>
      <p>
        I am a frontend developer from Bangalore, Karnataka with 4.6 years of
        experience in multiple companies like Tech Active and Indegene.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink
            href="#contact"
            offset={50}
            onClick={(e) => handleMenuClick(e, "contact")}
          >
            Connect with me
          </AnchorLink>
        </div>
        <a href="/Jagadeesh--CV.pdf" download className="hero-resume">
          My resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
