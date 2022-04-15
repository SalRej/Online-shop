import React from 'react';
import { Link } from 'react-router-dom';
const Header = () =>{
    return(
        <div className='header'>
            Header
            <Link to='/test'>Test</Link>
        </div>
    )
}

export default Header;