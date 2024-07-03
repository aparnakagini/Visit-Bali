import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Subscription from './components/Subscription';
import Packages from './components/Packages';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <About />
            <Subscription />
            <Packages />
            <Footer />
        </div>
    );
}

export default App;
