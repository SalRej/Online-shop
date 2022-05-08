import React from 'react'
import Link from 'next/link';

function CategorieCard(props) {
  let link = "";
  if(typeof(props.link) != undefined){
    link = props.link;
  }
  return (
    <div className='categorie-card-container'>
        <Link href={link}>
          <div>
            <h2>{props.categorie.name}</h2>
            <h4>{props.categorie.page_title}</h4>
            <img src={`/images/${props.categorie.image}`}/>
          </div>
        </Link>
        <p>{props.categorie.page_description}</p>
    </div>
  )
}

export default CategorieCard