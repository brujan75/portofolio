import React from 'react'
import "../Intro/Intro.css"
import me from "../../assets/me.png";
import "animate.css";


const Intro = () => {
  return (
    <div className="intro">
    <div className="info">
      <div className="name">
        <h2 className="">Hi, my name is</h2>
        <div className="animate__animated animate__jackInTheBox animate__repeat-1  ">
          <h1>Brujan Andrei</h1>
        </div>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">UI/UX Designer</div>
            <div className="i-title-item">Content Creator</div>
          </div>
        </div>
      </div>
      
      
      <div className="container animate__animated   animate__bounceIn  ">
        <div className="box">
          <div className="circle">
            <img src={me} alt=""></img>
          </div>
          <img src={me} alt=""></img>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Intro