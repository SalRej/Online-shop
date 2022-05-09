import React from 'react'

function DataSection(props) {

    const addToCart= () =>{
    
        const productData = {
            id:props.product.id,
            name:props.product.name,
            quantity:1,
            color:"No Color",
            size:"No Size",
            price:props.currentPrice
        }

        if(props.currentColorVariation !=''){
            //if the product has color variation extract the color values from procut
            //see which color value === the current color variation
            //and set color = the current colro variation name
            const colorValues = props.product.variation_attributes[0].values;
            colorValues.forEach(value =>{
                if(value.value === props.currentColorVariation){
                    productData.color = value.name;
                }
            })
        }
        
        if(props.currentSizeVariation != ''){
            //do the above but for sizes
            const sizeValues = props.product.variation_attributes[1].values;
            sizeValues.forEach(value =>{
                if(value.value === props.currentSizeVariation){
                    productData.size = value.name;
                }
            })
        }

        const cart = JSON.parse(localStorage.getItem("cart"));
        //if cart doesen't exist create one with product data 
        if(cart===null){
            const createdCart = [productData];
            localStorage.setItem("cart",JSON.stringify(createdCart));
        }else{
            //if cart exist check if the product is already in the cart 
            //if it is then increment the quantity attribute
            //if not just add it

            let isInCart = false;
            cart.forEach(product =>{
                if(product.id === productData.id && product.color === productData.color && product.size === productData.size){
                    isInCart = true;
                    product.quantity++;
                }
            })

            if(isInCart === false){
                cart.push(productData);
            }
            localStorage.setItem("cart",JSON.stringify(cart));
        }
    }
    
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
        <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default DataSection