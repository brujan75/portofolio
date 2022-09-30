import { useRef, useState } from "react";
import "../Contact/Contact.css";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import address from "../../assets/address.svg";
import airplane from "../../assets/airplane.svg";
import emailjs from "@emailjs/browser";
import {Fireworks} from "../Utils/Fireworks";
import { useEffect } from "react";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y2xkw4u",
        "template_fi3rbcd",
        formRef.current,
        "aO9d6nB2fRBEVDTCn"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

 
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss our first project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +40761875198
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              andreibrujique@yahoo.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              Cluj-Napoca
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="c-desc">
            <b>Got a problem to solve?</b> Get your space suit ready and tell me
            your ideas to develop your dream application.
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" required />
            <input type="text" placeholder="Subject" name="user_subject" required />
            <input type="text" placeholder="Email" name="user_email" required />
            <textarea rows="5" placeholder="Message" name="message" required />
            <button className="submit">
              <p>Hit me up</p> 
              <img src={airplane} alt="" className="airplane"></img>
            </button>
            {done && Fireworks()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
