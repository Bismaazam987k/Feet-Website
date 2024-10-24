import React from 'react'
import img1 from '../assets/img14.png.jpg'
import { LuLeaf } from "react-icons/lu";
import { AiOutlineSafety } from "react-icons/ai";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { BsMoisture } from "react-icons/bs";

function Features() {
  return (
    <>
      <div className='bg-gradient-to-r from-blue-200 via-slate-50 to-pink-200 h-[610px]'>
      <h1 className='font-bold text-4xl pt-10 items-center ml-[590px]'>Key Features And benefits FEETS</h1>
      <p className='text-xl font-semibold pt-2 ml-[560px]'>Socks provide a layer of Cushioning between your feets and shoes</p>
        <div className='flex justify-center items-center pt-10 gap-24'>
            {/* bbbbbbbbbbbbbbb */}
       <div>
       <div className='items-center'>
                <LuLeaf size={60} className='ml-[130px] text-red-600 ' />
                <h1 className='font-bold text-3xl'>Comfort and Cushioning</h1>
                <p className='text-xl font-semibold '>Socks provide a layer of Cushioning <br></br>  between your feets and shoes okk</p>
            </div>
            <div className='items-center mt-6'>
            <FaTemperatureThreeQuarters size={60} className='ml-[130px] text-purple-600  ' />
                <h1 className='font-bold text-3xl'>Temperature Regulations</h1>
                <p className='text-xl font-semibold '>Socks provide a layer of Cushioning <br></br>  between your feets and shoes okk</p>
            </div>
       </div>
       {/* bbbbbbbbbbbb */}
            <div>
            <div>
                <img className='w-[400px] h-[400px] rounded-full hover:scale-90 hover:animate-pulse cursor-pointer' src={img1} alt='no'/>
            </div>
            </div>
            {/* gggggggggggggg */}
            <div>
            <div className='items-center'>
            <AiOutlineSafety size={60} className='ml-[130px] text-yellow-400 ' />
                <h1 className='font-bold text-3xl'>Protections from Injures</h1>
                <p className='text-xl font-semibold '>Socks provide a layer of Cushioning <br></br>  between your feets and shoes okk</p>
            </div>
            <div className='items-center mt-6'>
            <BsMoisture size={60} className='ml-[130px] text-emerald-500 ' />
                <h1 className='font-bold text-3xl'>Moisture Management</h1>
                <p className='text-xl font-semibold '>Socks provide a layer of Cushioning <br></br>  between your feets and shoes okk</p>
            </div>
       </div>
        </div>
      </div>
    </>
  )
}

export default Features
