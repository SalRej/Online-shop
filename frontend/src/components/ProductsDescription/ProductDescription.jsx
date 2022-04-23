import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageSection from './ImageSection';
import DataSection from './DataSection';
function ProductDescription() {

    const [product,setProduct] = useState();
    const [iseLoaded,setIsLoaded] = useState(false);
    const [currentVariation,setCurrentVariation] = useState("");
    const [largeImages,setLargeImages] = useState([]);
    const [smallImages,setSmallImages] = useState([]);
    const [swatchImages,setSwatchImages] = useState([]);
   
    const { productId } = useParams();
    const getSwatches = (data) =>{
        //gets all swatches and first variation value of the swatch
        //i take the first value so when a product is loaded im seening the 
        //firt avaible variation and not the last one
        let isVariationSet = false;
        let hasSwatches = false;
        data.image_groups.forEach(item=>{

            if(item.view_type=="swatch" && typeof(item.variation_value)!='undefined'){
                hasSwatches=true;
                setSwatchImages((prev)=>{
                    return [...prev,item];
                })
                if(isVariationSet == false){
                    setCurrentVariation(item.variation_value);
                    isVariationSet=true;
                }
            }
        })
        if(hasSwatches === false){
            console.log("vleze")
            //this means the current product has no sawtch images and therefor
            //no variation , so i have to hande this with showing large images with no
            //variation value
            setCurrentVariation("none");
            
        }
    }
    const adjustImages = () =>{
        setLargeImages([]);
        setSmallImages([]);
        //picks all small and large images where the variation == current variation
        if(currentVariation!='none'){
            product.image_groups.forEach(item=>{
                if(item.view_type=="large" && item.variation_value==currentVariation){
                    setLargeImages((prev)=>{
                        return [...prev,item];
                    })
                }else if(item.view_type=="small" && item.variation_value==currentVariation){
                    setSmallImages((prev)=>{
                        return[...prev,item];
                    })
                }
            })
        }else{
            product.image_groups.forEach(item=>{
                if(item.view_type=="large"){
                    setLargeImages((prev)=>{
                        console.log("large");
                        return [...prev,item];
                    })
                }else if(item.view_type=="small"){
                    setSmallImages((prev)=>{
                        return[...prev,item];
                    })
                }
            })
        }
    }
    useEffect(()=>{
        fetch(`/getProductDescription?productId=${productId}`)
        .then(res=>res.json())
        .then(data=>{
            setIsLoaded(true);
            setProduct(data[0]);
            getSwatches(data[0]);
        })
    },[])

    const changeVariation = (variation) =>{
        setCurrentVariation(variation);
    }
    return (
        <div className='product-description'>
            {
                iseLoaded &&
                <div className='info-holder'>
                    {console.log(largeImages)}
                    <ImageSection 
                        largeImages={largeImages}
                        smallImages={smallImages}
                        currentVariation={currentVariation}
                        adjustImages={adjustImages}
                    />
                    <DataSection 
                        product={product}
                        swatchImages={swatchImages}
                        changeVariation={changeVariation}
                    />
                </div>
            }
        </div>
    )
}

export default ProductDescription