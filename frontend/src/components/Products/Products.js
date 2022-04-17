import React, { useEffect, useState } from 'react'
import {useParams, useSearchParams} from 'react-router-dom';
import ProductsCard from './ProductsCard';
import Filters from './Filters';
function Products() {

    const [isLoaded,setIsLoaded] = useState(false);
    const [products,setProducts] = useState();
    const {productsType} = useParams();
    
    //takes the params from query string
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');

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
            <div className='products-heading'>
                <h2>{name}</h2>
                <Filters />
            </div>
            <div className='cards-holder'>
                {
                    isLoaded && products.map(item=>{
                        return <ProductsCard key={item.id} data={item}/>;
                    })
                }
            </div>
        </div>
    )
}

export default Products