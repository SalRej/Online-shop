import React from 'react'

function SizeFilter(props) {
  return (
    <div>
      {
        props.avaibleSizes.map(item=>{
          return(<p>{item.name}</p>)
        })
      }
    </div>
  )
}

export default SizeFilter