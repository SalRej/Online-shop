import React from 'react'

function SizeFilter(props) {
  const handleChange = (e) =>{
    props.handleSetFilterValues(e);
  }
  return (
    <div className='size-filter my-checkbox'>
      {
          props.avaibleSizes.map((size,index)=>{
            return(
              <React.Fragment key={index}>
                <input onChange = {handleChange}
                   id={size.name} 
                   type='checkbox'
                    value={size.value} 
                    name='size'
                    checked={props.filterValues.size.includes(size.value)?true:false}
                    />
                <label htmlFor={size.name} className="animate__animated animate__flipInX">
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