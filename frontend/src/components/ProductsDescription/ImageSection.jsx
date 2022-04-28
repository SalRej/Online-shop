import React , {useEffect, useState ,useRef} from 'react'

function ImageSection(props) {
    //changing the index will change will image in large images array to show
    const [currentImageIndex,setCurrentImageIndex]= useState(0);//index to change images
    const test = useRef();
    //increment and decrement the index , check if index is out of bounds 
    //if small images array then retun i to 0 or length of small images array -  1
    const incrementIndex = () =>{
        console.log(test.current);
        test.current.className="animate__animated animate__flipInX";
        if(currentImageIndex < props.smallImages[0].images.length - 1){
            setCurrentImageIndex((prev)=>{
                return prev + 1;
            })

        }else{
            setCurrentImageIndex(0);
        }
    }
    const decrementIndex = () =>{
        if(currentImageIndex > 0 ){
            setCurrentImageIndex(prev=>{
                return prev-1;
            })
        }else{
            setCurrentImageIndex(props.smallImages[0].images.length-1);
        }
    }
    useEffect(()=>{
        //when a swatch is clicked the current variation is changed to 
        //the variation value of the swatch image 
        //according to current variation im gona sho diffran images
        //so im seting the current index to 0
        //and change the values of the large and small images with adjuseImages function
        setCurrentImageIndex(0);
        props.adjustImages();
    },[props.currentColorVariation])

    return (
        <div className='image-section'>
            <div className='main-image'>
                {
                    props.largeImages.map(item=>{ 
                        return item.images.map((image,index)=>{
                            //display only the image at the current index
                            if(currentImageIndex == index)
                                return(<img ref={test} key={index} src={`/images/${image.link}`}/>)
                        })  
                    })
                }
            </div>
            <div className='carusel'>
                <img onClick = {decrementIndex} src='/images/arrow-left.png'/>
                {
                    props.smallImages.map(item=>{
                        return item.images.map((image,index)=>{
                            return(<img className={currentImageIndex==index?'chosen':'variant'}
                                key={index} src={`/images/${image.link}`}/>
                             )
                        })
                    })
                }
                <img onClick = {incrementIndex} src='/images/arrow-right.png'/>
            </div>
        </div>
    )
}

export default ImageSection