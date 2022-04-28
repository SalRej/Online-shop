import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageSection from './ImageSection';
import DataSection from './DataSection';
function ProductDescription() {

    const [product,setProduct] = useState();
    const [iseLoaded,setIsLoaded] = useState(false);
    const [currentColorVariation,setCurrentColorVariation] = useState("");
    const [currentSizeVariation,setCurrentSizeVariation] = useState("");
    const [currentPrice,setCurrentPrice] = useState();

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
                    setCurrentColorVariation(item.variation_value);
                    isVariationSet=true;
                }
            }
        })
        if(hasSwatches === false){
            console.log("vleze")
            //this means the current product has no sawtch images and therefor
            //no variation , so i have to hande this with showing large images with no
            //variation value
            setCurrentColorVariation("none");
            
        }
    }
    const adjustImages = () =>{
        setLargeImages([]);
        setSmallImages([]);
        //picks all small and large images where the variation == current variation
        //if there is no variation then pick all
        if(currentColorVariation!='none'){
            product.image_groups.forEach(item=>{
                if(item.view_type=="large" && item.variation_value==currentColorVariation){
                    setLargeImages((prev)=>{
                        return [...prev,item];
                    })
                }else if(item.view_type=="small" && item.variation_value==currentColorVariation){
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
            if(typeof(data[0].variation_attributes[1].values)){
                setCurrentSizeVariation(data[0].variation_attributes[1].values[0].value);
            }
        })
    },[])
    useEffect(()=>{
        //every time color or size is changes
        //loop all the variants and if they are equial to a certain variant
        //set the price to that variant
        //else price === default price
        let isPriceSet = false;
        if(typeof(product)!='undefined'){
            product.variants.forEach(variant => {
                if(variant.variation_values.color === currentColorVariation &&
                    variant.variation_values.size === currentSizeVariation){
                        setCurrentPrice(variant.price);
                        isPriceSet=true;
                    }
            })
            if(isPriceSet===false){
                setCurrentPrice(product.price);
            }
        }
    },[currentColorVariation,currentSizeVariation])
    
    const changeSizeVariation = (value) =>{
        setCurrentSizeVariation(value)
    }
    const changeColorVariation = (variation) =>{
        setCurrentColorVariation(variation);
    }
    return (
        <div className='product-description'>
            {
                iseLoaded &&
                <div className='info-holder'>
                    {console.log(currentSizeVariation)}
                    <ImageSection 
                        largeImages={largeImages}
                        smallImages={smallImages}
                        currentColorVariation={currentColorVariation}
                        adjustImages={adjustImages}
                    />
                    <DataSection 
                        product={product}
                        swatchImages={swatchImages}
                        changeColorVariation={changeColorVariation}
                        currentColorVariation={currentColorVariation}
                        currentSizeVariation={currentSizeVariation}
                        changeSizeVariation={changeSizeVariation}
                        currentPrice = {currentPrice}
                    />
                </div>
            }
        </div>
    )
}

export default ProductDescription