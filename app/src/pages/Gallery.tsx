import React from 'react';
import type { AppProps } from "next/app";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="main" id="gallery">       
            <span className="title"/><h1>Gallery</h1>
            <a href="https://www.instagram.com/greatzayahman">
                <Image src="/img/gallery.png" width={500} height={500} alt="gallery" priority/>
            </a>
        </div> 
    );
};
