import Image from 'next/image'
import House from '../public/house.jpg'
import { BiHeart } from 'react-icons/bi'
import { BiBed, BiBath, BiSquare } from 'react-icons/bi'


const houseDetails = {
    price: '$99.000',
    address: 'Gulfport, MS 39503',
    location: '1234 Main St, City, 12345, FL',
    beds: '3 Beds',
    bathrooms: '2 Bathrooms',
    size: '5x7 m2'
}

const ListingCard = () => {
  return (
    <div className='border border-gray-200 rounded-md md:max-w-sm overflow-hidden relative'>
        <Image className='h-48 w-full object-cover' src={House} alt='House'/>
            <div className='h-48 w-full bg-gray-500/30 absolute top-0 left-0'></div>    
            
            
           <span className='absolute right-4 top-4 bg-white text-gray-700 rounded text-xs py-1 px-2'>FOR SALE</span> 

        <div className='py-6 px-4'>
            <div className='flex items-center justify-between'>
            <h3 className='text-indigo-500 text-2xl font-semibold'>{houseDetails.price}</h3>
             <div className='flex items-center justify-center rounded-full border cursor-pointer border-indigo-200 h-10 w-10 text-xl'>
                <BiHeart className='text-indigo-400'/>
                </div>   
            </div>
            <h3 className='text-gray-700 text-xl mb-2 font-medium'>{houseDetails.address}</h3>
            <p className='text-gray-400'>{houseDetails.location}</p>

            <div className='h-[1px] w-full bg-gray-200 my-4'></div> 

            <div className='flex items-center justify-between mb-2'>
                  <div className='flex items-center gap-1'>
                  <BiBed className='text-xl text-indigo-500'/>
                    <span className='text-gray-400'>3 Beds</span>
                  </div>

                  <div className='flex items-center gap-1'>
                  <BiBath className='text-xl text-indigo-500'/>
                    <span className='text-gray-400'>2 Bath</span>
                  </div>

                  <div className='flex items-center gap-1'>
                  <BiSquare className='text-lg text-indigo-500 rotate-45'/>
                    <span className='text-gray-400'>5x7 m2</span>
                  </div>

            </div>  

        </div>
    </div>
  )
}

export default ListingCard