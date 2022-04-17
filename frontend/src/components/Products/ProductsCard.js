import React from 'react'

function ProductsCard(props) {
    const imgLink = props.data.image_groups[0].images[0].link;
    return (
    <div>
        <img src={`/images/${imgLink}`}/>
        <p>{props.data.name}</p>
    </div>
    )
}

export default ProductsCard