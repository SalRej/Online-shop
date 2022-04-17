import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import ProductsCard from './ProductsCard';
function Products() {

    const [isLoaded,setIsLoaded] = useState(false);
    const [products,setProducts] = useState();
    const {productsType} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:5000/getProducts?productsType=${productsType}`)
        .then(res=>res.json())
        .then((data)=>{
            setProducts(data.data);
            setIsLoaded(true);
        });
    },[])
    return (
        <div>
            {
                isLoaded && products.map(item=>{
                    return <ProductsCard data={item}/>;
                })
            }
        </div>
    )
}

export default Products