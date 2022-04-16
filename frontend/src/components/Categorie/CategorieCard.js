import React from 'react'
import { Link } from 'react-router-dom';

function CategorieCard(props) {
    console.log(props);
  return (
    <div className='categorie-card-container'>
        <Link to={props.categorie.id}>
            <h3>{props.categorie.name}</h3>
            <h4>{props.categorie.page_title}</h4>
            <img src={`images/${props.categorie.image}`}/>
        </Link>
        <p>{props.categorie.page_description}</p>
    </div>
  )
}

export default CategorieCard