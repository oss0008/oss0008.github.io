import React from 'react';
import './navbar.css';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';

const Navbar = () => {
    return (
<div className="navbar">
            <div id="logo">
                <a href="index.html">
                    <img src="logo3.png" alt="logo"/>
                </a>
            </div>
            <div id="links">
                <a href="index.html">Home</a>
                <a href="Gallery.tsx">Gallery</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </div>
        </div>
    );
};
export default Navbar;