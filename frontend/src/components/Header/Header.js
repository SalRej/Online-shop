import React ,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header = () =>{

    const [screenWidth,setScreenWidth] = useState(0);
    const [toShowMobileMenu,setToShowMobileMenu] = useState(false);

    const toogleToShowMobileMenu = () =>{
        setToShowMobileMenu((prev)=>!prev);
    }
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setScreenWidth(window.innerWidth);
        })
    },[]);

    return(
        <div className='header'>
            {(screenWidth <= 1000) && <img onClick={toogleToShowMobileMenu} className='menu' src='/images/menu.png'/>}
            {toShowMobileMenu===true && <MobileMenu toogleShow={toogleToShowMobileMenu}/>}
            <Link to='/'>
                <img className='logo' src='/images/logo.jpg'/>
            </Link>
            <Link to='/mens'>
                <div className='categorie'>
                    <p>
                        Men
                    </p>
                </div>
            </Link>
            <Link to='/womens'>
                <div className='categorie'>
                    <p>Women</p>
                </div>
            </Link>
            <div className='search-bar-holder'>
                <input className='search-bar' placeholder='Search for items and brands'/>
                <img src='/images/search.png' className='search-icon'/>
            </div>
            {(window.innerWidth <= 700) && <img className='search-icon' src='images/search-mobile.png' />}
            <img src='/images/user.png'/>
            <img src='/images/love.png'/>
            <img src='/images/shopping-bag.png'/>
        </div>
    )
}

export default Header;