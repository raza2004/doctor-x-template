import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0b0f1a] text-white p-10 md:p-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo & Description */}
                <div>
                    <h1 className="text-2xl font-bold">Doctr X</h1>
                    <p className="text-sm text-gray-400 mt-4">
                        Lorem ipsum dolor sit amet consectetur elit eget eu enim ante eget curabitur auctor arcu.
                    </p>
                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4 text-gray-400">
                        <FaFacebookF className="cursor-pointer hover:text-white" />
                        <FaTwitter className="cursor-pointer hover:text-white" />
                        <FaInstagram className="cursor-pointer hover:text-white" />
                        <FaLinkedinIn className="cursor-pointer hover:text-white" />
                    </div>
                </div>

                {/* Navigation Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Pages</h2>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-white">Home v1</a></li>
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Doctor</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-3">Utility Pages</h2>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-white">Coming Soon</a></li>
                        <li><a href="#" className="hover:text-white">FAQs</a></li>
                        <li><a href="#" className="hover:text-white">Booking</a></li>
                        <li><a href="#" className="hover:text-white">Insurance</a></li>
                    </ul>
                </div>

                {/* Newsletter Signup */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Sign up for our newsletter</h2>
                    <div className="flex bg-white rounded-full sm:w-[25vw] overflow-hidden">
                        <input type="email" className="p-3 flex-1 text-gray-700 outline-none" placeholder="Enter your email" />
                        <button className="bg-blue-600 px-4  text-white font-semibold">Subscribe</button>
                    </div>
                </div>
            </div>
            
            {/* Copyright Section */}
            <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
                Copyright &copy; Doctr X | Designed by BRIX Templates - Powered by Framer
            </div>
        </footer>
    );
};

export default Footer;
