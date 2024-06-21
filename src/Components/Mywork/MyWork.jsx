import React from "react";
import "./MyWork.css";
import iconbg from "../../assets/iconbg.svg";
import web1 from "../../assets/web1.png";
import web2 from "../../assets/web2.png";
import web3 from "../../assets/web3.png";

const MyWork = () => {
  return (
    <div className="mywork" id="mywork">
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={iconbg} alt="" />
      </div>
      <div className="mywork-container">
        <img src={web1} alt="" />
        <img src={web2} alt="" />
        <img src={web3} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
