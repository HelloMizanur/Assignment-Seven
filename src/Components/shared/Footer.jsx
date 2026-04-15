import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12 px-6 font-sans flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold tracking-tight mb-4">KeenKeeper</h2>
        <p className="max-w-xl mx-auto text-lg text-gray-200 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-lg font-semibold uppercase tracking-widest mb-6">
          Social Links
        </h3>
        <div className="flex justify-center gap-5">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#146b7d] hover:bg-gray-200 transition-colors"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#146b7d] hover:bg-gray-200 transition-colors"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#146b7d] hover:bg-gray-200 transition-colors"
          >
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>

      <div className="w-full max-w-6xl pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
        <div className="mb-4 md:mb-0">
          © 2026 KeenKeeper. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
