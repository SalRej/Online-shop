import React from 'react'

function CategorieCard(props) {
    console.log(props);
  return (
    <div>
        <p>{props.categorie.name}</p>
        <p>{props.categorie.page_title}</p>
        <p>{props.categorie.page_description}</p>
        <img src={`images/${props.categorie.image}`}/>
    </div>
  )
}

export default CategorieCard