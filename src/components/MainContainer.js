import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from './pages/About';
// import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
// import Footer from "./pages/Footer";
// import StumpRemoval from "./pages/services/StumpRemoval";
// import TreeCare from "./pages/services/TreeCare";
// import TreeRemoval from "./pages/services/TreeRemoval";
// import Trimming from "./pages/services/Trimming";
// import Services from "pages/Services";

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        // if (currentPage ==='Contact') {
        //     return <Contact />;
        // }
        // if (currentPage === 'StumpRemoval') {
        //     return <StumpRemoval />;
        // }
        // if (currentPage === 'TreeCare') {
        //     return <TreeCare />;
        // }
        // if (currentPage === 'TreeRemoval') {
        //     return <TreeRemoval />;
        // }
        // if (currentPage === 'Trimming') {
        //     return <Trimming />;
        // }
    };
    
    // Will display de current page, still need to make the renderPage return
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main className="text-indigo-100 bg-zinc-800 w-full">
            <Router>
                <div>
                    {/* We are passing the currentPage from state and the function to update it */}
                    <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
                    {/* <About currentPage={currentPage} handlePageChange={handlePageChange} /> */}

                    {/* Here we are calling the renderPage method which will return a component  */}
                    {renderPage()}
                    
                    {/* <Footer /> */}
                </div>
            </Router>
        </main>

    );
}