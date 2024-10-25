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
            <div className="contact">
            <div id="contact_blurb">
                <span className="title"><h1>Contact Me!</h1></span>
                <h2>Follow me on <a className="link_blurb" href="https://www.instagram.com/greatzayahman" target="_blank">Instagram</a> 
                    and <a className="link_blurb" href="https://twitter.com/greatzayahman" target="_blank">Twitter</a></h2>
                <h2>Check out my <a className="link_blurb" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Portfolio</a></h2>
                <h2>Charcoal, Watercolor, Doodles, Digital, and more</h2>
                <h2>Contact me for details and prices</h2>
            </div>

            <form id="contact-form" className ="form_container" method="post"> { /*<!-- novalidate turns off default error messages --> */}
                <div className="name">
                    <label htmlFor="name"> Name: </label>
                    <input type="text" id="name" placeholder="Your First and Last Name" required/>
                </div>

                <div className="email">
                    <label htmlFor="email"> Email: </label>
                    <input type="email" id="email" placeholder="Your Email" required/>
                </div>
                
                <div className="message">
                    <label htmlFor="message"> Message: </label>
                    <textarea id="message" rows={10} placeholder="Your Message" required></textarea>
                </div>

                <button id="contect_button" type="submit">Submit</button>
            </form>
            </div>
            <div className="flex_box"></div>
            <Footer />
        </>
    );
};