import "./Contact.css"
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { themeContext } from "../../Context"
import { useContext } from "react"

function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  const form = useRef();
  const [done, setDone] = useState(false);
  const [err, setErr] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bihtw42', 'template_ify7qlg', form.current, {
        publicKey: '04cl9-_tgmEmagNKC',
      })
      .then(
        () => {
          return setDone(true);
        },
        (error) => {
          if(error){
            return setErr(true);
          }
        },
      );
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{color: darkMode ? "white" : ""}}>Get in touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message"></textarea>
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contacting me!" }</span>
          <span>{err && "Something Went Wrong" }</span>
          
          <div className="blur c-blur1" style={{background: "var(--purple)"}}></div>
        </form>
      </div>
    </div>
  )
}

export default Contact