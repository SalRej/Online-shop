import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';

function Products() {

    const [isLoaded,setIsLoaded] = useState(false);
    const [products,setProducts] = useState();
    const {productsType} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:5000/getProducts?productsType=${productsType}`)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data.data);
            setProducts(data.data);
            setIsLoaded(true);
        });
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Products