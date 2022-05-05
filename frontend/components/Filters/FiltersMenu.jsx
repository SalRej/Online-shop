import React,{useState , useRef, useEffect} from 'react'
import PriceFilter from './PriceFilter';
import ColorFilter from './ColorFilter';
import SizeFilter from './SizeFilter';

function FiltersMenu(props) {

    const [showPriceFilter,setShowPriceFilter] = useState(false);
    const [showColorFilter,setShowColorFilter] = useState(false);
    const [showSizeFilter,setShowSizeFilter] = useState(false);
    const filtersMenu = useRef();
    console.log(showPriceFilter + " c " + showColorFilter + " s " + showSizeFilter)
    const showFiltersMenu = () =>{
        filtersMenu.current.className="filters animate__animated animate__slideInUp";
        props.toogleShowFilters(true);
        console.log(props.showFilters + " t ");
    }
    const hideFiltersMenu = () =>{
        filtersMenu.current.className="filters animate__animated animate__slideOutDown";
        setTimeout(()=>{filtersMenu.current.className='hidden'},1000);
        props.toogleShowFilters(false);
        console.log(props.showFilters + " t ");
    }

    useEffect(()=>{
        if(props.showFilters===false){
            hideFiltersMenu();
        }
    },[])
    return (
    <div>
        <div onClick = {showFiltersMenu} className='filters-button'>
            <img src='/images/filter.png'/>
            Filters
        </div>
        {
            <div ref={filtersMenu} className="filters">
                <div className='heading'>
                    <h2>Filters</h2>
                    <img onClick = {hideFiltersMenu} src='/images/close.png' className='close-icon'/>
                </div>
                <div 
                    onClick={()=>{setShowPriceFilter((prev)=>!prev)}}
                    className={"holder" +" " + (showPriceFilter===true && "highlight")}>
                    <div>Price</div>
                    <i className="fa-solid fa-caret-down"></i>
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
                    <div>Colors</div>
                    <i className="fa-solid fa-caret-down"></i>
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
                    <div>Size</div>
                    <i className="fa-solid fa-caret-down"></i>
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