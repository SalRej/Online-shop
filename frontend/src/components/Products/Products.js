import React, { useEffect, useState } from 'react'
import {useParams, useSearchParams} from 'react-router-dom';
import ProductsCard from './ProductsCard';
import FiltersMenu from './FiltersMenu';
function Products() {

    const [isLoaded,setIsLoaded] = useState(false);//cheks if page is loaded
    const [showFilters,setShowFilters] = useState(false);//show filters menu or not
    const [products,setProducts] = useState();//data of the products fetcher from backend
    const [filterValues,setFilterValues]=useState({price:0,color:[],size:[]});//values to send to the server to filter
    const [noPorducts,setNoProducts] = useState(false);
    const [price,setPrice] = useState({minPrice:0,maxPrice:0});//min and max price
    const [avaibleSizes,setAvaibleSizes] = useState();//stores the avaible size for the current type of products
    const {productsType} = useParams();
    
    //takes the params from query string
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');
    
    const toogleShowFilters = () =>{
        setShowFilters((prev)=>!prev);
    }
    const handleSetFilterValues = (e) =>{
        //what this function does
        //1.checks the type of the input
        //2.if its range type just update the value of price
        //3.if its checkbox type check is it uncheck or checked value
        //4.if its checked then check to see if it's already in the array 
        //5.if not then add id
        //6.if the value is unckecked then filter the array to return everythin
        //exept the element with value === the uncked box

        if(e.target.type === "range"){
            setFilterValues((prev)=>{
                return({
                    ...prev,
                    price:e.target.value
                })
            })
            setIsLoaded(false)
        }else if(e.target.type==='checkbox'){
            const value = e.target.value;
            const name = e.target.name;
            if(e.target.checked === true){
                if(!filterValues[name].includes(value)){
    
                    setFilterValues((prev)=>{
                        return({
                            ...prev,
                            [name]:[...prev[name],value]
                        })
                    })
                    setIsLoaded(false);
                }
            }else{
                setFilterValues((prev)=>{
                    return{
                        ...prev,
                        [name]: prev[name].filter(item=>{
                            return item !== value
                        })
                    }
                })
                setIsLoaded(false);
            }
        }
    }

    const filterProducts = () =>{
        console.log(filterValues.color);
        fetch(`/filterProducts?productsType=${productsType}&&price=${filterValues.price}&&colors=${filterValues.color}&&sizes=${filterValues.size}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.length===0){
                setNoProducts(true);
            }else{
                setNoProducts(false);
            }
            setProducts(data);
            setIsLoaded(true);
        })
    }
    
    useEffect(()=>{
        filterProducts();
    },[filterValues])


    useEffect(()=>{
        fetch(`/getProducts?productsType=${productsType}`)
        .then(res=>res.json())
        .then((data)=>{
            if(data.data.length===0){
                setNoProducts(true);
            }else{
                setNoProducts(false);
            }
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
            <h2>Number of results : {isLoaded && products.length}</h2>
            <div className='cards-holder'>
                {
                    isLoaded &&
                    products.map(item=>{
                        return <ProductsCard key={item.id} data={item}/>;
                    })
                }
                {
                    noPorducts &&
                    <h1 className='no-products'>No products were found</h1>
                }
            </div>
        </div>
    )
}

export default Products