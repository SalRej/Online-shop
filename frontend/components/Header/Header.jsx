import React ,{useState,useEffect} from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

const Header = () =>{

    const [screenWidth,setScreenWidth] = useState();
    const [toShowMobileMenu,setToShowMobileMenu] = useState(false);

    const toogleToShowMobileMenu = () =>{
        setToShowMobileMenu((prev)=>!prev);
    }
    useEffect(()=>{
        setScreenWidth(window.innerWidth);
        window.addEventListener("resize",()=>{
            setScreenWidth(window.innerWidth);
        })
    },[]);
    
    return(
        <div className='header'>
            {(screenWidth <= 1000) &&  <i onClick={toogleToShowMobileMenu} className="menu fa-solid fa-bars"></i>}
            {toShowMobileMenu===true && <MobileMenu toogleShow={toogleToShowMobileMenu}/>}
            <Link href='/home'>
                <img className='logo' src='/images/images.png'/>
            </Link>
            <Link href='/category/mens'>
                <div className='categorie'>
                    <p>
                        Men
                    </p>
                </div>
            </Link>
            <Link href='/category/womens'>
                <div className='categorie'>
                    <p>Women</p>
                </div>
            </Link>
            <div className='search-bar-holder'>
                <input className='search-bar' placeholder='Search for items and brands'/>
                <i className="search-icon fa-solid fa-magnifying-glass"></i>
            </div>
            {(screenWidth <= 700) &&  <i className="fa-solid fa-magnifying-glass"></i>}
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-heart"></i>
            <Link href='/cart'>
                <i className="fa-solid fa-bag-shopping"></i>
            </Link>
        </div>
    )
}

export default Header;