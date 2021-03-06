import React, { useState } from 'react'

function PriceFilter(props) {

  const [currcentPrice,setCurrentPrice] = useState(props.price.maxPrice);
  const handleChange = (e) =>{
    props.handleSetFilterValues(e);
  }
  const andjustPrice = (e) =>{
    setCurrentPrice(e.target.value);
  }
  return (
    <div className='price-filter animate__animated animate__flipInX'>
      <p className='current-price'>{currcentPrice}$</p>
      <div className='slider-holder'>
        <p>{props.price.minPrice}</p>
        <input onChange={andjustPrice} onMouseUp={handleChange} value={currcentPrice}
          type="range" min={props.price.minPrice} max={props.price.maxPrice + 1} name='price' />
        <p>{props.price.maxPrice + 1}</p>
      </div>
    </div>
  )
}

export default PriceFilter