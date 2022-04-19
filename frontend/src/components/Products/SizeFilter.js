import React from 'react'

function SizeFilter(props) {
  return (
    <div className='size-filter'>
      {
          props.avaibleSizes.map((size,index)=>{
            return(
              <React.Fragment key={index}>
                <input id={size.name} type='checkbox' value={size.value} name='size'/>
                <label htmlFor={size.name}>
                  <div className={`size-box`}>
                    {size.name}
                  </div>
                </label>
              </React.Fragment>
            )
          })
        }
    </div>
  )
}

export default SizeFilter