import React from 'react';
import './Dining.css';

const Dining = () => {
    return (
        <div className="dining-page">
            <header className="dining-header">
                <img src={process.env.PUBLIC_URL + '/dining.jpg'}alt="Dining" className="dining-image" />
                <h1 className="dining-title">Dining</h1>
            </header>
            <section className="dining-intro">
                <h2>Discover Bali Through Food</h2>
                <div className="filters">
                    <div className="filter">
                        <label htmlFor="meal">Meal</label>
                        <select id="meal" name="meal">
                            <option value="">Choose a Meal</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                        </select>
                    </div>
                    <div className="filter">
                        <label htmlFor="cuisine">Cuisine</label>
                        <select id="cuisine" name="cuisine">
                            <option value="">Choose a Cuisine</option>
                            <option value="balinese">Balinese</option>
                            <option value="western">Italian</option>
                            <option value="asian">Asian</option>
                            <option value="asian">Mexican</option>
                            <option value="asian">Indian</option>
                            <option value="asian">Middle Eastern</option>
                        </select>
                    </div>
                    <div className="filter">
                        <label htmlFor="price-range">Price Range</label>
                        <select id="price-range" name="price-range">
                            <option value="">Select a Price Range</option>
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                        </select>
                    </div>
                    <div className="filter">
                        <label htmlFor="price-range">Rating</label>
                        <select id="price-range" name="price-range">
                            <option value="">Select a Rating</option>
                            <option value="5star">5 Star</option>
                            <option value="4star">4 Star</option>
                            <option value="3star">3 Star</option>
                            <option value="2star">2 Star</option>
                            <option value="1star">1 Star</option>
                        </select>
                    </div>
                </div>
            </section>
            <section className="dining-options">
                <h2>Explore Your Dining Options</h2>
                <h3>Results</h3>
                <div className="restaurant-cards">
                    <div className="restaurant-card">
                        <img src={process.env.PUBLIC_URL + '/restaurant1.jpg'} alt="Restaurant 1" />
                        <h4>Sorrento Restaurant</h4>
                    </div>
                    <div className="restaurant-card">
                        <img src={process.env.PUBLIC_URL + '/restaurant2.jpg'} alt="Restaurant 2" />
                        <h4>Limestones Eatery & Restaurant</h4>
                    </div>
                    <div className="restaurant-card">
                        <img src={process.env.PUBLIC_URL + '/restaurant3.jpg'} alt="Restaurant 3" />
                        <h4>Arcadia Restaurant</h4>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dining;
