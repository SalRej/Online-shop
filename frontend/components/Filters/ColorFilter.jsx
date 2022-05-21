import React from 'react'

function ColorFilter(props) {

  const handleChange = (e) =>{
    props.handleSetFilterValues(e);
  }
  return (
    <div className='color-filter my-checkbox'>
        {
          props.avaibleColors.map((color,index)=>{
            return(
              <React.Fragment key={index}>
                <input onChange={handleChange}
                  id={color.variation_value} type='checkbox' 
                  value={color.variation_value} name='color'
                  checked={props.filterValues.color.includes(color.variation_value)?true:false}
                  />
                <label htmlFor={color.variation_value} className='animate__animated animate__flipInX'>
                    <img src={`/images/${color.link}`} alt={color.alt}/>
                </label>
              </React.Fragment>
            )
          })
        }
    </div>
  )
}

export default ColorFilter