import React, { useEffect, useState } from 'react'
import {useParams, useSearchParams} from 'react-router-dom';
import ProductsCard from './ProductsCard';
import FiltersMenu from './FiltersMenu';
function Products() {

    const [isLoaded,setIsLoaded] = useState(false);
    const [showFilters,setShowFilters] = useState(false);
    const [products,setProducts] = useState();

    const [price,setPrice] = useState({minPrice:0,maxPrice:0});

    const {productsType} = useParams();
    
    //takes the params from query string
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');

    const toogleShowFilters = () =>{
        setShowFilters((prev)=>!prev);
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/getProducts?productsType=${productsType}`)
        .then(res=>res.json())
        .then((data)=>{
            setPrice((prev)=>{
                return {
                    ...prev,
                    minPrice:data.minPrice,
                    maxPrice:data.maxPrice
                }
            })
            setProducts(data.data);
            setIsLoaded(true);
        });
    },[])

    return (
        <div>
            <div className='products-heading'>
                <h2>{name}</h2>
                <FiltersMenu 
                    showFilters={showFilters} 
                    toogleShowFilters={toogleShowFilters}
                    price={price}
                />
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