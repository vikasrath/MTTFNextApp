import Link from 'next/link';

const NavbarMobileMenu = ({ isMenuOpen, setIsMenuOpen, openPopup }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 py-6">
      <div className="flex flex-col items-center space-y-4">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="text-white text-lg font-medium hover:text-blue-400 transition"
        >
          Home
        </Link>
        <button
          onClick={() => {
            openPopup('What We Do');
            setIsMenuOpen(false);
          }}
          className="text-white text-lg font-medium hover:text-blue-400 transition"
        >
          What We Do
        </button>
        <button
          onClick={() => {
            openPopup('Who We Are');
            setIsMenuOpen(false);
          }}
          className="text-white text-lg font-medium hover:text-blue-400 transition"
        >
          What We Think
        </button>
        <button
          onClick={() => {
            openPopup('Who We Are');
            setIsMenuOpen(false);
          }}
          className="text-white text-lg font-medium hover:text-blue-400 transition"
        >
          Who We Are
        </button>
        <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="text-white text-lg font-medium hover:text-blue-400 transition"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;
