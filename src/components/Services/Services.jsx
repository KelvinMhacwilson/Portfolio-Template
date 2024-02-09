import React from 'react'
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from "./Resume.pdf"

function Services() {
  return (
    <div className="services">
      {/* Left Side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ispum is simpley dummy text of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>

      </div>
      {/* Right Side */}
      <div className="cards">
        <div style={{left: "14rem"}}> 
          <Card 
            emoji = {HeartEmoji}
            heading = "Design"
            detail = "Figma, Sketch, Photoshop, Adobe, Adobe xd"
          />
        </div>

        <div style={{left: "-4rem", top: "12rem"}}> 
          <Card 
            emoji = {Glasses}
            heading = "Developer"
            detail = "HTML, CSS Javascript"
          />
        </div>

        <div style={{left: "12rem", top: "19rem"}}> 
          <Card 
            emoji = {Humble}
            heading = "Backend"
            detail = "Node JS, Express, Mongo DB"
          />
        </div>

        <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
      </div>
    </div>
  )
}

export default Services