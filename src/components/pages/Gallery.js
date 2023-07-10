import React from 'react';
import GallerySection from './services/GallerySection';
import { Link } from "react-router-dom";
import stumpRemovalImage from "../../assets/gallery/port.png";

export default function Gallery() {
  return (
    <main>
      <section id='services' class="w-full rounded-lg shadow-2xl overflow-hidden relative py-12">
        <img class="absolute inset-0 h-full w-full object-cover" src={stumpRemovalImage} alt="Stump Removal Bg" />
        <div class="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
            <div class="my-8 flex flex-col h-full items-center justify-center relative">
                <h2 className="text-3xl font-bold text-center text-white">
                    Our Services
                </h2>
                <h2 className="text-1xl text-justify md:text-center text-white p-4 mx-12">At our company, we are dedicated to delivering unmatched services that exemplify excellence in quality, reliability, durability, and exceptional value. We take pride in setting the industry standard and ensuring our customers receive the utmost value for their investment.</h2>
                <Link to={'Contact'}>
                    <button
                        alt="Contact Button"
                        className="my-2 rounded-lg"
                        variant="primary"
                        size="lg"
                        style={{
                            backgroundColor: '#fff',
                            border: 'none',
                            borderRadius: '0px',
                            padding: '10px 20px',
                            color: '#17803d',
                            fontWeight: 'bold',
                        }}
                    >
                        CONTACT US
                    </button>
                </Link>
            </div>
      </section>
      <section id="GallerySection" className="bg-white">
        <GallerySection />
      </section>
    </main>
  );
}
