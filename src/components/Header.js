import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <h1>BALI TOURISM</h1>
                <nav>
                    <ul>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#attractions">ATTRACTIONS</a></li>
                        <li><a href="#accommodation">ACCOMMODATION</a></li>
                        <li><a href="#dining">DINING</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
