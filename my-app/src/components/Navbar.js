import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineAccountBox } from "react-icons/md";

function Navbar() {
  return (
    <>
    <div className='bg-black text-white flex justify-center items-center gap-4 h-[80px] text-xl'>
     <div className='font-bold'>GET 25% OFF |</div>
     <div className='font-bold'>BUY NOW LIMITED STOCK</div>
     <div className='flex justify-center items-center gap-3 '>
        <div className='bg-white rounded-xl p-4 text-black h-14 '><b>09 </b>HRS</div>
        <div className='bg-white rounded-xl p-4 text-black h-14'><b>33 </b> MIN</div>
        <div className='bg-white rounded-xl p-4 text-black h-14'><b>32 </b> SEC</div>
     </div>
    </div>
    <div className='bg-gradient-to-r from-slate-100 via-pink-300 to-yellow-300 flex h-20 items-center justify-evenly text-xl font-bold sticky'>
        <div>
            <h1 className='text-5xl text-blue-950'>FEETS</h1>
        </div>
        <div>
            <ul className='flex gap-12 font-semibold'>
                <li>All Collection</li>
                <li>Compression Stocks</li>
                <li>Skincare</li>
                <li>Best Sellers</li>
            </ul>
        </div>
        <div className='flex gap-6'>
            <FaSearch className='text-black' size={25}/>
            <FaRegHeart className='text-black' size={25}/>
            <GrUserManager className='text-black' size={25}/>
            <MdOutlineAccountBox className='text-black' size={30}/>
        </div>
    </div>
    </>
  )
}

export default Navbar
