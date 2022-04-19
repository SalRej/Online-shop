import React,{useState} from 'react'
import PriceFilter from './PriceFilter';
import ColorFilter from './ColorFilter';
import SizeFilter from './SizeFilter';

function FiltersMenu(props) {

    const [showPriceFilter,setShowPriceFilter] = useState(false);
    const [showColorFilter,setShowColorFilter] = useState(false);
    const [showSizeFilter,setShowSizeFilter] = useState(false);
    return (
    <div>
        <div onClick = {()=>{props.toogleShowFilters()}} className='filters-button'>
            <img src='/images/filter.png'/>
            Filters
        </div>
        {
            props.showFilters && 
            <div className='filters'>
                <div className='heading'>
                    <h2>Filters</h2>
                    <img onClick = {()=>{props.toogleShowFilters()}}src='/images/close.png' className='close-icon'/>
                </div>
                <div onClick={()=>{setShowPriceFilter((prev)=>!prev)}} className='holder'>Price</div>
                {
                    showPriceFilter && <PriceFilter price={props.price}/>
                }
                <div onClick={()=>{setShowColorFilter((prev)=>!prev)}} className='holder'>Color</div>
                {
                    showColorFilter && <ColorFilter />
                }
                <div onClick={()=>{setShowSizeFilter((prev)=>!prev)}} className='holder'>Size</div>
                {
                    showSizeFilter && <SizeFilter avaibleSizes={props.avaibleSizes}/>
                }
            </div>
        }
    </div>
    )
}

export default FiltersMenu;