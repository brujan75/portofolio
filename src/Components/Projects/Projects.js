import React from "react";
import "../Projects/Projects.css";
import site1 from "../../assets/site1.PNG";
import site2 from "../../assets/site2.PNG";
import Tilt from 'react-parallax-tilt';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-title">
        <h2>Portofolio</h2>
      </div>
      <div className="projects-cards">
      <Tilt className="parallax-effect" perspective={500}>
          <div className="projects-card">
            <div className="inner-element">E-Commerce / React / Commerce.js</div>
            <img src={site1} alt="site1photo" className="sitesimgs inner-element" />
            <div className="buttons inner-element">
              <a
                href="https://github.com/brujan75/ecommerce-commerce.js-stripe-"
                target="_blank"
                className="button-1"
              >
                GitHub
              </a>
              <a
                href="https://ecommercebrujan.netlify.app/"
                target="_blank"
                className="button-2"
              >
                Live Demo
              </a>
            </div>
          </div>
        </Tilt>
        <Tilt className="parallax-effect" perspective={500}>

          <div className="projects-card">
            <div className="inner-element">E-Commerce / React / Sanity.io</div>
            <img src={site2} alt="site2photo" className="sitesimgs inner-element" />
            <div className="buttons inner-element">
              <a
                href="https://github.com/brujan75/ecommerce-sanity.io-stripe"
                target="_blank"
                className="button-1"
              >
                GitHub
              </a>
              <a
                href="https://ecommerce-sanity-stripe-brujan75.vercel.app/"
                target="_blank"
                className="button-2"
              >
                Live Demo
              </a>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Projects;
