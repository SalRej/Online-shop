import React,{useState} from 'react'
import PriceFilter from './PriceFilter';

function FiltersMenu(props) {

    const [showPriceFilter,setShowPriceFilter] = useState(false);
    return (
    <div>
        <div onClick = {()=>{props.toogleShowFilters()}}className='filters-button'>
            <img src='/images/filter.png'/>
            Filters
        </div>
        {
            props.showFilters && 
            <div class='filters'>
                <div className='heading'>
                    <h2>Filters</h2>
                    <img onClick = {()=>{props.toogleShowFilters()}}src='/images/close.png' className='close-icon'/>
                </div>
                <div on onClick={()=>{setShowPriceFilter((prev)=>!prev)}} className='holder'>Price</div>
                {
                    showPriceFilter && <PriceFilter />
                }
                <div className='holder'>Color</div>
                <div className='holder'>Size</div>
            </div>
        }
    </div>
    )
}

export default FiltersMenu;