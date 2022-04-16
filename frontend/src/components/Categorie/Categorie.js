import React , { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
function Categorie() {

    const { categorie } = useParams();
    const [isLoaded,setIsLoaded] = useState(false);
    const [mainCategorie,setMaincategorie] = useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/getCategorie?categorie=${categorie}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data[0]);
            setMaincategorie(data[0]);
            setIsLoaded(true);
        })
    },[categorie])

    return (
        
    <div>
        {
            isLoaded===true &&
            <div>
                <img src={`images/categories/${mainCategorie.image}`}></img>
                <h1>{mainCategorie.name}</h1>
                <h3>{mainCategorie.page_description}</h3>
                <h4>{mainCategorie.page_title}</h4>
            </div>
        }
    </div>
    )
}

export default Categorie