import React from 'react'
import { Link } from 'react-router-dom';
function MobileMenu(props) {

    return (
    <div className='mobile-menu'>

        <div className='categorie-holder'>
            <Link to='/mens'>
                <div onClick={()=>{props.toogleShow()}} className='mobile-categorie'>
                    <p>
                        Men
                    </p>
                </div>
            </Link>
            <Link to='/womens'>
                <div onClick={()=>{props.toogleShow()}} className='mobile-categorie'>
                    <p>Women</p>
                </div>
            </Link>
        </div>
    </div>
    )
}

export default MobileMenu