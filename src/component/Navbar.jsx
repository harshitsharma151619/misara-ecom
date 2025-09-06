import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-10 bg-[#D973B9] text-center pt-2">
        COD AVAILABLE | WORLDWIDE SHIPPING | FREE DELIVERY
      </div>
      <div className="flex justify-between items-center w-full h-30 ">
        <a href="/" className="inline-block cursor-pointer">
          <img
            src="/misara-logo.jpg"
            alt="Misara Logo"
            className="h-16 mx-auto ml-8 mb-4 object-contain object-left w-auto min-w-1/5"
          />
        </a>
        <div className="flex w-80 items-center border border-gray-400 rounded-full overflow-hidden shadow-sm">
          {/* Input */}
          <input
            className="flex-grow px-4 py-2 text-sm focus:outline-none"
            type="text"
            placeholder="Search here..."
          />

          {/* Search Button */}
          <button className="bg-[#D973B9] hover:bg-[#c05d9c] transition-colors duration-300 px-3 py-2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        <div className="flex w-1/5 items-center justify-end gap-6 p-10">
          {/* User Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 cursor-pointer transition-transform transform hover:scale-110 hover:text-pink-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>

          {/* Cart Icon */}
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 cursor-pointer transition-transform transform hover:scale-110 hover:text-pink-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              0
            </span>
          </div>

          {/* Wishlist / Heart Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 cursor-pointer transition-transform transform hover:scale-110 hover:text-pink-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
