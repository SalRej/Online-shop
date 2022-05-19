import React from 'react';
import { useRouter } from 'next/router';
import Link  from 'next/link';
function ProductsCard(props) {

    const router = useRouter();
    const path = router.pathname;
    const {mainCategory} = router.query;
    const {subCategory} = router.query;
    const {products} = router.query;
    const id = props.product.productData.id
    return (
        <Link href={{
            pathname:path +"/[productId]",
            query:{mainCategory:mainCategory,subCategory:subCategory,products:products,productId:id}
        }}>
            <div className='card animate__animated animate__fadeIn animate__delay-1'>
                {props.product.productData.isSale === true && <div className='sale'><p>Sale</p></div> }
                {props.product.productData.isNew === true && <div className='new'><p>New</p></div> }
                
                <img className='main-image'
                    src={`/images/${props.largeImage.link}`}
                    alt={props.largeImage.alt}
                />
                <p className='name'>{props.product.productData.name}</p>
                <p className='price'>{props.product.productData.price} {props.product.productData.currency}</p>

                {
                    props.swatchImages.map((image,index)=>{
                        return(<img className='swatch'
                            key={index}
                            src={`/images/${image.link}`}
                            alt={image.alt}
                        />)
                    })
                }
            </div>
        </Link>
    )
}

export default ProductsCard