import React , { useEffect , useState } from "react"
import CartProducts from "../../components/Cart/CartProducts";
import Checkout from "../../components/Cart/Checkout";
import deleteFromCart from "../../scripts/deleteFromCart";

function Cart() {
    const [cart,setCart] = useState();
    const [isLoaded,setIsLoaded] = useState(false);

    const getCart = () =>{
        const cart = JSON.parse(localStorage.getItem('cart'));
        setIsLoaded(true);
        setCart(cart);
    }
    const onPressDeleteFromCart = (product) =>{
        deleteFromCart(product);
        getCart();
    }
    const addProduct = (product) =>{
        const cart = JSON.parse(localStorage.getItem('cart'));
        cart.forEach(item =>{
            if(JSON.stringify(item) === JSON.stringify(product)){
                item.quantity++;
                item.totalPrice=Number(item.price*item.quantity).toFixed(2);
            }
        })
        localStorage.setItem('cart',JSON.stringify(cart));
        getCart();
    }
    const removeProduct = (product) =>{
        const cart = JSON.parse(localStorage.getItem('cart'));
        cart.forEach(item =>{
            if(JSON.stringify(item) === JSON.stringify(product)){
                if(item.quantity>1){
                    item.quantity--;
                    item.totalPrice=Number(item.price*item.quantity).toFixed(2);
                }
            }
        })
        localStorage.setItem('cart',JSON.stringify(cart));
        getCart();
    }
    useEffect(()=>{
        getCart();
    },[])

    return (
        <div className="cart-holder">
            <h1>Your cart</h1>
            <div className="container">
                {
                    (isLoaded===true && cart!=null)?
                    <React.Fragment>
                        <CartProducts cart={cart} 
                            onPressDeleteFromCart={onPressDeleteFromCart}
                            addProduct={addProduct}
                            removeProduct={removeProduct}
                        />
                        <Checkout cart={cart}/>
                    </React.Fragment>
                    :<p>No products in cart</p>
                }
                
            </div>
        </div>
    )
}

export default Cart