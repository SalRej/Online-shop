import React, { useEffect, useState } from 'react'
import ImageSection from '../../../../../../components/ProductsDescription/ImageSection';
import DataSection from '../../../../../../components/ProductsDescription/DataSection';
function ProductDescription(props) {

    const [product,setProduct] = useState();
    const [iseLoaded,setIsLoaded] = useState(false);
    const [currentColorVariation,setCurrentColorVariation] = useState("");
    const [currentSizeVariation,setCurrentSizeVariation] = useState("");
    const [currentPrice,setCurrentPrice] = useState();

    const [largeImages,setLargeImages] = useState([]);
    const [smallImages,setSmallImages] = useState([]);
    const [swatchImages,setSwatchImages] = useState([]);

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
            //this means the current product has no sawtch images and therefor
            //no variation , so i have to hande this with showing large images with no
            //variation value
            setCurrentColorVariation('');
            
        }
    }
    const adjustImages = () =>{
        setLargeImages([]);
        setSmallImages([]);
        //picks all small and large images where the variation == current variation
        //if there is no variation then pick all
        if(currentColorVariation!=''){
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
        setProduct(props.product);
        setIsLoaded(true)
        getSwatches(props.product);
        setCurrentPrice(props.product.price);
        try{
            //if there are size variations , set the first one as default check
            setCurrentSizeVariation(props.product.variation_attributes[1].values[0].value);
        }catch(e){
            console.log(e);
        }

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
                    <ImageSection 
                        largeImages={largeImages}
                        smallImages={smallImages}
                        currentColorVariation={currentColorVariation}
                        adjustImages={adjustImages}
                    />
                    <DataSection 
                        product={product}
                        swatchImages={swatchImages}
                        smallImages={smallImages}
                        currentColorVariation={currentColorVariation}
                        changeColorVariation={changeColorVariation}
                        currentSizeVariation={currentSizeVariation}
                        changeSizeVariation={changeSizeVariation}
                        currentPrice = {currentPrice}
                    />
                </div>
            }
            {
                iseLoaded &&
                <div className='description'>
                    <h2 className='page-title'>{product.page_title}</h2>
                    <h4 className='page-description'>{product.page_description}</h4>
                </div>
            }
        </div>
    )
}

export async function getServerSideProps(context) {
    const productId = context.params.productId;
    const res = await fetch(process.env.URL + `/getProductDescription?productId=${productId}`)
    const data = await res.json()
    return {
      props: {
          product:data[0]  
      },
    }
  }
export default ProductDescription