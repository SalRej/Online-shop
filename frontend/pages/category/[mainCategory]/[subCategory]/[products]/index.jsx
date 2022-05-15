import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import ProductsCard from '../../../../../components/ProductCard/ProductsCard';
import FiltersMenu from '../../../../../components/Filters/FiltersMenu';
function Products(props) {

    const [noProducts,setNoProducts] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);
    const [showFilters,setShowFilters] = useState(false);//show filters menu or not
    const [products,setProducts] = useState(props.data);//data of the products fetcher from backend
    const [filterValues,setFilterValues]=useState({price:0,color:[],size:[]});//values to send to the server to filter
    

    const router = useRouter();
    const productsType = router.query.products;
    
    //takes the params from query string
    //const [searchParams] = useSearchParams();
    //const name = searchParams.get('name');
    
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
        fetch(process.env.URL + `/filterProducts?productsType=${productsType}&&price=${filterValues.price}&&colors=${filterValues.color}&&sizes=${filterValues.size}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.length===0){
                setNoProducts(true);
            }else{
                setNoProducts(false);
            }
            //setProducts(data);
            setIsLoaded(true);
        })
    }
    
    useEffect(()=>{
        filterProducts();
    },[filterValues])
    
    useEffect(()=>{
        if(props.products.length===0){
            setNoProducts(true);
        }else{
            setNoProducts(false);
        }

        setProducts(props.products);
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
                    filterValues={filterValues}
                    handleSetFilterValues={handleSetFilterValues}
                />
            </div>
           
            {/* <h2>Number of results : {isLoaded && products.length}</h2> */}
            <div className='cards-holder'>
                {   isLoaded===true && 
                    products.map(item=>{
                        
                        return <ProductsCard key={item.id} data={item}
                        link={`${router.asPath}/${item.id}`}
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
    const res = await fetch(process.env.URL + `/getProducts?productsType=${productsType}`)
    const data = await res.json();
    return {
      props: {
          products:data.data,
          price:{
              minPrice:data.minPrice,
              maxPrice:data.maxPrice
          },
          avaibleSizes:data.avaibleSizes,
          name:context.query.name
      },
    }
  }
export default Products