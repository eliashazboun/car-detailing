import React from 'react'



const Card = ({title,price,children}) => {

  return (
    <div className='card col-12-sm col-12-md col-4-lg'>
      <div className="card-title text-white text-center ">
        {title} - ${price}
      </div>
      <div className="card-body text-secondary border">
        {children}
      </div>
    </div>
  )
}

export default Card