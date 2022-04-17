import React ,{useEffect ,useState}from 'react'
import { Link } from 'react-router-dom';
function MobileMenu(props) {

    const [isLoaded,setIsLoaded] = useState(false);
    const [mainCategorie,setMaincategorie] = useState('mens');
    const [categories,setCategories] = useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/getCategorie?categorie=${mainCategorie}`)
        .then(res=>res.json())
        .then(data=>{
            setCategories(data[0]);
            setIsLoaded(true);
            console.log(data[0]);
        })
    },[mainCategorie]);

    return (
    <div className='mobile-menu'>

        <div className='categorie-holder'>
            <div onClick={()=>{setMaincategorie('mens')}}className='mobile-categorie'>
                <p>
                    Men
                </p>
            </div>
            <div onClick={()=>{setMaincategorie('womens')}} className='mobile-categorie'>
                <p>Women</p>
            </div>
        </div>
        {isLoaded===true &&  categories.categories.map(item=>{
            return (
                <Link key={item.id} to={`/${mainCategorie}/${item.id}`}>
                    <div className='categorie-info'>
                        <p>{item.name}</p>
                        <img src={`/images/${item.image}`}/>
                    </div>
                </Link>
            )
        })}
    </div>
    )
}

export default MobileMenu