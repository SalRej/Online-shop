import React ,{useState , useEffect} from 'react'

function Home() {

    const [products,setProducts] = useState({});
    const [isLoaded,setIsLoaded] = useState(false);
    
    useEffect(()=>{
        //fetch data;
        fetch('http://localhost:5000/getSales')
        .then(response => response.json())
        .then((data)=>{
            console.log(data.data);
            setProducts(data.data);
        })
    },[])

    return (
        <div className='homa-page'>
        {   console.log(products)
        //    isLoaded &&  products.map((item)=>{
        //         return(
        //             <div>
        //                 <p key={item.name}>{item.name}</p>
        //                 <img src={`images/${item.imageLink}`}/>   
        //             </div>
        //        )
        //     })
        } 
        
        </div>
    )
}

export default Home