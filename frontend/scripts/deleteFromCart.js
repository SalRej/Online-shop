const deleteFromCart = (product) =>{
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.filter(item=>{

        if(JSON.stringify(item) != JSON.stringify(product)){
            return item;
        }
    })
    localStorage.setItem('cart',JSON.stringify(newCart));
}

export default deleteFromCart;