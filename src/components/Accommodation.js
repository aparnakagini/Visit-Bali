import React, { useState, useEffect } from 'react';
import './Accommodation.css';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';

const Accommodation = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [startTimer, setStartTimer] = useState(false);

    const handlePackageClick = (packageName) => {
        setSelectedPackage(packageName);
        setStartTimer(true);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const handleBookNow = () => {
        navigate('/confirmation');
    };

    return (
        <div>
            <div className="accommodation">
                <header className="accommodation-header">
                    <img src="accommodation.jpg" alt="Travel Packages" className="header-image" />
                    <h1>Travel Packages</h1>
                </header>
                <section className="package-booking">
                    <h2>Book Your Perfect Vacation Package in Bali</h2>
                    <div className="step">
                        <h3>Step 1: Select Your Travel Package</h3>
                        <p><strong>What’s Included:</strong> Accommodation, Sightseeing, Meals</p>
                        {startTimer && <Timer initialMinutes={15} initialSeconds={0} />}
                        <div className="package-cards">
                            <div
                                className={`package-card ${selectedPackage === 'couples' ? 'selected' : ''}`}
                                onClick={() => handlePackageClick('couples')}
                            >
                                <img src="couple-package.jpg" alt="Couples Package" />
                                <h4>Bali Tour Package for Couples - 5 Nights</h4>
                                <p className="price">C$520</p>
                            </div>
                            <div
                                className={`package-card ${selectedPackage === 'families' ? 'selected' : ''}`}
                                onClick={() => handlePackageClick('families')}
                            >
                                <img src="bali-family.webp" alt="Families Package" />
                                <h4>Bali Tour Package for Families - 7 Nights</h4>
                                <p className="price">C$730</p>
                            </div>
                            <div
                                className={`package-card ${selectedPackage === 'honeymoon' ? 'selected' : ''}`}
                                onClick={() => handlePackageClick('honeymoon')}
                            >
                                <img src="honeymoon.jpg" alt="Honeymoon Package" />
                                <h4>Bali Honeymoon Package - 7 Nights</h4>
                                <p className="price">C$1,030</p>
                            </div>
                        </div>
                        <button className="browse-more">Browse More Bali Packages →</button>
                    </div>
                    <div className="step">
                        <h3>Step 2: Select Your Travel Dates</h3>
                        <div className="date-picker">
                            <label> Check In: <input type="date" name="CheckIn" /> </label>
                            <label> Check Out: <input type="date" name="CheckOut" /> </label>
                        </div>
                    </div>
                    <div className="step">
                        <div className="personal-details">
                            <h3 className="center-title">Step 3: Enter Your Personal Details</h3>
                            <input type="text" placeholder="Full Name" />
                            <input type="email" placeholder="Email" />
                            <input type="tel" placeholder="Phone Number" />
                            <input type="text" placeholder="Address" />
                            <div className="payment-info">
                                <label className="payment-label">-- Payment --</label>
                                <div className="payment-inputs">
                                    <input type="text" placeholder="Card Number" />
                                    <input type="text" placeholder="Expiry Date" />
                                    <input type="text" placeholder="CVC" />
                                </div>
                                <button className="book-now" onClick={handleBookNow}>BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Accommodation;
