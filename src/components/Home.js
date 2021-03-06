import React from "react";
import image from "../Website-Home-Background.jpg";

export default function Home() {
    return (
    <main>
        <img 
        src={image} 
        alt="Home Background" 
        className="absolute object-cover w-full h-full"
        />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">
                    Hello, I'm Saqueb Khan.
                    Please E-mail me at: khansaqueb@gmail.com
                </h1>
            </section>
        </main>
    );
}