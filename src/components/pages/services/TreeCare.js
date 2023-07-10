import React from "react";
import treeCare from "../../../assets/images/tree-care.jpg";
// import contactButton from "../images/contact-button.png";
// import treeCare2 from "../../../assets/images/stump-removal.jpg";
import { Link } from "react-router-dom";

const TreeCare = () => {
    return (
        <main id="TreeCare">
            <section id='services' class="w-full rounded-lg shadow-2xl overflow-hidden relative py-12">
                <img class="absolute inset-0 h-full w-full object-cover" src={treeCare} alt="Stump Removal Bg" />
                <div class="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
                    <div class="my-8 flex flex-col h-full items-center justify-center relative">
                        <h2 className="text-3xl font-bold text-center text-white">
                            WE WILL MAKE YOUR PROPERTY LOOK AS YOU IMAGINE
                        </h2>
                        <h2 className="text-1xl text-justify md:text-center text-white p-4 md:mx-12">At our company, we are dedicated to delivering unmatched services that exemplify excellence in quality, reliability, durability, and exceptional value. We take pride in setting the industry standard and ensuring our customers receive the utmost value for their investment.</h2>
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
                <div className="md:w-full p-8 ">
                <h2 className="text-2xl text-green-700 font-bold mb-4 md:text-justify text-center">QUALITY TREE CARE FOR YOUR TREES</h2>
                <p className="text-black text-justify"> 
                    Discover the art of exceptional tree care with our esteemed 
                    tree service company. Our team of dedicated professionals is 
                    committed to providing meticulous attention and superior care 
                    to your trees. From pruning and trimming to disease diagnosis 
                    and treatment, we prioritize the health, beauty, and longevity 
                    of your trees. Trust us to exceed your expectations with our 
                    excellent tree care service, ensuring your trees thrive for 
                    generations to come.
                </p>
                </div>
                <div className="md:flex md:flex-row justify-center items-center">
                <img
                    src={treeCare}
                    alt="Stump"
                    className="w-full rounded-lg shadow-lg p-4 md:w-1/2 "
                />
                </div>
            </section>
        </main>
  );
};

export default TreeCare;
