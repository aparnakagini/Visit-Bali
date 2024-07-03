import React from 'react';
import './Packages.css';

const Packages = () => {
    return (
        <section className="packages">
            <h2>Bali Travel Packages</h2>
            <div className="package-list">
                <div className="package-item">
                    <img src="path/to/image1.jpg" alt="Couples Package" />
                    <h3>Bali Tour Package for Couples - 5 Nights</h3>
                    <p>C$520</p>
                </div>
                <div className="package-item">
                    <img src="path/to/image2.jpg" alt="Families Package" />
                    <h3>Bali Tour Package for Families - 7 Nights</h3>
                    <p>C$730</p>
                </div>
                <div className="package-item">
                    <img src="path/to/image3.jpg" alt="Honeymoon Package" />
                    <h3>Bali Honeymoon Package - 7 Nights</h3>
                    <p>C$1,030</p>
                </div>
            </div>
            <a href="#">Browse More Bali Packages →</a>
        </section>
    );
}

export default Packages;
