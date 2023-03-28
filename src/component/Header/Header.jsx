import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            {/* <h1>header</h1> */}
            <img src={logo} alt="" />
            <div>
                <a href="/shop">shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">inventory</a> 
                <a href="/logo">logo</a>
            </div>
        </nav>
    );
};

export default Header;