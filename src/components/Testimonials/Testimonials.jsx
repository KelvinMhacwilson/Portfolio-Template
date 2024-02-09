import "./Testimonials.css"
import { Swiper, SwiperSlide } from "swiper/react"
import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"
import  { Pagination }  from "swiper/modules"
import "swiper/css/pagination"
import "swiper/css"


function Testimonials() {
  const clients = [{
    img: profilePic1,
    review: "Lorem ipsum dolor sit amet, consectetur adip non pro id el elementum et dolor et dolor et dolor et dolor et dolor et dolor et dolor et"
  }, {
    img: profilePic2,
    review: "Working with him is the best and the most important thing about  this project"
  },{
    img: profilePic3,
    review: "Lorem ipsum dolor sit amet, consectetur adip non pro id el elementum et dolor et dolor et dolor et dolor et dolor  et dolor et dolor et"
}, {
    img: profilePic4,
    review: "Working with him is the best and the most important thing about  this project"
}
    
  ]

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me ... </span>
        <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
        <div className="blur t-blur2" style={{background: "skyblue"}}></div>
      </div>

      <Swiper 
        modules={[Pagination]} 
        slidesPerView={1} 
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return(
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="Client Image" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Testimonials