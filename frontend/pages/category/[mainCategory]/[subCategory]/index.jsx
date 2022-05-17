import React , { useEffect , useState } from 'react'
import { useRouter } from 'next/router';
import CategorieCard from '../../../../components/Categorie/CategorieCard';

function SubCategorie() {
    const router = useRouter();
    const finalSubCategoryId = router.query.subCategory;
    const [subCategories,setSubCategories] = useState();
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        if(router.isReady === true){
            fetch(`/api/getFinalSubCategory?finalSubCategoryId=${finalSubCategoryId}`)
            .then(res=>res.json())
            .then(data=>{
                setIsLoaded(true);
                setSubCategories(data.data);
            })
        }
    },[router.isReady,finalSubCategoryId]);
    return (
        <div>
            {
              isLoaded &&  subCategories.map(item=>{
                    return <CategorieCard key={item.id} categorie={item} link={`${router.asPath}/${item.id}?name=${item.name}`}/>
                })
            }    
        </div>
    )
}

export default SubCategorie