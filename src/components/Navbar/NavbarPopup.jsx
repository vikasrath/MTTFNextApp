import { FaTimes } from 'react-icons/fa';

const NavbarPopup = ({ popupContent, closePopup }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-40">
      <div className="flex justify-center items-center h-full relative">
        {/* Close Button for Popup */}
        <button
          onClick={closePopup}
          className="absolute top-24 right-4 text-white text-3xl"
        >
          <FaTimes />
        </button>

        {/* Popup Content */}
        <div className="bg-white text-center p-8 rounded-lg shadow-lg w-3/4 sm:w-1/2 lg:w-1/3">
          <h2 className="text-3xl font-bold mb-4">{popupContent}</h2>
          <p className="text-lg">
            {popupContent === 'What We Do'
              ? 'Here at [Your Company Name], we specialize in providing top-notch services in [service areas].'
              : 'Our team consists of highly skilled individuals who bring diverse backgrounds and expertise to our projects.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavbarPopup;
