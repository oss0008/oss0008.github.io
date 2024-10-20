import React from 'react';
import Image from "next/image";
import Link from "next/link";
import EmailLogo from '../img/EmailLogo.png';
import InstaLogo from '../img/InstaLogo.png';
import TwitterLogo from '../img/TwitterLogo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div id="copyright">
                <h2>copyright????</h2>
            </div>
            <div id="contact_links">
                <a href="https://www.instagram.com/greatzayahman" target="_blank" rel="noreferrer"><Image src="/img/instaLogo.png" width={20} height={20} alt="logo"/></a>
                <a href="https://twitter.com/greatzayahman" target="_blank" rel="noreferrer"><Image src="/img/TwitterLogo.png" width={20} height={20} alt="logo"/></a>
                <a href="mailto:thvrston@gmail.com" target="_blank" rel="noreferrer"><Image src="/img/EmailLogo.png" width={20} height={20} alt="logo"/></a>
            </div>
        </div>
    );
};

export default Footer;