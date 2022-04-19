import React from 'react'

function ColorFilter() {

  const colors =['grey','red','blue','green','yellow','orange','black','white','pink','violet','all'];
  return (
    <div className='color-filter'>
        {
          colors.map(color=>{
            return(
              <>
                <input id={color} type='checkbox' value={color} name='color'/>
                <label for={color}>
                  <div className={`color-box ${color}`}></div>
                </label>
              </>
            )
          })
        }
    </div>
  )
}

export default ColorFilter