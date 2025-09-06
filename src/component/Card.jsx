import React from "react";

const Card = ({ img, name, price }) => {
  return (
    <div className="w-full relative min-w-[250px] h-[380px] rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={img}
        alt={name}
      />

      {/* Details Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4">
        <div className="flex flex-col items-start transition-transform duration-500 group-hover:translate-y-[-4px]">
          <span className="text-white font-bold text-lg drop-shadow-md tracking-wide transition-all duration-500 group-hover:scale-105">
            {name}
          </span>
          <span className="mt-2 bg-pink-600 hover:bg-pink-700 transition-colors duration-300 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg transition-transform duration-500 group-hover:scale-105">
            ₹ {price}/-
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
