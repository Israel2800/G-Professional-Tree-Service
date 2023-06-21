import React from 'react';


export default function About({ handlePageChange }) {
    return(
        <section>
            <div className="mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-mainImage bg-cover bg-fixed bg-center bg-no-repeat bg-opacity-75 hover:opacity-100">
                <img className=""/>
                <div className="lg:flex-grow flex flex-col mb-16 md:mb-0 items-center text-center ">
                    <img
                    className="object-cover object-center rounded-lg mb-8 leading-relaxed text-justify"
                    alt="hero"
                    src={GLogo}
                    style={{width:"200px", height:"200px"}}
                    />
                    <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white">
                    <p className="lg:inline-block">
                        YOUR TREES DESERVE A PROFESSIONAL CARE
                    </p>
                    </h1>
                    <p className="mb-8 leading-relaxed text-justify">
                    G Professional Tree Service provides reliable tree care services in La Vergne, Brentwood, Smyrna, Nashville & 
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
          

        </div>
        </section>
    )
}