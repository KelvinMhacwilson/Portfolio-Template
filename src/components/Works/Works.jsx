import "./Works.css"
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"

function Works() {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works fro All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ispum is simpley dummy text of printing Lorem
          <br />
          ispum is simpley dummy text of printing
          <br />
          Lorem ispum is simpley dummy text of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>

        <button className="button s-button">Hire me</button>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>

      </div>

      {/* Right Side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="Upwork" />
          </div>
        </div>

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works