'use client';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="relative mt-4 z-50 w-full bg-transparent">
      <div className="relative flex justify-between items-center px-8 py-4">
        {/* Left Section: Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <Link href="/">
            <Image
              src="/Icons/logo.svg"
              alt="Logo"
              width={0}
              height={0}
              className="cursor-pointer w-auto h-auto"
            />
          </Link>
          <Link href="/" className="text-gray-800 text-xl font-normal hover:text-[#3D65FF]">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 text-xl font-normal hover:text-[#3D65FF]">
            About
          </Link>
          {/* Pages with Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-gray-800 hover:text-gray-600 focus:outline-none">
              <span className='text-xl font-normal hover:text-[#3D65FF]'>Pages</span>
              <svg
                className="ml-1 w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 5l-5 5h10l-5-5z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Dropdown Box */}
            <div className="absolute left-0 mt-2 w-[36rem] bg-white shadow-lg border rounded-lg border-gray-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-10">
              <div className="grid grid-cols-4 gap-4 p-4">
                {/* Column 1 */}
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 1
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 2
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 3
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 4
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 5
                  </Link>
                </div>
                {/* Column 2 (omit first element) */}
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 2
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 3
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 4
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 5
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 6
                  </Link>
                </div>
                {/* Column 3 */}
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 1
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 2
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 3
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 4
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 5
                  </Link>
                </div>
                {/* Column 4 */}
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 1
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 2
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 3
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 4
                  </Link>
                  <Link href="#" className="block text-gray-700 hover:text-gray-900">
                    Link 5
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Social Icons & Appointment Button */}
        <div className="justify-end flex flex-row items-center space-x-4 mr-3">
          <div className="flex space-x-3">
          <Image src="/Icons/linkedin.svg" alt="Twitter" width={24} height={24} />
            <Image src="/Icons/twitter.svg" alt="Twitter" width={24} height={24} />
            <Image src="/Icons/instagram.svg" alt="Instagram" width={24} height={24} />
            <Image src="/Icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </div>
          
          <button className="bg-[#13182f] flex flex-row items-center text-lg font-semibold text-white py-4 px-5 rounded-full hover:bg-blue-700">
          <Image src="/Icons/phone.svg" alt="Twitter" width={24} height={24} /> Book an Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
