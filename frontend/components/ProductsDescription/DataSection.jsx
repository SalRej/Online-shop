import React from 'react'
import addToCart from '../../scripts/addToCart';

function DataSection(props) {

  return (
    <div className='data-section'>
        <p className='item-number'>Item No.{props.product.id}</p>
        <p className='title'>{props.product.page_title}</p>
        <p className='price'>{props.currentPrice}<span>{props.product.currency}</span></p>
        {   props.swatchImages.length>0 && 
            <React.Fragment>
                <h3>Color</h3>
                <div className='holder my-checkbox'>
                    {
                        props.swatchImages.map((item,index)=>{
                            {console.log(item)}
                            if(typeof(item.variation_value)!='undefined'){
                                return item.images.map((image,index)=>{
                                    return(
                                        <React.Fragment key={index}>
                                            <input
                                                id={item.variation_value} type='radio' 
                                                value={item.variation_value} name='color'
                                                checked={item.variation_value===props.currentColorVariation?true:false}
                                            />
                                            <label htmlFor={item.variation_value} className='animate__animated animate__flipInX'>
                                                <img 
                                                    onClick={()=>{props.changeColorVariation(item.variation_value)}}
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
                       
                        props.product.variation_attributes[1].values.map((item,index)=>{
                            return(
                                <React.Fragment key={index}>
                                    <input
                                        id={item.name} type='radio' 
                                        value={item.value} name='size'
                                        checked={item.value === props.currentSizeVariation?true:false}
                                       
                                    />
                                    <label htmlFor={item.name}
                                        className='animate__animated animate__flipInX'
                                        onClick = {()=>{props.changeSizeVariation(item.value)}}
                                    >
                                        <div>{item.name}</div>
                                    </label>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
             </React.Fragment>
        }
        <button onClick={()=>{addToCart(props)}}>Add to cart</button>
    </div>
  )
}

export default DataSection