import React, { useState } from 'react';
import './BookingDetails.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Timer from './Timer'; // Make sure to import your Timer component

const BookingDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // State for form fields and errors
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
    });
    const [errors, setErrors] = useState({});

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Validate form fields
    const validate = () => {
        let tempErrors = {};
        tempErrors.fullName = /^[a-zA-Z\s]+$/.test(form.fullName) ? '' : 'Le nom ne doit contenir que des lettres';
        tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'L\'email n\'est pas valide';
        tempErrors.phoneNumber = form.phoneNumber.length >= 10 ? '' : 'Le numéro de téléphone n\'est pas valide';
        tempErrors.cardNumber = form.cardNumber.length === 16 ? '' : 'Le numéro de carte n\'est pas valide';
        tempErrors.expiryDate = /^\d{2}\/\d{2}$/.test(form.expiryDate) ? '' : 'La date d\'expiration n\'est pas valide';
        tempErrors.cvc = form.cvc.length === 3 ? '' : 'Le CVC n\'est pas valide';
        setErrors(tempErrors);

        return Object.values(tempErrors).every(x => x === '');
    };

    const handleConfirmBooking = () => {
        if (validate()) {
            navigate('/confirmation');
        }
    };

    return (
        <div className="booking-details">
            <Timer initialMinutes={15} initialSeconds={0} /> {/* Add the Timer component here */}
            <h2>Étape 4 : Entrez vos informations personnelles et de paiement</h2>
            <div className="step">
                <div className="personal-details">
                    <input 
                        type="text" 
                        name="fullName" 
                        placeholder="Nom complet" 
                        value={form.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && <span className="error">{errors.fullName}</span>}
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                    <input 
                        type="tel" 
                        name="phoneNumber" 
                        placeholder="Numéro de téléphone" 
                        value={form.phoneNumber}
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                    <input 
                        type="text" 
                        name="address" 
                        placeholder="Adresse" 
                        value={form.address}
                        onChange={handleChange}
                    />
                    <div className="payment-info">
                        <label className="payment-label">-- Paiement --</label>
                        <div className="payment-inputs">
                            <input 
                                type="text" 
                                name="cardNumber" 
                                placeholder="Numéro de carte" 
                                value={form.cardNumber}
                                onChange={handleChange}
                            />
                            {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
                            <input 
                                type="text" 
                                name="expiryDate" 
                                placeholder="Date d'expiration (MM/AA)" 
                                value={form.expiryDate}
                                onChange={handleChange}
                            />
                            {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
                            <input 
                                type="text" 
                                name="cvc" 
                                placeholder="CVC" 
                                value={form.cvc}
                                onChange={handleChange}
                            />
                            {errors.cvc && <span className="error">{errors.cvc}</span>}
                        </div>
                    </div>
                </div>
            </div>
            <button className="confirm-booking" onClick={handleConfirmBooking}>Confirmer la réservation</button>
        </div>
    );
}

export default BookingDetails;
