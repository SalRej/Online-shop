import React , { useEffect , useState } from "react"

function Cart() {
    const [cart,setCart] = useState();
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        const cart = JSON.parse(localStorage.getItem('cart'));
        setIsLoaded(true);
        setCart(cart);
    },[])

    return (
        <React.Fragment>
            {
                (isLoaded===true && cart!=null)?
                    //if is loaded and cart exist 
                    cart.map(product => {
                    return(<div>
                        <p>{product.name}</p>
                        <p>{product.id}</p>
                        <p>{product.price}</p>
                    </div>)
                }):<p>No products in cart</p>
            }
        </React.Fragment>
    )
}

export default Cart