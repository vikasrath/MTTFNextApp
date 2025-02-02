'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import NavbarMobileMenu from './NavbarMobileMenu';
import NavbarPopup from './NavbarPopup';
import navItems from './../../../public/assets/navitems';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openPopup = (content) => {
        setPopupContent(content);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setPopupContent('');
    };

    return (
        <div className='h-fit block' >
            <nav
                className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-[#1C2330] shadow-lg' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between py-4">
                    {/* Logo */}
                    <div>
                        <Logo theme="light" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex space-x-8 items-center">
                        <Link
                            href="/"
                            className="text-white text-lg font-medium hover:text-blue-400 transition"
                            onClick={() => setIsPopupOpen(false)}
                        >
                            Home
                        </Link>
                        <button
                            onClick={() => openPopup('whatWeDo')}
                            className="text-white text-lg font-medium hover:text-blue-400 transition"
                        >
                            What We Do
                        </button>
                        <button
                            onClick={() => openPopup('whatWeThink')}
                            className="text-white text-lg font-medium hover:text-blue-400 transition"
                        >
                            What We Think
                        </button>
                        <button
                            onClick={() => openPopup('whoWeAre')}
                            className="text-white text-lg font-medium hover:text-blue-400 transition"
                        >
                            Who We Are
                        </button>
                        <Link
                            href="/contact"
                            className="text-white text-lg font-medium hover:text-blue-400 transition"
                            onClick={() => setIsPopupOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Hamburger Menu */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white text-2xl focus:outline-hidden"
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <NavbarMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navItems={navItems} />
            </nav>
            {/* Full-Screen Popup */}
            {isPopupOpen && <NavbarPopup popupContent={popupContent} closePopup={closePopup} navItems={navItems} />}
        </div>
    );
};

export default Navbar;
