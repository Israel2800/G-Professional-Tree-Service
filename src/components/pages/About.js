import React from 'react';
// import GLogo from "../../assets/Logo.jpg";

// import tree from "../../assets/images/tree-trimming.jpg";
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import  { Button } from 'react-bootstrap';
import Testimonials from './Testimonials';
// import Services from "./Services";
// import { GiFruitTree } from "@react-icons/all-files/gi/GiFruitTree"
import { GiTreeBranch } from "@react-icons/all-files/gi/GiTreeBranch"
import { services } from '../../data';
import bgImg from "../../assets/gallery/port.png"
import { FaHardHat, FaShieldAlt, FaTools, FaComments } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function About({ handlePageChange }) {
    return(
      <section id="about" className='style'>
      
      {/* Section 1 */}
      <section
        className="flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.4)), url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: "no-repeat",
          height: '100vh',
        }}
      >
        <div className='p-8'>
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">MAKING YOUR VISION BECOME A REALITY</h1>
          <p className="text-white text-xl md:text-2xl mb-6">MORE THAN 10 YEARS OF EXPERIENCE</p>
          <Button
            className="my-2"
            variant="primary"
            size="lg"
            style={{
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '0px',
              padding: '10px 20px',
              color: '#1a237e',
              fontWeight: 'bold',
            }}
            href="#Services"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white md:p-10 py-6 px-4">
        <div className="flex flex-col items-center bg-white w-full">
          <GiTreeBranch className="w-12 h-full inline-block text-green-600" />
          <h5 className="text-green-600 text-center text-2xl font-serif mt-2">We will maintain your space clean and beautiful</h5>
        </div>
        <div className="flex flex-col md:flex-row pt-4 text-justify px-2">
          <div className="w-full md:w-1/2 pt-4 md:px-8">
            <h2 className="text-green-600 text-3xl font-serif text-center md:text-end">Our Mission</h2>
            <p className="text-green-800  font-serif py-4 md:text-end">
              Every tree that you own provides your property with beautiful scenery, shade, and curb appeal. Shouldn't you make sure such prominent and useful landscape features are well cared for? To provide your tree with top-notch care, enlist a reputable tree care company. In La Vergne, Brentwood, Smyrna & Mt. Juliet, TN, and surrounding areas, G Professional Tree Service is here to help. We'll give every tree the attentive services that it deserves.
            </p>
          </div>
          <div className="w-full md:w-1/2 pt-4 md:px-8">
            <h2 className="text-green-600 text-3xl font-serif text-center md:text-start">Our Values</h2>
            <p className="text-green-800  font-serif py-4">
              Values are important for our company because they guide our decisions and actions, ensuring that we deliver the best possible service to our clients.
            </p>
            <ul className="list-none">
              <li className="flex items-center mb-3">
                <FaShieldAlt className="w-6 h-6 mr-2 text-green-800" />
                <h4 className="m-0 text-black">Safety</h4>
              </li>
              <li className="flex items-center mb-3">
                <FaTools className="w-6 h-6 mr-2 text-green-800" />
                <h4 className="m-0 text-black">Quality</h4>
              </li>
              <li className="flex items-center">
                <FaComments className="w-6 h-6 mr-2 text-green-800" />
                <h4 className="m-0 text-black">Communication</h4>
              </li>
            </ul>
          </div>
        </div>
      </section>
        
      {/* Section 3 */}
      <section id='services' className="bg-gray-200 py-8 container flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-center text-black">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-center text-lg font-semibold mb-2 text-green-600">{service.title}</h3>
                    <a
                      href={service.buttonLink}
                      className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-full text-center block w-full"
                    >
                      {service.buttonText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
      </section>

      {/* Section 4 */}
      <div id="testimonials"className="">
        <Testimonials />
      </div>

      {/* Section 5 */}
      <div className="flex px-10 py-20 md:flex-row flex-col  bg-white justify-center">
        <p className="text-4xl text-center text-green-600">
          ARRANGE FOR EXCELLENT TREE SERVICE IN LA VERGNE, BRENTWOOD, SMYRNA, NASHVILLE & MT. JULIET, TN
        </p>
      </div>

      {/* Section 6 */}
      <section className="py-5 mx-auto">
        <h2 className="text-center mt-5 text-3xl font-bold">Why Choose Us</h2>
        <div className="flex flex-wrap justify-center items-center mt-6 mb-4 mx-6">
          <div className="w-full md:w-1/3 text-center mb-8">
            <div className="flex justify-center">
              <GiTreeBranch size={50} className="mb-4 text-white" />
            </div>
            <h4 className="text-xl font-bold">Experienced</h4>
            <p>We have more than 10 years of experience in the Industry.</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-8">
            <div className="flex justify-center">
              <GiTreeBranch size={50} className="mb-4 text-white" />
            </div>
            <h4 className="text-xl font-bold">Quality Work</h4>
            <p>We take pride in delivering high-quality workmanship.</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-8">
            <div className="flex justify-center">
              <FaShieldAlt size={50} className="mb-4 text-white" />
            </div>
            <h4 className="text-xl font-bold">Safe and Secure</h4>
            <p>We prioritize safety and security on every job site.</p>
          </div>
        </div>
      </section>

        
        {/* Section 7 */}
        <div className="flex px-10 pt-20 flex-row bg-white justify-center">
          {/* Change to image */}
          <GiTreeBranch className="w-12 h-full inline-block text-green-600"/> 
        </div>
        
        {/* Section 8 */}
        <div className="flex px-10 pt-8 pb-14 md:flex-row flex-col bg-white justify-center">
          <p className="px-4 text-4xl sm:w-1/2 sm:text-right text-center text-green-600">
            ARRANGE FOR EXCELLENT TREE SERVICE IN LA VERGNE, BRENTWOOD, SMYRNA & MT. JULIET, TN
          </p>
          <p className="px-4 sm:pt-0 pt-8 text-4xl sm:w-1/2 sm:text-left text-center text-green-600">
            The second part of the text!
          </p>
        </div>
       
      </section>
    );
    
}