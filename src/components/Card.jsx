import React from 'react'


function Card(props) {

  const {icon, clicked, disabled, id, handleClick} = props

  return (
    <div className={`card ${ disabled || clicked ? "flipped": "" }`} onClick={()=> handleClick(id)}>
      <div className='card-front'>
        <i className="fa-solid fa-question"></i>
      </div>
      <div className="card-back">{icon}</div>
    </div>
  )
}

export default Card