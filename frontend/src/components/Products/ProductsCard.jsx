import React from 'react'
import { Link } from 'react-router-dom'
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
        <Link to={`${props.data.id}`}>
            <div className='card animate__animated animate__fadeIn animate__delay-1'>
                {props.data.c_isSale === true && <div className='sale'><p>Sale</p></div> }
                {props.data.c_isNew === true && <div className='new'><p>New</p></div> }
                <img className='main-image'src={`/images/${imgLink}`}/>
                <p className='name'>{props.data.name}</p>
                <p className='price'>{props.data.price} {props.data.currency}</p>
                {
                    imageGroups.map((item,index)=>{
                        return(<img className='swatch' key={index} src={`/images/${item.images[0].link}`}/>)
                    })
                }
            </div>
        </Link>
    )
}

export default ProductsCard