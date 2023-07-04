import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Glogo from '../../assets/Logo.jpg';

export default function Footer() {
  const handleCall = () => {
    window.location.href = 'tel:+16154010212';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:dady281100@gmail.com';
  };

  return (
    <footer className="py-6 flex justify-center items-center bg-light text-center bg-[#f3f8fe] text-zinc-900" id="Footer">
      <div className="container">
        <div className="order-1 lg:order-1 grid lg:grid-cols-3 gap-8">
          <div className="flex justify-center items-center">
            <img 
                src={Glogo} 
                alt="Company Logo" 
                className="w-full " 
                style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="order-3 lg:order-2 flex flex-col justify-center items-center md:text-center px-6">
            <p className="mb-2">Office Hours: Monday - Saturday from 7am - 7pm</p>
            <p className="mb-2">
              Email us to:{' '}
              <a href="#Footer" onClick={handleEmail} className="inline-flex items-center">
                dady281100@gmail.com <FaEnvelope className="mx-2" />
              </a>
            </p>
            <p className="mb-2">
              Call us to:{' '}
              <a href="#Footer" onClick={handleCall} className="inline-flex items-center">
                +1 615 401 0212 <FaPhone className="mx-2" />
              </a>
            </p>
            <p className="font-bold">&copy; 2023 G Professional Tree Service. All rights reserved.</p>
          </div>
          <div className="order-2 lg:order-3 flex justify-center items-center">
            <a href="#" className="mx-4">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="mx-4">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="mx-4">
              <FontAwesomeIcon icon={faGoogle} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
