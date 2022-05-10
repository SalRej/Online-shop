import React, { useEffect , useState } from 'react'

function Checkout(props) {
  const [totalPrice,setTotalPrice] = useState(0);
  useEffect(()=>{
    const sum = 0;
    props.cart.forEach(product=>{
      sum+=Number(product.totalPrice);
    })
    setTotalPrice(Number(sum).toFixed(2))
  },[props])

  return (
    <div className='checkout'>
      <div>
          <h2>Order Summary</h2>
          <div>
            <h3>Subtotal</h3>
            <p>${totalPrice}</p>
          </div>
          <div>
            <h3>Shipping</h3>
            <p>Free</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>${totalPrice}</p>
          </div>
      </div>

        <button>Checkout</button>
    </div>
  )
}

export default Checkout