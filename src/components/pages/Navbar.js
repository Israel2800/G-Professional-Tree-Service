import React from 'react';
import HLogo from '../../assets/HLogo.png';
import { BiChevronDown } from "react-icons/bi"; 

export default function Navbar({ handlePageChange }) {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <nav className="container mx-auto flex flex-wrap p-5 pt-12 m- md:flex-row items-center justify-center">                
                <a 
                    href="#about" className=" hover:text-white inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                    onClick={() => handlePageChange('About')}>
                    Services
                    <BiChevronDown size ={20}/>
                     <ul className="bg-white mt-2">
                        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">
                            Sample
                        </li>
                        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">
                            Sample
                        </li>
                        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">
                            Sample
                        </li>
                        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">
                            Sample
                        </li>
                    </ul> 
                </a>

                {/* Services */}
                <a 
                    href="#TreeRemoval" className=" hover:text-white inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                    
                    onClick={() => handlePageChange('TreeRemoval')}>
                    Tree Removal
                </a>
                <a 
                    href="#StumpRemoval" className=" hover:text-white inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                    
                    onClick={() => handlePageChange('StumpRemoval')}>
                    Stump Removal
                </a>
                <a 
                    href="#TreeTrimming" className=" hover:text-white inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                    
                    onClick={() => handlePageChange('TreeTrimming')}>
                    Tree Trimming
                </a>
                <a 
                    href="#TreeCare" className=" hover:text-white inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                    
                    onClick={() => handlePageChange('TreeCare')}>
                    Tree Care
                </a>
                <a
                    href="#TreeCare" className=" hover:text-white inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                    
                    onClick={() => handlePageChange('TreeCare')}>
                    Emergency Care
                </a>
                <a
                    href="#Contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                    onClick={() => handlePageChange('Contact')}>
                    Contact Us!
                    {/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}
                </a>
            </nav>
        </header>
    );
}