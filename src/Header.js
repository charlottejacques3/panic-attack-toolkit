// import React from 'react';
// import './Header.css';

// import logo from './images/logo.png';
// function Header() {
//     return (
//         <header>
//             <h1>Panikitten</h1>
//             <img src={logo} alt="Panikitten Logo"
// className="logo" />
//         </header>
//     );
// }

// export default Header;

import React from 'react';
import logo from './images/logo.png';
import './Header.css';
function Header() {
    return (
        <header>
            <div className = "container">
                <div className='image'>
                <img src={logo} alt="Panikitten Logo" className="logo" />
                </div>
                <div className='text'>
                    <h1>Panikitten</h1>
                </div>
            </div>
        </header>
    );
}
export default Header;