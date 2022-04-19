import React from 'react'

function ColorFilter() {

  const colors =['red','blue','green','yellow','orange','black','white','pink','violet','all'];
  return (
    <div className='color-filter'>

        {
          colors.map(color=>{
            return(
              <>
                <label for={color}>
                  <div className={`color-box ${color}`}></div>
                </label>
                <input id={color} type='checkbox' value={color} name='color'/>
              </>
            )
          })
        }
    </div>
  )
}

export default ColorFilter