import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Routes, Route, useHistory, Redirect  } from "react-router-dom";
import Home from './components/pages/Home';
import Contact from "./components/pages/services/Contact";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import TreeRemoval from "./components/pages/services/TreeRemoval";
import TreeTrimming from "./components/pages/services/TreeTrimming";
import TreeCare from "./components/pages/services/TreeCare";
import EmergencyCare from "./components/pages/services/EmergencyCare";
import StumpRemoval from "./components/pages/services/StumpRemoval";
import Gallery from "./components/pages/Gallery";

function App() {

    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main className="text-indigo-100 bg-[#f3f8fe] w-full">
            <Router>
                <div>
                    <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
                    {/* <Navbar /> */}

                    {/* <Switch> */}
                        {/* <Route exact path="/" render={() => <About handlePageChange={handlePageChange} />} /> */}
                        {/* <Route exact path="/" component={Home} /> */}
                        {/* <Route exact path="/">
                            <Redirect to="/home" />
                        </Route> */}

                        {/* Good one */}
                        {/* <Route exact path="/" component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/treeRemoval" component={TreeRemoval} />
                        <Route path="/stumpRemoval" component={StumpRemoval} />
                        <Route path="/treeTrimming" component={TreeTrimming} />
                        <Route path="/treeCare" component={TreeCare} />
                        <Route path="/emergencyCare" component={EmergencyCare} /> */}

                    {/* </Switch> */}

                    <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/treeRemoval" element={<TreeRemoval />} />
                            <Route path="/stumpRemoval" element={<StumpRemoval />} />
                            <Route path="/treeTrimming" element={<TreeTrimming />} />
                            <Route path="/treeCare" element={<TreeCare />} />
                            <Route path="/emergencyCare" element={<EmergencyCare />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/treeRemoval/Contact" element={<Contact />} />
                            <Route path="/stumpRemoval/Contact" element={<Contact />} />
                            <Route path="/treeTrimming/Contact" element={<Contact />} />
                            <Route path="/treeCare/Contact" element={<Contact />} />
                            <Route path="/emergencyCare/Contact" element={<Contact />} />
                            <Route path="/gallery/Contact" element={<Contact />} />
                    </Routes>

                    <Footer />
                </div>
            </Router>
        </main>
    );
}

export default App;