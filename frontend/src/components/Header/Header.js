import React ,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
const Header = () =>{

    const [screenWidth,setScreenWidth] = useState(0);

    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setScreenWidth(window.innerWidth);
        })
    },[screenWidth]);
    return(
        <div className='header'>
            {(window.innerWidth <= 1000) && <img className='menu' src='images/menu.png'/>}
            <img className='logo' src='images/logo.jpg'/>
            <Link to='/men'>
                <div className='categorie'>
                    <p>
                        Men
                    </p>
                </div>
            </Link>
            <Link to='/women'>
                <div className='categorie'>
                    <p>Women</p>
                </div>
            </Link>
            <div className='search-bar-holder'>
                <input className='search-bar' placeholder='Search for items and brands'/>
                <img src='images/search.png' className='search-icon'/>
            </div>
            {(window.innerWidth <= 700) && <img className='search-icon' src='images/search-mobile.png' />}
            <img src='images/user.png'/>
            <img src='images/love.png'/>
            <img src='images/shopping-bag.png'/>
        </div>
    )
}

export default Header;