import React ,{useState , useEffect} from 'react'
import { Link } from "react-router-dom";
function Home() {

    const [products,setProducts] = useState({});
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        fetch('/getSales')
        .then(response => response.json())
        .then((data)=>{
            setIsLoaded(true);
            setProducts(data.data);
        })
    },[])

    return (
        <div className='home-page'>
            <div className='main-screen'>
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
            <img className='big-image' src='/images/home/man-fashion-1.jpg'/>
            <div className='smaller-img-holder'>
                <img src='/images/home/man-fashion-2.jpg'/>
                <img src='/images/home/man-fashion-3.jpg'/>
            </div>

            <div className='bottom'>
                <img src='/images/facebook.png'/>
                <img src='/images/instagram.png'/>
                <img src='/images/snapchat.png'/>
                <p>|</p>
                <img src='/images/visa.png'/>
                <img src='/images/master-card.png'/>
                <img src='/images/paypal.png'/>
            </div>
        </div>
    )
}

export default Home