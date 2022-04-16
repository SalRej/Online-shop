import React ,{useState , useEffect} from 'react'
import { Link } from "react-router-dom";
function Home() {

    const [products,setProducts] = useState({});
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        //fetch data;
        fetch('http://localhost:5000/getSales')
        .then(response => response.json())
        .then((data)=>{
            setIsLoaded(true);
            setProducts(data.data);
        })
    },[])

    return (
        <div className='home-page'>
            <h2>MID SESSSION SALE</h2>
            <h1>NOW UP TO 40% OFF</h1>
            <div className='sales-card-holder'>
                {
                isLoaded &&  products.map((item)=>{
                        return(
                            <Link to='/test' key={item.id}>
                                <div className='sales-card'>
                                    <div className='image-container'>
                                        <img src={`images/${item.imageLink}`}/>   
                                    </div>
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                    )
                    })
                } 
            </div>
            <button>VIEW ALL</button>
        </div>
    )
}

export default Home