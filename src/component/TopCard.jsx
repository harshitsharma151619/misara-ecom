import React from 'react'

const TopCard = (props) => {
  return (
    <div>
        <div className='h-full w-fit overflow-hidden object-contain p-5'>
            <img className='rounded-full hover:scale-108 transition-all ease-in ' src={props.img} alt="" />
            
            <div className='w-full flex flex-col items-center mt-4'>
                <h3>{props.name}</h3>
            </div> 
        </div> 
        
    </div>
  )
}

export default TopCard