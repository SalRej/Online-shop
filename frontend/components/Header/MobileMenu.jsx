import React ,{useEffect ,useState}from 'react'
import Link from 'next/link';
function MobileMenu(props) {

    const [isLoaded,setIsLoaded] = useState(false);
    const [mainCategorie,setMaincategorie] = useState('mens');
    const [categories,setCategories] = useState();
    useEffect(()=>{
        fetch(process.env.URL + `/getCategorie?categorie=${mainCategorie}`)
        .then(res=>res.json())
        .then(data=>{
            setCategories(data[0]);
            setIsLoaded(true);
        })
    },[mainCategorie]);

    return (
    <div className='mobile-menu' data-testid="mobile-menu-test">

        <div className='categorie-holder'>
            <div onClick={()=>{setMaincategorie('mens')}} className='mobile-categorie'>
                <p>
                    Men
                </p>
            </div>
            <div onClick={()=>{setMaincategorie('womens')}} className='mobile-categorie'>
                <p>Women</p>
            </div>
        </div>
        {isLoaded===true && categories.categories.map(item=>{
            return (
                <Link key={item.id} href={`/category/${mainCategorie}/${item.id}`}>
                    <div onClick={()=>{ props.toogleShow() }}className='categorie-info'>
                        <p>{item.name}</p>
                        <img src={`/images/${item.image}`}/>
                    </div>
                </Link>
            )
        }) }
    </div>
    )
}

export default MobileMenu