import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
import ProductsCard from '../../../../../components/ProductCard/ProductsCard';
import FiltersMenu from '../../../../../components/Filters/FiltersMenu';
function Products(props) {

    const [noProducts,setNoProducts] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);
    const [showFilters,setShowFilters] = useState(false);
    const [products,setProducts] = useState(props.products);
    const [filterValues,setFilterValues]=useState({price:0,color:[],size:[]});
    const isFristRender = useRef(true);

    const router = useRouter();
    const productsType = router.query.products;

    const toogleShowFilters = (bool) =>{
        setShowFilters(bool);
    }
    const handleSetFilterValues = (e) =>{
        //what this function does
        //1.checks the type of the input
        //2.if its range type just update the value of price
        //3.if its checkbox type check is it uncheck or checked value
        //4.if its checked then check to see if it's already in the array 
        //5.if not then add id
        //6.if the value is unckecked then filter the array to return everything
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
        fetch(`/api/filterProducts?productsType=${productsType}&&price=${filterValues.price}&&colors=${filterValues.color}&&sizes=${filterValues.size}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.length===0){
                setNoProducts(true);
            }else{
                setNoProducts(false);
            }
            setProducts(data.data);
            setIsLoaded(true);
        })
    }
    
    useEffect(()=>{
        //prevents it from running on first render
        if(isFristRender.current===false){
            filterProducts();
        }else{
            isFristRender.current=false;
        }
    },[filterValues])
    
    useEffect(()=>{
        if(props.products.length===0){
            setNoProducts(true);
        }else{
            setNoProducts(false);
        }
        setIsLoaded(true);
    },[])

    return (
        <div>
            <div className='products-heading'>
                <h2>{props.name}</h2>
                <FiltersMenu 
                    showFilters={showFilters} 
                    toogleShowFilters={toogleShowFilters}
                    price={props.price}
                    avaibleSizes={props.avaibleSizes}
                    avaibleColors={props.avaibleColors}
                    filterValues={filterValues}
                    handleSetFilterValues={handleSetFilterValues}
                />
            </div>
           <p>Num products {products.length}</p>
            <div className='cards-holder'>
                {   
                    isLoaded===true && 
                    products.map((product,index)=>{
                        return <ProductsCard 
                            key={index} 
                            product={product}
                            largeImage={product.largeImage}
                            swatchImages={product.swatchImages}
                            link={`${router.asPath}/${product.id}`}
                        />;
                    })
                }
                {
                    noProducts &&
                    <h1 className='no-products'>No products were found</h1>
                }
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const productsType = context.params.products;
    const res = await fetch(process.env.URL + `/getProducts?productsType=${productsType}`);
    const data = await res.json();
    return {
      props: {
          products:data.products,
          price:{
              minPrice:data.minPrice,
              maxPrice:data.maxPrice
          },
          avaibleSizes:data.avaibleSizes,
          avaibleColors:data.avaibleColors,
          name:context.query.name
      },
    }
  }
export default Products