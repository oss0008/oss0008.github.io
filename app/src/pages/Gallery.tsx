import React from 'react';
import type { AppProps } from "next/app";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <div className="gallery">       
                <span className="title"><h1>Gallery</h1></span>
                <a href="https://www.instagram.com/greatzayahman">
                    <Image  className="img"
                        src="/img/gallery.png" 
                        width="0"
                        height="0"
                        sizes="100vw"
                        alt="gallery" priority/>
                </a>
            </div> 
            <div className="flex_box"></div>
            <Footer />
        </>
    );
};
