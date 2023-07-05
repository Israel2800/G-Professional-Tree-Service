import React from 'react';
import GLogo from "../../assets/Logo.jpg";

import tree from "../../assets/images/tree-trimming.jpg";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import Testimonials from './Testimonials';
// import Services from "./Services";
import { GiFruitTree } from "@react-icons/all-files/gi/GiFruitTree"
import { GiTreeBranch } from "@react-icons/all-files/gi/GiTreeBranch"
import { services } from '../../data';
import bgImg from "../../assets/gallery/port.png"
import { FaHardHat, FaShieldAlt, FaTools, FaComments } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function About({ handlePageChange }) {
    return(
      <section id="about" className='style'>
        {/* <div
          className="mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-mainImage bg-cover bg-fixed bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImg})`, opacity: 0.5 }}
        >
          <div className="lg:flex-grow flex flex-col mb-16 md:mb-0 items-center text-center ">
           
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white">
              <p className="lg:inline-block">
                YOUR TREES DESERVE A PROFESSIONAL CARE
              </p>
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              G Professional Tree Service provides reliable tree care services in La Vergne, Brentwood, Smyrna & 
              Mt. Juliet, TN
            </p>

            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg"
                onClick={() => handlePageChange('Contact')}>
                Contact Me
              </a>
      
            </div>
          </div>
          

        </div> */}

      {/* <div
        className="mx-auto flex px-10 py-20 md:py-0 sm:flex-row flex-col items-center bg-mainImage bg-cover bg-fixed bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${bgImg})`, opacity: 0.8 }}
      >
        <div className="lg:flex-grow flex flex-col mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white">
            <p className="lg:inline-block">
              YOUR TREES DESERVE A PROFESSIONAL CARE
            </p>
          </h1>
          <p className="mb-8 leading-relaxed text-justify text-white">
            G Professional Tree Service provides reliable tree care services in La Vergne, Brentwood, Smyrna & 
            Mt. Juliet, TN
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              onClick={() => handlePageChange('Contact')}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>       */}
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



        
    {/* Second section */}

    <section id="About" className="bg-white md:p-10 py-6 px-4">
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
        
        {/* Third section */}
        {/* <div className="px-0 py-0 grid md:grid-cols-2 bg-slate-600 ">          
          <div className="items-center text-justify mx-0 my-0 relative w-full h-full">
            <a
              className="absolute w-full h-full bg-treeRemoval bg-cover bg-no-repeat opacity-60"
            />
            <p className='relative text-white text-3xl font-serif text-center px-12 pt-14 '>
              TREE REMOVAL
            </p> 
            <p className='relative text-white text-xl font-serif px-12 mt-6 pb-14'>
              Our tree removal services are unmatched in quality and expertise. We excel at safely and efficiently removing trees, ensuring no damage to your property. Trust us for the best tree removal solutions that enhance the safety and beauty of your surroundings.            
            </p>
          </div>
          <div className="items-center text-justify mx-0 my-0 relative w-full h-full">
            <a
              className="absolute w-full h-full bg-treeTrimming bg-cover bg-no-repeat opacity-60"
            />
            <p className='relative text-white text-3xl font-serif text-center px-12 pt-14 '>
              TREE TRIMMING
            </p> 
            <p className='relative text-white text-xl font-serif px-12 mt-6 pb-14'>
              Experience exceptional tree trimming services from our expert team. We skillfully trim and shape trees, promoting their health and aesthetic appeal. With our top-notch equipment and expertise, we deliver the best tree trimming solutions to enhance the beauty and vitality of your trees.
            </p>
          </div>
          <div className="items-center text-justify mx-0 my-0 relative w-full h-full">
            <a
              className="absolute w-full h-full bg-stumpRemoval bg-cover bg-no-repeat opacity-60"
            />
            <p className='relative text-white text-3xl font-serif text-center px-12 pt-14 '>
              STUMP REMOVAL
            </p> 
            <p className='relative text-white text-xl font-serif px-12 mt-6 pb-14'>
              Say goodbye to unsightly tree stumps with our premier stump removal services. Our skilled team utilizes advanced techniques and equipment to safely and efficiently eliminate stumps, restoring the beauty and functionality of your outdoor space. Experience the best stump removal solutions with us.
            </p>
          </div>
          <div className="items-center text-justify mx-0 my-0 relative w-full h-full">
            <a
              className="absolute w-full h-full bg-treeCare bg-cover bg-no-repeat opacity-60"
            />
            <p className='relative text-white text-3xl font-serif text-center px-12 pt-14 '>
              TREE CARE
            </p> 
            <p className='relative text-white text-xl font-serif px-12 mt-6 pb-14'>
              Nurture the health and vitality of your trees with our comprehensive tree care services. Our expert arborists provide tailored solutions including pruning, fertilization, and disease management, ensuring your trees thrive for years to come. Trust the best in tree care.
            </p>
          </div>
        </div> */}


<section id='services' className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <a
                  href={service.buttonLink}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-center block w-full"
                >
                  {service.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        
        {/* Fourth Section */}
        <div id="testimonials"className="">
          <Testimonials />
        </div>

        {/* Fifth Section */}
        <div className="flex px-10 py-20 md:flex-row flex-col  bg-white justify-center">
          <p className="text-4xl text-center text-green-600">
            ARRANGE FOR EXCELLENT TREE SERVICE IN LA VERGNE, BRENTWOOD, SMYRNA & MT. JULIET, TN
          </p>
        </div>

        {/* Sixth Section */}
        {/* <div className="flex px-10 py-20 flex-wrap bg-emerald-700 justify-center w-full bg-section6 bg-cover bg-fixed bg-center bg-no-repeat opacity-70 hover:opacity-80">
          <div className=' my-2'>
            <p className="text-6xl text-center mb-5">
              What do we offer to you?
            </p>
            <p className="text-2xl text-justify">
              We'll tend to your trees in several ways. We offer a variety of tree care services, including:
            </p>
          </div>
          <div className="px-10 py-20 flex flex-wrap sm:justify-around w-full">
              <div className="h-12 items-center text-center mx-5 my-5 bg-cover bg-center px-5">
                <p className="text-3xl ">
                  01
                </p>
                <p className="text-2xl">
                  Box 1
                </p>
              </div>
              <div className="h-12 items-center text-center mx-5 my-5 bg-cover bg-center px-5">
                <p className="text-3xl ">
                  02
                </p>
                <p className="text-2xl ">
                  Box 2
                </p>
              </div>
              <div className="h-12 items-center text-center mx-5 my-5 bg-cover bg-center px-5">
                <p className="text-3xl ">
                  03
                </p>
                <p className="text-2xl ">
                  Box 3
                </p>
              </div>
          </div>
        </div> */}

        {/* TEST SECTION */}
        <div className="container py-5 mx-auto">
        <h2 className="text-center mt-5 text-3xl font-bold">Why Choose Us</h2>
        <div className="flex flex-wrap justify-center mt-5 mb-4">
          <div className="w-full md:w-1/3 text-center mb-4">
            <FaHardHat size={50} className="mb-4 text-white" />
            <h4 className="text-xl font-bold">Experienced</h4>
            <p>Our team has years of experience in the construction industry.</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4">
            <FaTools size={50} className="mb-4 text-white" />
            <h4 className="text-xl font-bold">Quality Work</h4>
            <p>We take pride in delivering high-quality workmanship.</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4">
            <FaShieldAlt size={50} className="mb-4 text-white" />
            <h4 className="text-xl font-bold">Safe and Secure</h4>
            <p>We prioritize safety and security on every job site.</p>
          </div>
        </div>
      </div>

        
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