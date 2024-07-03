import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <p>Visit Bali.com</p>
                <p>BALI TOURISM</p>
                <nav>
                    <ul>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#terms">Terms & Conditions</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
