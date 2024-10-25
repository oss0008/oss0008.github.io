import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Header = () => {
    return (
    <>
        <div className="navbar">
            <div id="logo">
                <a href="../App.tsx">
                    <img src="/img/logo3.png" width={20} height={20} alt="logo"/>
                </a>
            </div>
            <div id="links">
                    <Link href="/">Home</Link>
                    <Link href="./gallery">Gallery</Link>
                    <Link href="./about">About</Link>
                    <Link href="./contact">Contact</Link>
            </div>
        </div>
    </>
    );
};
export default Header;