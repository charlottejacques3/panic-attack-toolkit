import React from 'react';
import './Header.css';

import logo from './images/logo.png';
function Header() {
    return (
        <header>
            <h1>Panikitten</h1>
            <img src={logo} alt="Panikitten Logo"
className="logo" />
        </header>
    );
}

export default Header;