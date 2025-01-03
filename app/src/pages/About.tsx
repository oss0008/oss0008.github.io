import React from 'react';
import Image from "next/image";
import Link from "next/link";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <div className="about">
                <span className="title"><h1>About</h1></span>
                <div id="about_blurb">
                    <Image src="/img/portrait.jpeg" 
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-full h-auto"
                            alt="self-protrait" priority/>
                    <div id="space"/>
                    <p id="blurb">
                        I'm still parked out by the lake Eighty miles from Santa Fe
                        And I'm sittin' here just parked out by the lake If you're wonderin' where I parked
                        I'm out parked by the lake It's the lake that's eighty miles from Santa Fe
                        And I'm parked out by the lake Eighty miles from Santa Fe
                        It's the lake that's parked where I'm at out by the lake And this lake is where I'm parked
                        Eighty miles from Santa Fe And I'm still parked out here by this lake
                        Eighty miles from Santa Fe Do you remember that old lake
                        The one by Santa Fe That's where I'm at I'm sitting out here parked
                        And I'm parked here by the lake
                        Eighty miles from Santa Fe And it's the lake that you remember where I park
                        And I'm parked out by the lake Eighty miles from Santa Fe
                        It's the lake that's parked where I'm at out by the lake And this lake is where I'm parked
                        Eighty miles from Santa Fe And I'm still parked out here by this lake
                        Eighty miles from Santa Fe And someday I'm gonna move But right now I'm parked
                        And you know that lake out by Santa Fe, that's where I'm at, I'm parked
                        Waitin' for you And you know that I'm parked out by the lake
                        You remember that lake out by Santa Fe And I'm gonna sit here parked
                        Out by this lake Out by this lake By the lake at Santa Fe
                        I'm sittin' out here parked It's where I told you how I felt
                        By the lake in Santa Fe
                    </p>
                </div>
            </div>
            <div className="flex_box"></div>
            <Footer />
        </>
    );
};