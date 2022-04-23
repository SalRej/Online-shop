import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductDescription() {

    const { productId } = useParams();
    console.log(productId);
    useEffect(()=>{
        fetch(`/getProductDescription?productId=${productId}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    },[])
    return (
    <div>ProductDescription</div>
    )
}

export default ProductDescription