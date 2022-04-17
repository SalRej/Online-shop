import React from 'react'

function FiltersMenu(props) {
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
                <div className='holder'>Price</div>
                <div className='holder'>Color</div>
                <div className='holder'>Size</div>
            </div>
        }
    </div>
  )
}

export default FiltersMenu;