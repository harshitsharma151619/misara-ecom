import React from 'react'
import TopCard from '../component/TopCard'
import { newArrivals, toppic } from '../utils/data'
import Card from '../component/Card'


const Home = () => {
  return (
    <div>
        <div className=' items-center text-center w-full justify-center  bg-gradient-to-b from-[#D9FAF5] to-[#D973B9]'>
            <ul className='list-none flex justify-center gap-16'>
                <li>ALL COLLECTION </li>
                <li>BEST SELLER</li>
                <li>NEW ARRIVALS</li>
                <li>SHIPMENT</li>
                <li>TRACK ORDER</li>
                <li>EXCHNAGE</li>
            </ul>

            <div className='flex gap-4 justify-center'>
                <div><TopCard img={toppic[0].img} name={toppic[0].name} /></div>
                <div><TopCard img={toppic[1].img} name={toppic[1].name} /></div>
                <div><TopCard img={toppic[2].img} name={toppic[2].name} /></div>
                <div><TopCard img={toppic[3].img} name={toppic[3].name} /></div>
                <div><TopCard img={toppic[4].img} name={toppic[4].name} /></div>
                <div><TopCard img={toppic[5].img} name={toppic[5].name} /></div>
                
            </div>


        </div>
        <div className='w-full h-auto flex '>
            <img src="/trial-img.webp" alt="" />
        </div>

        <div className='my-8'>
            <img src="/new.webp" alt="" />
        </div>

        <div className= 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full h-fit px-4'>
            <div><Card img={newArrivals[0].img}   name={newArrivals[0].name}  price={newArrivals[0].price}  /></div>
            <div><Card img={newArrivals[1].img}   name={newArrivals[1].name}  price={newArrivals[1].price}  /></div>
            <div><Card img={newArrivals[2].img}   name={newArrivals[2].name}  price={newArrivals[2].price}  /></div>
            <div><Card img={newArrivals[3].img}   name={newArrivals[3].name}  price={newArrivals[3].price}  /></div>
            <div><Card img={newArrivals[4].img}   name={newArrivals[4].name}  price={newArrivals[4].price}  /></div>
            <div><Card img={newArrivals[5].img}   name={newArrivals[5].name}  price={newArrivals[5].price}  /></div>
            <div><Card img={newArrivals[6].img}   name={newArrivals[6].name}  price={newArrivals[6].price}  /></div>
            <div><Card img={newArrivals[7].img}   name={newArrivals[7].name}  price={newArrivals[7].price}  /></div>
            
        </div>


    </div>
  )
}

export default Home