import React from 'react';
import image from '../assets/mountains.jpg';

export default function Home() {
    return (
        <main>
            <img src={image} alt="Background image of mountains" className="absolute object-cover object-cover"/>
            <section className="relative flex justify-center min-h-screen">
                <h1 className="text-4xl text-gray-200 leading-none lg:leading-snug self-center">Test blog home page. Made with React and &lt;3</h1>
            </section>
        </main>
    );
}
