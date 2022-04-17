import React , { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';
import CategorieCard from '../Categorie/CategorieCard';

function SubCategorie() {
    const {subCategorie} = useParams();
    const [subCategories,setSubCategories] = useState();
    const [isLoaded,setIsLoaded] = useState(false);
    useEffect(()=>{
        fetch(`http://localhost:5000/getSubCategorie?subCategorie=${subCategorie}`)
        .then(res=>res.json())
        .then(data=>{
            setIsLoaded(true);
            setSubCategories(data.data);
        })
    },[subCategorie]);
    return (
        <div>
            {
              isLoaded &&  subCategories.categories.map(item=>{
                    return <CategorieCard key={item.id} categorie={item}/>
                })
            }    
        </div>
    )
}

export default SubCategorie