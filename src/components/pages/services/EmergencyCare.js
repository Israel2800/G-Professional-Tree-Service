import React from "react";
import emergencyCare from "../../../assets/images/tree-trimming.jpg";
// import contactButton from "../images/contact-button.png";
import treeTrimming2 from "../../../assets/images/tree-trimming3.jpg";
import { Link } from "react-router-dom";

const EmergencyCare = () => {
    return (
        <main id="EmergencyCare">
            <section id='services' class="w-full rounded-lg shadow-2xl overflow-hidden relative py-12">
                <img class="absolute inset-0 h-full w-full object-cover" src={emergencyCare} alt="Stump Removal Bg" />
                <div class="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
                    <div class="my-8 flex flex-col h-full items-center justify-center relative">
                        <h2 className="text-3xl font-bold text-center text-white">
                            EMERGENCY CARE
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
                <div className="md:w-1/2">
                    <img
                        src={emergencyCare}
                        alt="Stump"
                        className="w-full rounded-lg shadow-lg p-4"
                    />
                </div>
                <div className="md:w-1/2 p-8">
                <h2 className="text-2xl text-green-700 font-bold mb-4 md:text-justify text-center">WE ARE AVAILABLE 24/7 FOR ANY EMERGENCY SERVICES</h2>
                <p className="text-black text-justify">
                    When disaster strikes, our tree service company is 
                    here to provide exceptional emergency tree care. Our 
                    highly skilled team is available around the clock to 
                    address urgent tree-related situations with precision 
                    and expertise. Whether it's storm damage, fallen trees, 
                    or hazardous limbs endangering your property, we respond 
                    promptly to ensure your safety and peace of mind. With our 
                    excellent emergency tree care service, you can trust us to 
                    swiftly mitigate risks, restore order, and protect your 
                    valuable assets. Count on us during times of crisis, and 
                    we'll deliver the professional care your trees deserve.
                </p>
                </div>
                
            </section>
        </main>
  );
};

export default EmergencyCare;
