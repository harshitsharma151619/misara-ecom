import React from 'react'
import TopCard from '../component/TopCard'
import { newArrivals, toppic } from '../utils/data'
import Card from '../component/Card'

const Home = () => {
  return (
    <div>
      {/* Navbar Section */}
      <div className="items-center text-center w-full justify-center bg-gradient-to-b from-[#D9FAF5] to-[#D973B9] px-4">
        <ul className="list-none flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 text-sm sm:text-base md:text-lg cursor-pointer">
          <li className="hover:underline">ALL COLLECTION</li>
          <li className="hover:underline">BEST SELLER</li>
          <li className="hover:underline">NEW ARRIVALS</li>
          <li className="hover:underline">SHIPMENT</li>
          <li className="hover:underline">TRACK ORDER</li>
          <li className="hover:underline">EXCHANGE</li>
        </ul>

        {/* Top Picks */}
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          {toppic.map((item, index) => (
            <TopCard key={index} img={item.img} name={item.name} />
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div className="w-full h-auto flex">
        <img src="/trial-img.webp" alt="" className="w-full object-cover" />
      </div>

      <div className="my-8 px-4">
        <img src="/new.webp" alt="" className="w-full object-cover rounded-lg" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full h-fit px-8">
        {newArrivals.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
