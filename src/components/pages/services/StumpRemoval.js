import React from "react";
import stumpRemovalImage from "../../../assets/images/stump-removal.jpg";
// import contactButton from "../images/contact-button.png";

const StumpRemoval = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col items-center">
        <div className="max-w-2xl mx-auto">
          <img
            src={stumpRemovalImage}
            alt="Stump Removal"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-white shadow-lg mt-8 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Stump Removal Service</h2>
          <p className="text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            augue ut nulla rutrum aliquet.
          </p>
          <button
            className="my-2"
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
            href="#Services"
          >
            Learn More
          </button>
        </div>
        <div className="mt-12">
          <img
            src={stumpRemovalImage}
            alt="Stump Removal"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default StumpRemoval;
