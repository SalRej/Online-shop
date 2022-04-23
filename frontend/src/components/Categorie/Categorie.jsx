import React , { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import CategorieCard from './CategorieCard';

function Categorie() {

    const { categorie } = useParams();
    const [isLoaded,setIsLoaded] = useState(false);
    const [mainCategorie,setMaincategorie] = useState();
    useEffect(()=>{
        fetch(`/getCategorie?categorie=${categorie}`)
        .then(res=>res.json())
        .then(data=>{
            setMaincategorie(data[0]);
            setIsLoaded(true);
        })
    },[categorie])

    return (
        
    <div>
        {
            isLoaded===true &&
            <div className='categorie-heading'>
                <div className='description'>
                    <h1>{mainCategorie.name}</h1>
                    <h3>{mainCategorie.page_title}</h3>
                    <h4>{mainCategorie.page_description}</h4>
                </div>
                <img src={`images/${mainCategorie.image}`}></img>
            </div>
        }
        {
            isLoaded === true && mainCategorie.categories.map(categorie => {
                return <CategorieCard key={categorie.id} categorie={categorie}/>
            })
        }
    </div>
    )
}

export default Categorie