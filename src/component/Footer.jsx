import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
          {/* About Section */}
          <div className="md:w-1/3 pr-6">
            <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
            <p className="text-gray-400">
              I build modern web applications with a focus on performance and user experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              {/* <li>
                <a href="#contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <p className="mb-2">Email: <a href="mailto:kienjuntong@gmail.com" className="hover:text-white">kienjuntong@gmail.com</a></p>
            <p className="mb-4">Phone: <a href="tel:+1234567890" className="hover:text-white">+63 (938) 677-034</a></p>
            <div className="flex space-x-4">
              {/* Social Icons (using SVG) */}
              <a
                href="https://www.facebook.com/kjunn00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0174397883256a6eca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork"
                className="hover:text-green-500 transition-colors duration-200"
            >
                <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                {/* Simplified Upwork "U" shape */}
                <path d="M7.5 3.75a3.75 3.75 0 0 0-3.75 3.75v9a3.75 3.75 0 0 0 7.5 0v-9a3.75 3.75 0 0 0-3.75-3.75zm0 2.25a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 1.5-1.5zM16.5 3.75a3.75 3.75 0 0 0-3.75 3.75v9a3.75 3.75 0 0 0 7.5 0v-9a3.75 3.75 0 0 0-3.75-3.75zm0 2.25a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 1.5-1.5z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kien-juntong-065860273/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.07 2.07 0 11.001-4.139 2.07 2.07 0 01-.001 4.139zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
