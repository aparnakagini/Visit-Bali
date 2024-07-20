import React, { useState, useEffect } from 'react';
import './Accommodation.css';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';

const Accommodation = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [startTimer, setStartTimer] = useState(false);
    const [numTravelers, setNumTravelers] = useState(1); // State for number of travelers

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

    const scrollLeft = () => {
        document.getElementById('package-scroll').scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        document.getElementById('package-scroll').scrollBy({ left: 300, behavior: 'smooth' });
    };

    const handleIncrement = () => {
        setNumTravelers(prev => Math.min(prev + 1, 10)); // Maximum 10 travelers
    };

    const handleDecrement = () => {
        setNumTravelers(prev => Math.max(prev - 1, 1)); // Minimum 1 traveler
    };

    return (
        <div>
            <div className="accommodation">
                <header className="accommodation-header">
                    <img src={process.env.PUBLIC_URL + '/accommodation.jpg'} alt="Travel Packages" className="header-image" />
                    <h1>Travel Packages</h1>
                </header>
                <section className="package-booking">
                    <h2>Book Your Perfect Vacation Package in Bali</h2>
                    <div className="step">
                        <h3>Step 1: Select Your Travel Dates</h3>
                        <div className="date-picker">
                            <label> Check In: <input type="date" name="CheckIn" /> </label>
                            <label> Check Out: <input type="date" name="CheckOut" /> </label>
                        </div>
                    </div>
                    <div className="step">
                        <h3>Step 2: Select Number of Travellers</h3>
                        <div className="num-travelers">
                            <button onClick={handleDecrement}>-</button>
                            <span>{numTravelers}</span>
                            <button onClick={handleIncrement}>+</button>
                        </div>
                    </div>
                    <div className="step">
                        <h3>Step 3: Select Your Travel Package</h3>
                        <p><strong>What’s Included:</strong> Accommodation, Sightseeing, Meals</p>
                        {startTimer && <Timer initialMinutes={15} initialSeconds={0} />}
                        <div className="package-cards-container">
                            <button className="scroll-btn left" onClick={scrollLeft}>{"<"}</button>
                            <div id="package-scroll" className="package-cards">
                                <div
                                    className={`package-card ${selectedPackage === 'couples' ? 'selected' : ''}`}
                                    onClick={() => handlePackageClick('couples')}
                                >
                                    <img src={process.env.PUBLIC_URL + '/couple-package.jpg'} alt="Couples Package" />
                                    <h4>Bali Tour Package for Couples - 5 Nights</h4>
                                    <p className="price">C$520</p>
                                </div>
                                <div
                                    className={`package-card ${selectedPackage === 'families' ? 'selected' : ''}`}
                                    onClick={() => handlePackageClick('families')}
                                >
                                    <img src={process.env.PUBLIC_URL + '/bali-family.webp'} alt="Families Package" />
                                    <h4>Bali Tour Package for Families - 7 Nights</h4>
                                    <p className="price">C$730</p>
                                </div>
                                <div
                                    className={`package-card ${selectedPackage === 'honeymoon' ? 'selected' : ''}`}
                                    onClick={() => handlePackageClick('honeymoon')}
                                >
                                    <img src={process.env.PUBLIC_URL + '/honeymoon.jpg'} alt="Honeymoon Package" />
                                    <h4>Bali Honeymoon Package - 7 Nights</h4>
                                    <p className="price">C$1,030</p>
                                </div>
                                <div
                                    className={`package-card ${selectedPackage === 'adventure' ? 'selected' : ''}`}
                                    onClick={() => handlePackageClick('adventure')}
                                >
                                    <img src={process.env.PUBLIC_URL + '/adventure.jpg'} alt="Adventure Package" />
                                    <h4>Bali Adventure Package - 5 Nights</h4>
                                    <p className="price">C$850</p>
                                </div>
                                <div
                                    className={`package-card ${selectedPackage === 'luxury' ? 'selected' : ''}`}
                                    onClick={() => handlePackageClick('luxury')}
                                >
                                    <img src={process.env.PUBLIC_URL + '/luxury.jpg'} alt="Luxury Package" />
                                    <h4>Bali Luxury Package - 7 Nights</h4>
                                    <p className="price">C$1,500</p>
                                </div>
                                <div
                                    className={`package-card ${selectedPackage === 'spa' ? 'selected' : ''}`}
                                    onClick={() => handlePackageClick('spa')}
                                >
                                    <img src={process.env.PUBLIC_URL + '/spa.jpg'} alt="Spa Package" />
                                    <h4>Bali Spa Package - 5 Nights</h4>
                                    <p className="price">C$700</p>
                                </div>
                            </div>
                            <button className="scroll-btn right" onClick={scrollRight}>{">"}</button>
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
