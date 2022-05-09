const addToCart= (props) =>{
    
    const productData = {
        id:props.product.id,
        name:props.product.name,
        quantity:1,
        color:"No Color",
        size:"No Size",
        price:props.currentPrice,
        totalPrice:props.currentPrice,
        imgLink:props.smallImages[0].images[0].link
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
                product.totalPrice = product.price * product.quantity;
            }
        })

        if(isInCart === false){
            cart.push(productData);
        }
        localStorage.setItem("cart",JSON.stringify(cart));
    }
}

export default addToCart;