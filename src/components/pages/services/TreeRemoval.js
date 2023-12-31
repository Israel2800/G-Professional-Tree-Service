import React from 'react';
import { Link } from "react-router-dom";
import treeRemovalImage from "../../../assets/images/tree-removal.jpg";

export default function TreeRemoval() {
  return (
    <section id="TreeRemoval" className=" bg-gray-100">
      <div class="w-full rounded-lg shadow-2xl overflow-hidden relative py-12">
        <img class="absolute inset-0 h-full w-full object-cover" src={treeRemovalImage} alt="Stump Removal Bg" />
        <div class="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
            <div class="my-8 flex flex-col h-full items-center justify-center relative">
                <h2 className="text-3xl font-bold text-center text-white">
                  WE DELIVER EXPEDIENT, EFFICIENT, AND SECURE SERVICES.
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
      </div>
      
      
      <div className=" p-8 text-justify">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Tree Removal Services</h2>
          <p className="text-xl text-gray-800 mb-8">
            Our professional tree removal services ensure the safe and efficient removal of trees from your property.
            Whether you have a dead or diseased tree, a hazardous tree in a dangerous location, or simply want to
            clear space for a new project, our experienced team is here to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4 text-center">Expert Tree Removal</h3>
              <p className="text-gray-800">
                Our team of certified arborists and skilled tree care professionals is equipped with the necessary
                knowledge and tools to safely and effectively remove trees of any size or complexity. We prioritize
                safety and ensure minimal impact on your property during the removal process.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4 text-center">Site Cleanup</h3>
              <p className="text-gray-800">
                We understand the importance of leaving your property clean and tidy after tree removal. Our team
                will thoroughly clean up the debris and remove all tree remnants from your property, leaving it in
                a pristine condition.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4 text-center">Stump Removal</h3>
              <p className="text-gray-800">
                In addition to tree removal, we offer professional stump removal services. Our experts will safely
                grind down the stumps, eliminating any tripping hazards and allowing you to reclaim the space for
                landscaping or other purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// import React from 'react';
// import treeImage from '../../assets/tree-removal-image.jpg'; // Replace with your actual image path
// import classNames from 'classnames';

// export default function TreeRemoval() {
//   const isMobile = window.innerWidth <= 640;

//   return (
//     <section id="TreeRemoval" className="py-12 bg-gray-100">
//       <div className="container px-8 text-justify">
//         <div className="flex flex-col items-center">
//           {!isMobile && (
//             <img
//               src={treeImage}
//               alt="Tree Removal Services"
//               className="w-full h-auto max-h-96 mb-8 rounded-lg shadow"
//             />
//           )}
//           <h2 className="text-3xl font-bold text-green-700 mb-4">Tree Removal Services</h2>
//           <div
//             className={classNames('bg-white rounded-lg shadow p-6', {
//               'bg-cover bg-center bg-no-repeat': isMobile,
//               'mb-8': isMobile,
//             })}
//             style={{ backgroundImage: isMobile ? `url(${treeImage})` : 'none' }}
//           >
//             <h3 className="text-xl font-semibold text-green-700 mb-4 text-center">Expert Tree Removal</h3>
//             <p className="text-gray-800">
//               Our team of certified arborists and skilled tree care professionals is equipped with the necessary
//               knowledge and tools to safely and effectively remove trees of any size or complexity. We prioritize
//               safety and ensure minimal impact on your property during the removal process.
//             </p>
//           </div>
//           <div
//             className={classNames('bg-white rounded-lg shadow p-6', {
//               'bg-cover bg-center bg-no-repeat': isMobile,
//               'mb-8': isMobile,
//             })}
//             style={{ backgroundImage: isMobile ? `url(${treeImage})` : 'none' }}
//           >
//             <h3 className="text-xl font-semibold text-green-700 mb-4 text-center">Site Cleanup</h3>
//             <p className="text-gray-800">
//               We understand the importance of leaving your property clean and tidy after tree removal. Our team
//               will thoroughly clean up the debris and remove all tree remnants from your property, leaving it in
//               a pristine condition.
//             </p>
//           </div>
//           <div
//             className={classNames('bg-white rounded-lg shadow p-6', {
//               'bg-cover bg-center bg-no-repeat': isMobile,
//               'mb-8': isMobile,
//             })}
//             style={{ backgroundImage: isMobile ? `url(${treeImage})` : 'none' }}
//           >
//             <h3 className="text-xl font-semibold text-green-700 mb-4 text-center">Stump Removal</h3>
//             <p className="text-gray-800">
//               In addition to tree removal, we offer professional stump removal services. Our experts will safely
//               grind down the stumps, eliminating any tripping hazards and allowing you to reclaim the space for
//               landscaping or other purposes.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
