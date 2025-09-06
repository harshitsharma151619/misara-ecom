import React from 'react'
const Card = (props) => {
  return (
    <div className="w-full relative  min-w-96 h-full  rounded-2xl bg-white border  border-gray-300 overflow-hidden hover:border-blue-500">
      {/* Background Image */}
      <img 
        className="w-full h-full object-fill transition-transform duration-300 hover:scale-106" 
        src={props.img} 
        alt="Card background" 
      />

      {/* Overlay Text */}
      <div className=" absolute bottom-4 border border-gray-300 left-4 gap-8 flex items-center justify-center transition-transform duration-300 hover:scale-106 bg-white rounded-full text-black px-4 py-2 text-lg font-semibold">
        {props.name}
        <button className='bg-blue-600 rounded-full px-4 py-1 text-white'>₹ {props.price}/-</button>
      </div>


    </div>
  )
}

export default Card


