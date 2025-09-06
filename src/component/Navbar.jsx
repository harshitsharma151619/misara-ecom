import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='w-full h-18 bg-[#ffffff]'> </div>
        <div className='w-full h-10 bg-[#D973B9] text-center pt-2'>COD AVAILABLE | WORLDWIDE SHIPPING | FREE DELIVERY</div>
        <div className='flex justify-between items-center w-full h-30'> 
            <img src="/misara-logo.jpg" className='h-10 object-contain object-left w-auto min-w-1/5'  alt="" />
            <div className='border  border-black w-80  justify-between  flex rounded-md'>
                <input className='p-2 focus:outline-none' type="text" name="" id="" placeholder='Search Here ...' />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='size-6 bg-[#D973B9] h-10 rounded-br-md rounded-tr-md  w-fit'>
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

            </div>

            <div className='flex w-1/5 items-center justify-end gap-4 p-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

            </div>

        </div>

        

    </div>
  )
}

export default Navbar