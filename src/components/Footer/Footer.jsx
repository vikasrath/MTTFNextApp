import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../Logo/Logo';

function Footer() {
    const ourCompanyLink = ["About Us", "Mission & Vision", "Leadership and Advisory", "Life and MTTF", "Governing Body", "MoU/Collaboration"];
    const servicesLink = ["Conferences", "Workshops", "Skill Development", "Internships & Training"];
    const resourcesLink = ["Certificate", "Terms & Conditions"];
    const contact = ["contactus@mttf.in", "+91-896-829-4003"];

    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Logo and Introduction */}
                <div className="text-center mb-12">
                    <Logo theme={"light"} />
                    <p className="text-gray-400 mt-4 text-lg">Empowering through knowledge, skills, and innovation.</p>
                </div>

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Our Company */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">Our Company</h2>
                        <ul>
                            {ourCompanyLink.map((link, index) => (
                                <li key={index} className="mt-2">
                                    <a href="#" className="hover:text-white transition duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">Services</h2>
                        <ul>
                            {servicesLink.map((link, index) => (
                                <li key={index} className="mt-2">
                                    <a href="#" className="hover:text-white transition duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">Important Links</h2>
                        <ul>
                            {resourcesLink.map((link, index) => (
                                <li key={index} className="mt-2">
                                    <a href="#" className="hover:text-white transition duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
                        <ul>
                            {contact.map((item, index) => (
                                <li key={index} className="mt-2">
                                    {item.includes('@') ? (
                                        <a href={`mailto:${item}`} className="hover:text-white transition duration-300">
                                            {item}
                                        </a>
                                    ) : (
                                        <a href={`tel:${item}`} className="hover:text-white transition duration-300">
                                            {item}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-10 pt-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">&copy; 2024 MTTF. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
