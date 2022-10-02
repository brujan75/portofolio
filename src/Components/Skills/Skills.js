import React from "react";
import "../Skills/Skills.css";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import git from "../../assets/git.svg";
import react from "../../assets/react.svg";
import bootstrap from "../../assets/bootstrap.svg";
import jq from "../../assets/jq.svg";
import sass from "../../assets/sass.svg";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-title">
        <h1 className="glitch" data-text="Skills">Skills</h1>
        <p1>My technical level</p1>
      </div>
      <div className="skills-card">
        <span></span>
        <div className="skills-card-title">
          <h2>Frontend Developer</h2>
        </div>
        <div className="skills-card-left-and-right"> <div className="skills-card-left">
          <div className="skills-card-element"><img src={html} className="skill-svg"></img><p2>HTML</p2></div>
          <div className="skills-card-element"><img src={css} className="skill-svg"></img><p2>CSS</p2></div>
          <div className="skills-card-element"><img src={sass} className="skill-svg"></img><p2>SASS</p2></div>
          <div className="skills-card-element"><img src={js} className="skill-svg"></img><p2>JAVASCRIPT</p2></div>
        </div>
        <div className="skills-card-right">
        <div className="skills-card-element"><img src={jq} className="skill-svg"></img><p2>JQUERY</p2></div>
          <div className="skills-card-element"><img src={git} className="skill-svg"></img><p2>GIT</p2></div>
          <div className="skills-card-element"><img src={react} className="skill-svg"></img><p2>REACT</p2></div>
          <div className="skills-card-element"><img src={bootstrap} className="skill-svg"></img><p2>BOOSTRAP</p2></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
