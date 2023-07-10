import React from "react";
import stumpRemovalImage from "../../../assets/images/stump-removal.jpg";
// import contactButton from "../images/contact-button.png";
import stumpImage from "../../../assets/images/stump-removal.jpg";
import { Link } from "react-router-dom";

const StumpRemoval = () => {
    return (
        <main id="StumpRemoval">
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

            <section className="bg-gray-100 py-12 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-8">
                <h2 className="text-2xl text-green-700 font-bold mb-4 md:text-justify text-center">GREAT STUMP REMOVAL SERVICE</h2>
                <p className="text-black text-justify">
                    We offer professional stump removal services to help you get rid of
                    unwanted tree stumps. Our experienced team uses advanced techniques
                    and equipment to ensure efficient and safe stump removal. Whether
                    you have a single stump or multiple stumps, we provide reliable and
                    affordable solutions to meet your needs.
                </p>
                </div>
                <div className="md:w-1/2">
                <img
                    src={stumpImage}
                    alt="Stump"
                    className="w-full rounded-lg shadow-lg p-4"
                />
                </div>
            </section>
        </main>
  );
};

export default StumpRemoval;
