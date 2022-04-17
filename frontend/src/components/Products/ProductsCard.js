import React from 'react'

function ProductsCard(props) {
    const imgLink = props.data.image_groups[0].images[0].link;
    const imageGroups = props.data.image_groups.filter(item=>{
        if(item.view_type=='swatch' && typeof(variation_value)!=undefined){
            return item;
        }
    })

    console.log(imageGroups);
    return (
    <div>
        <img src={`/images/${imgLink}`}/>
        <p>{props.data.name}</p>
        <p>{props.data.price}</p>
        <p>{props.data.currency}</p>
        {
            imageGroups.map(item=>{
                return(<img src={`/images/${item.images[0].link}`}/>)
            })
        }
    </div>
    )
}

export default ProductsCard