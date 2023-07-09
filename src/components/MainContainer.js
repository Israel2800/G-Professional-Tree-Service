// import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import About from './pages/About';
// import Contact from "./pages/Contact";
// import Navbar from "./pages/Navbar";
// import Footer from "./pages/Footer";
// import StumpRemoval from "./pages/services/StumpRemoval";
// import TreeCare from "./pages/services/TreeCare";
// import TreeRemoval from "./pages/services/TreeRemoval";
// import Trimming from "./pages/services/Trimming";
// import Services from "pages/Services";

// export default function MainContainer() {
//     const [currentPage, setCurrentPage] = useState('About');

//     const renderPage = () => {
//         if (currentPage === 'About') {
//             return <About handlePageChange={handlePageChange} />;
//             return <About />;


//             return <About />
//         }
//         if (currentPage ==='Contact') {
//             return <Contact />;
//         }
//         if (currentPage === 'StumpRemoval') {
//             return <StumpRemoval />;
//         }
//         if (currentPage === 'TreeCare') {
//             return <TreeCare />;
//         }
//         if (currentPage === 'TreeRemoval') {
//             return <TreeRemoval />;
//         }
//         if (currentPage === 'Trimming') {
//             return <Trimming />;
//         }
//     };
    
//     Will display the current page, still need to make the renderPage return
//     const handlePageChange = (page) => setCurrentPage(page);
//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//       };
//     return (
//         <main className="text-indigo-100 bg-zinc-800 w-full">
//             <Router>
//                 <div>
//                     {/* We are passing the currentPage from state and the function to update it */}
//                     <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
//                     {/* <About currentPage={currentPage} handlePageChange={handlePageChange} /> */}
//                     {/* Here we are calling the renderPage method which will return a component  */}
//                     {renderPage()}
                    
//                     <Footer />
//                 </div>
//             </Router>
//         </main>

//     );
// }

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Routes, Route, useHistory, Redirect  } from "react-router-dom";
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import TreeRemoval from "./pages/services/TreeRemoval";
import TreeTrimming from "./pages/services/TreeTrimming";
import TreeCare from "./pages/services/TreeCare";
import EmergencyCare from "./pages/services/EmergencyCare";
import StumpRemoval from "./pages/services/StumpRemoval";

export default function MainContainer() {

    // const [currentPage, setCurrentPage] = useState('Home');
    // const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main className="text-indigo-100 bg-zinc-800 w-full">
        <Router>
            <div>
            {/* <Navbar currentPage={currentPage} handlePageChange={handlePageChange} /> */}
            <Navbar />

            <Switch>
                {/* <Route exact path="/" render={() => <About handlePageChange={handlePageChange} />} /> */}
                {/* <Route exact path="/" component={Home} /> */}
                {/* <Route exact path="/">
                    <Redirect to="/home" />
                </Route> */}

                {/* Good one */}
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/treeRemoval" component={TreeRemoval} />
                <Route path="/stumpRemoval" component={StumpRemoval} />
                <Route path="/treeTrimming" component={TreeTrimming} />
                <Route path="/treeCare" component={TreeCare} />
                <Route path="/emergencyCare" component={EmergencyCare} />

            </Switch>


            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/treeRemoval" element={<TreeRemoval />} />
                <Route path="/stumpRemoval" element={<StumpRemoval />} />
                <Route path="/treeTrimming" element={<TreeTrimming />} />
                <Route path="/treeCare" element={<TreeCare />} />
                <Route path="/emergencyCare" element={<EmergencyCare />} />
            </Routes> */}

            <Footer />
            </div>
        </Router>
        </main>
    );
}
