// import Image from "next/image";
// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

import Image from "next/image";
import Link from "next/link";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Header />
        <div className="main" id="index">
            <div id="check" className="title">
                <h1>Website just for you ;&#41;</h1>
            </div>
            <div className="intro_box">
                <div id="main_piece">
                    <Image src="/img/img1.png" width={500} height={500} alt="img1"/>
                    <div className="space"></div>
                    <Image src="/img/img2.png" width={20} height={20} alt="img2"/>
                    <div className="space"></div>
                    <Image src="/img/img3.png" width={20} height={20} alt="img3"/>
                </div>
                <div id="intro_blurb">
                    <p>
                    Hello, I am an artist. I have a BA from AUM. I'm going to be a Medical Illustrator. More stuff about my art! wow!
                    I'm still parked out by the lake Eighty miles from Santa Fe And I'm sittin' here just parked out by the lake 
                    if you're wonderin' where I parked I'm out parked by the lake It's the lake that's eighty miles from Santa Fe 
                    And I'm parked out by the lake Eighty miles from Santa Fe It's the lake that's parked where I'm at out by the lake
                    </p>
                </div>
            </div>
            <div className="title" id="news">
                <h1>News</h1>
                <div className="news_box">
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                    news!news!news!news!news!news!news!news!<br/>
                </div>
            </div>
        </div>
        <div className="flex_box"/>
        <Footer />
      </div>
    </>
  )
}