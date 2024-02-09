import "./Card.css"

function Card({emoji, detail, heading}) {
  return (
    <div className='card'>
      <img src={emoji} alt={detail} />
      <span>{heading}</span>
      <span>{detail} </span>
      <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card