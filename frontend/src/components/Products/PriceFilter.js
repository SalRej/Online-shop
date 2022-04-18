import React, { useState } from 'react'

function PriceFilter(props) {

  const [currcentPrice,setCurrentPrice] = useState(props.price.maxPrice);
  const handleChange = (e) =>{
    setCurrentPrice(e.target.value);
  }
  return (
    <div className='price-filter'>
      <div style={{display:"flex"}}>
        <p>{props.price.minPrice}</p>
        <input onChange={handleChange} value={currcentPrice}
          type="range" min={props.price.minPrice} max={props.price.maxPrice}/>
        <p>{props.price.maxPrice}</p>
      </div>
      <p>{currcentPrice}</p>
    </div>
  )
}

export default PriceFilter