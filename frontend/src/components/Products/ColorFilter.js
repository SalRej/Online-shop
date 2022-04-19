import React from 'react'

function ColorFilter() {

  const colors =['grey','red','blue','green','yellow','orange','black','white','pink','violet','all'];
  return (
    <div className='color-filter'>
        {
          colors.map((color,index)=>{
            return(
              <React.Fragment key={index}>
                <input id={color} type='checkbox' value={color} name='color'/>
                <label htmlFor={color}>
                  <div className={`color-box ${color}`}></div>
                </label>
              </React.Fragment>
            )
          })
        }
    </div>
  )
}

export default ColorFilter