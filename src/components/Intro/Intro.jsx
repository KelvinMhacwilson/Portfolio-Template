import React from 'react'
import "./Intro.css"
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'


function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode

  return (
    <div className='intro'>
      <div className='i-left'>
        <div className="i-name">
          <span style={{color: darkMode ? "white" : ""}}>Hy! I Am</span>
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
        <img src={glassesimoji} alt="glasses emoji" />
        <div className='floating-div-1'>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
        </div>
        <div className='floating-div-2'>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award"/>
        </div>

        <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
        <div className='blur' style={{
          background: "#C1F5FF",
          top: "17rem",
          width: "21rem",
          height: "11rem",
          left: "-9rem"
        }}></div>
      </div>
      
    </div>
  )
}

export default Intro