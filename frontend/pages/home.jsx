import React ,{useState , useEffect} from 'react'
import Link from "next/link";
function Home(props) {

    return (
        <div className='home-page'>
            <div className='main-screen'>
                <h2>MID SESSSION SALE</h2>
                <h1>NOW UP TO 40% OFF</h1>
                <div className='sales-card-holder'>
                    {   
                        props.products.map((item)=>{
                            {console.log(item.imageLink)}
                            return(
                                <Link href='/test' key={item.id}>
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
export async function getServerSideProps(context) {

    const res = await fetch(process.env.URL + '/getSales');
    const data = await res.json();

    return {
      props: {products : data.data}, // will be passed to the page component as props
    }
  }
export default Home