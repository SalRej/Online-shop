import Link from "next/link";
import Head from 'next/head';
function Home(props) {

    return (
        <div className='home-page' data-testid='home-test'>
            <Head>
                <title>Home page / Get sales</title>
            </Head>
            <div className='main-screen'>
                <h2>MID SESSSION SALE</h2>
                <h1>NOW UP TO 40% OFF</h1>
                <div className='sales-card-holder'>
                    {   
                        props.products.map((item)=>{
                            return(
                                <Link href='/test' key={item.id}>
                                    <div className='sales-card'>
                                        <div className='image-container'>
                                            <img src={`images/${item.imageLink}`} alt={item.imageAlt} />   
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
            <img className='big-image' src='/images/home/man-fashion-1.jpg' alt='fashion-image'/>
            <div className='smaller-img-holder'>
                <img src='/images/home/man-fashion-2.jpg' alt='fashion-image'/>
                <img src='/images/home/man-fashion-3.jpg' alt='fashion-image'/>
            </div>

            <div className='bottom'>
                <img src='/images/facebook.png' alt='facebook'/>
                <img src='/images/instagram.png' alt='instagram'/>
                <img src='/images/snapchat.png' alt='snapchat'/>
                <p>|</p>
                <img src='/images/visa.png' alt='visa' />
                <img src='/images/master-card.png' alt='mastercard' />
                <img src='/images/paypal.png' alt='paypal'/>
            </div>
        </div>
    )
}
export async function getServerSideProps(context) {

    const res = await fetch(process.env.URL + '/getSales');
    const data = await res.json();

    return {
      props: {products : data.data},
    }
  }
export default Home