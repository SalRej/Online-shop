import React ,{ useState } from 'react'

function CartProducts(props){
  return (
    <div className='cart-products'>
        <div className="cart-nav">
            <p>PRODUCT</p>
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>TOTAL</p>
        </div>
        <div >
            {
                //if is loaded and cart exist 
                props.cart.map(product => {
                    return(
                        <div className='product' key={product.id + product.color + product.size}>
                            <div className='heading'>
                                <img src={`/images/${product.imgLink}`}/>
                                <div>
                                    <p>{product.name}</p>
                                    <p>Color: {product.color}</p>
                                    <p>Size: {product.size}</p>
                                </div>
                            </div>
                            <p>${product.price}</p>
                            <div className='quantity'>
                                <p onClick={()=>{props.removeProduct(product)}}>-</p>
                                <p>{product.quantity}</p>
                                <p onClick={()=>{props.addProduct(product)}}>+</p>
                            </div>
                            <p>${product.totalPrice}</p>
                            <img onClick={()=>{props.onPressDeleteFromCart(product)}} className='close-icon' src='/images/close.png' />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CartProducts