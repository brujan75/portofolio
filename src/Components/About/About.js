import React from "react";
import "../About/About.css";
import me1 from "../../assets/me1.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <img src={me1} alt></img>
      </div>
      <div className="a-right">
        <div className="a-right-container">
          <h2 className="aboutme">About me</h2>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            praesentium quibusdam recusandae impedit reprehenderit magni!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
