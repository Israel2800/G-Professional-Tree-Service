import React from "react";
import stumpRemovalImage from "../../../assets/images/stump-removal.jpg";
// import contactButton from "../images/contact-button.png";
import stumpImage from "../../../assets/images/stump-removal.jpg";
import { Link } from "react-router-dom";

const StumpRemoval = () => {
    return (
        <section id="StumpRemoval">
            <div className="relative">
                <img
                src={stumpRemovalImage}
                alt="Stump Removal"
                className="w-full h-96"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Link to={'Contact'}>
                    <button
                        alt="Contact Button"
                        className="cursor-pointer"
                        style={{ width: "200px" }}
                    >
                        Contact
                    </button>
                </Link>
                </div>
            </div>
            <section className="bg-gray-100 py-12 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-8">
                <h2 className="text-2xl text-green-700 font-bold mb-4">Great Stump Removal Service</h2>
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
        </section>
  );
};

export default StumpRemoval;
