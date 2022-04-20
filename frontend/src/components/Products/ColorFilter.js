import React from 'react'

function ColorFilter(props) {

  const colors =['grey','red','blue','green','yellow','orange','black','white','pink','violet','all'];
  const handleChange = (e) =>{
    props.handleSetFilterValues(e);
  }
  return (
    <div className='color-filter my-checkbox'>
        {
          colors.map((color,index)=>{
            return(
              <React.Fragment key={index}>
                <input onChange={handleChange} id={color} type='checkbox' value={color} name='color'/>
                <label htmlFor={color} class='animate__animated animate__flipInX'>
                  <div style={{backgroundColor:color}}className={`color-box ${color}`}></div>
                </label>
              </React.Fragment>
            )
          })
        }
    </div>
  )
}

export default ColorFilter