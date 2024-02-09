import React from 'react'
import "./Intro.css"
import Github from "../img/github.png"
import LinkedIn from "../img/linkedin.png"
import Instagram from "../img/instagram.png"
import Vector1 from "../img/Vector1.png"
import Vector2 from "../img/Vector2.png"
import boy from "../img/boy.png"
import thumbup from "../img/thumbup.png"
import Crown from "../img/crown.png"
import glassesimoji from "../img/glassesimoji.png"

function Intro() {
  return (
    <div className='intro'>
      <div className='i-left'>
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Kelvin Mhacwilson</span>
          <span>
            Frontend Developer with high level of experience in web designing and development, producing the Quality work
          </span>
        </div>

        <button className="i-button button">Hire me</button>
        
        <div className="i-icons">
          <img src={Github} alt="Github" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>

      <div className='i-right'>
        <img src={Vector1} alt="Vector 1" />
        <img src={Vector2} alt="Vector 2" />
        <img src={boy} alt="boy" />
      </div>
      
    </div>
  )
}

export default Intro