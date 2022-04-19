import React, { useEffect, useState } from 'react'
import {useParams, useSearchParams} from 'react-router-dom';
import ProductsCard from './ProductsCard';
import FiltersMenu from './FiltersMenu';
function Products() {

    const [isLoaded,setIsLoaded] = useState(false);
    const [showFilters,setShowFilters] = useState(false);
    const [products,setProducts] = useState();
    const [filterValues,setFilterValues]=useState({price:0,color:[],size:[]});

    const [price,setPrice] = useState({minPrice:0,maxPrice:0});
    const [avaibleSizes,setAvaibleSizes] = useState();
    const {productsType} = useParams();
    
    //takes the params from query string
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');

    const toogleShowFilters = () =>{
        setShowFilters((prev)=>!prev);
    }
    const handleSetFilterValues = (e) =>{
        if(e.target.type === "range"){
            setFilterValues((prev)=>{
                return({
                    ...prev,
                    price:e.target.value
                })
            })
        }else if(e.target.type==='checkbox'){
            const value = e.target.value;
            setFilterValues((prev)=>{
                return({
                    ...prev,
                    [e.target.name]:[...prev[e.target.name],value]
                })
            })
        }
        console.log(filterValues)
    }

    useEffect(()=>{
        fetch(`/getProducts?productsType=${productsType}`)
        .then(res=>res.json())
        .then((data)=>{
            setPrice((prev)=>{
                return {
                    ...prev,
                    minPrice:data.minPrice,
                    maxPrice:data.maxPrice
                }
            })
            setAvaibleSizes(data.avaibleSizes);
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
                    avaibleSizes={avaibleSizes}
                    filterValues={filterValues}
                    handleSetFilterValues={handleSetFilterValues}
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