import React , { useEffect , useState } from 'react';
import { useRouter } from 'next/router';
import CategorieCard from '../../../components/Categorie/CategorieCard';

function Categorie() {

    const router = useRouter();
    const categorie = router.query.mainCategory;
    const [isLoaded,setIsLoaded] = useState(false);
    const [mainCategorie,setMaincategorie] = useState();

    useEffect(()=>{
        if(router.isReady === true)
            fetch(process.env.URL + `/getCategorie?categorie=${categorie}&&test=10`)
            .then(res=>res.json())
            .then(data=>{
                setMaincategorie(data[0]);
                setIsLoaded(true);
            })
    },[router.isReady,categorie])

    if(isLoaded === false) return <p>Loading</p>
    if(typeof(mainCategorie)==='undefined') return <p>No data</p>
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
                <img src={`/images/${mainCategorie.image}`}/>
            </div>
        }
        {
            isLoaded===true && mainCategorie.categories.map(categorie => {
                return <CategorieCard key={categorie.id} categorie={categorie} link={`${router.asPath}/${categorie.id}`}/>
            })
        }
    </div>
    )
}

export default Categorie