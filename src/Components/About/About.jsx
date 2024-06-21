import React from "react";
import "./About.css";
import profile from "../../assets/profile.jpg";
import iconbg from "../../assets/iconbg.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h2>About me</h2>
        <img src={iconbg} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="Profile" title="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with 4+ years of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Wordpress</p> <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h2>4+</h2>
          <p>Year of experience</p>
        </div>
        <div className="about-achievement">
          <h2>50+</h2>
          <p>Project Completed</p>
        </div>
        <div className="about-achievement">
          <h2>02+</h2>
          <p>Happy clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
