import React from 'react'

function ProductsCard(props) {

    //picks the main image link
    //filter all images to be with type swatch
    //and displayes the data
    const imgLink = props.data.image_groups[0].images[0].link;
    const imageGroups = props.data.image_groups.filter(item=>{
        if(item.view_type=='swatch' && typeof(variation_value)!=undefined){
            return item;
        }
    })

    return (
        <div className='card'>
            <img className='main-image'src={`/images/${imgLink}`}/>
            <p className='name'>{props.data.name}</p>
            <p className='price'>{props.data.price} {props.data.currency}</p>
            {
                imageGroups.map((item,index)=>{
                    return(<img className='swatch' key={index} src={`/images/${item.images[0].link}`}/>)
                })
            }
        </div>
    )
}

export default ProductsCard