import React from 'react';
import { Link } from 'react-router-dom';
const Header = () =>{
    return(
        <div className='header'>
            <img className='logo' src='images/logo.jpg'/>
            <div className='categorie'>
                <p>Men</p>
            </div>
            <div className='categorie'>
                <p>Women</p>
            </div>
            <div className='search-bar-holder'>
                <input className='search-bar' placeholder='search for items and brands'/>
                <img src='images/search.png' className='search-icon'/>
            </div>
            <img src='images/user.png'/>
            <img src='images/love.png'/>
            <img src='images/shopping-bag.png'/>
        </div>
    )
}

export default Header;