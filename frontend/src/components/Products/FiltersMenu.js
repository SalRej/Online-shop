import React,{useState , useRef} from 'react'
import PriceFilter from './PriceFilter';
import ColorFilter from './ColorFilter';
import SizeFilter from './SizeFilter';

function FiltersMenu(props) {

    const [showPriceFilter,setShowPriceFilter] = useState(false);
    const [showColorFilter,setShowColorFilter] = useState(false);
    const [showSizeFilter,setShowSizeFilter] = useState(false);
    const filterForm = useRef();

    return (
    <div>
        <div onClick = {()=>{props.toogleShowFilters()}} className='filters-button'>
            <img src='/images/filter.png'/>
            Filters
        </div>
        {
            props.showFilters && 
            <div className='filters animate__animated animate__slideInUp'>
                <div className='heading'>
                    <h2>Filters</h2>
                    <img onClick = {()=>{props.toogleShowFilters()}}src='/images/close.png' className='close-icon'/>
                </div>
                <div 
                    onClick={()=>{setShowPriceFilter((prev)=>!prev)}}
                    className={"holder" +" " + (showPriceFilter===true && "highlight")}>
                    Price
                </div>
                {
                    showPriceFilter && <PriceFilter price={props.price}
                        filterValues={props.filterValues}
                        handleSetFilterValues={props.handleSetFilterValues}
                    />
                }
                <div 
                    onClick={()=>{setShowColorFilter((prev)=>!prev)}} 
                    className={"holder" +" " + (showColorFilter===true && "highlight")}>
                    Color
                </div>
                {
                    showColorFilter && <ColorFilter
                        filterValues={props.filterValues}
                        handleSetFilterValues={props.handleSetFilterValues}
                    />
                }
                <div 
                    onClick={()=>{setShowSizeFilter((prev)=>!prev)}}
                    className={"holder" +" " + (showSizeFilter===true && "highlight")}>
                    Size
                </div>
                {
                    showSizeFilter && <SizeFilter 
                        avaibleSizes={props.avaibleSizes}
                        filterValues={props.filterValues}
                        handleSetFilterValues={props.handleSetFilterValues}
                    />
                }
            </div>
        }
    </div>
    )
}

export default FiltersMenu;