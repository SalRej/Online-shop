import React , { useEffect , useState } from 'react'
import { useRouter } from 'next/router';
import CategorieCard from '../../../../components/Categorie/CategorieCard';

function SubCategorie() {
    const router = useRouter();
    const subCategory = router.query.subCategory;
    const [subCategories,setSubCategories] = useState();
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        if(router.isReady === true){
            fetch(process.env.URL + `/getSubCategorie?subCategorie=${subCategory}`)
            .then(res=>res.json())
            .then(data=>{
                setIsLoaded(true);
                setSubCategories(data.data);
            })
        }
    },[router.isReady,subCategory]);
    return (
        <div>
            {
              isLoaded &&  subCategories.categories.map(item=>{
                    return <CategorieCard key={item.id} categorie={item} link={`${router.asPath}/${item.id}`}/>
                })
            }    
        </div>
    )
}

export default SubCategorie