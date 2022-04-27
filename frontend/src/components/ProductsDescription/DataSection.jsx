import React from 'react'

function DataSection(props) {
  return (
    <div className='data-section'>
        <p className='item-number'>Item No.{props.product.id}</p>
        <p className='title'>{props.product.page_title}</p>
        <p className='price'>{props.product.price}<span>{props.product.currency}</span></p>
        {   props.swatchImages.length>0 && 
            <React.Fragment>
                <h3>Color</h3>
                <div className='holder my-checkbox'>
                    {
                        props.swatchImages.map(item=>{
                            if(typeof(item.variation_value)!='undefined'){
                                return item.images.map((image,index)=>{
                                    return(
                                        <React.Fragment>
                                            <input
                                                id={item.variation_value} type='radio' 
                                                value={item.variation_value} name='color'
                                            />
                                            <label htmlFor={item.variation_value} className='animate__animated animate__flipInX'>
                                                <img 
                                                    onClick={()=>{props.changeVariation(item.variation_value)}}
                                                    key={index}
                                                    src={`/images/${image.link}`}
                                                />
                                            </label>
                                        </React.Fragment>
                                    )
                                })
                            }
                        })
                    }
                </div>
            </React.Fragment>
        }
        {
            typeof(props.product.variation_attributes[1])!='undefined' &&
             <React.Fragment>
                <h3>Size</h3>
                <div className='holder my-checkbox'>
                    {
                       
                        props.product.variation_attributes[1].values.map(item=>{
                            return(
                                <React.Fragment>
                                    <input
                                        id={item.name} type='radio' 
                                        value={item.value} name='size'
                                    />
                                    <label htmlFor={item.name} className='animate__animated animate__flipInX'>
                                        <div>{item.name}</div>
                                    </label>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
             </React.Fragment>
        }
        <button>Add to cart</button>
    </div>
  )
}

export default DataSection