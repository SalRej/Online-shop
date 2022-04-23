import React from 'react'

function DataSection(props) {
  return (
    <div className='data-section'>
        <p>Item No.{props.product.id}</p>
        <p>{props.product.page_title}</p>
        <p>{props.product.price}{props.product.currency}</p>
        {
            props.swatchImages.map(item=>{
                if(typeof(item.variation_value)!='undefined'){
                    return item.images.map((image,index)=>{
                        return(<img onClick={()=>{props.changeVariation(item.variation_value)}} key={index} src={`/images/${image.link}`}/>)
                    })
                }
            })
        }
        {
            props.product.variation_attributes[1].values.map(item=>{
                return(<p>{item.name}</p>)
            })
        }
    </div>
  )
}

export default DataSection