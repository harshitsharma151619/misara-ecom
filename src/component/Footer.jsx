import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#D9FAF5] to-[#D973B9] text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-black mb-3">MyShop</h2>
          <p className="text-sm">
            Your one-stop destination for stylish outfits. 
            Bringing comfort & fashion together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className=" text-black ">Home</a></li>
            <li><a href="#" className=" text-black ">About</a></li>
            <li><a href="#" className=" text-black ">Products</a></li>
            <li><a href="#" className=" text-black ">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">Contact</h3>
          <p className="text-sm text-black">📍 New Delhi, India</p>
          <p className="text-sm text-black">📧 support@myshop.com</p>
          <p className="text-sm text-black">📞 +91 9876543210</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
