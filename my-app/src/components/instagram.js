import React from 'react'
import { LuInstagram } from "react-icons/lu";
import img1 from '../assets/multi.png';
import img4 from '../assets/legs.png';
import img2 from '../assets/white.png';
import img3 from '../assets/waw.png';
import img5 from '../assets/pink.png';
function Instagram() {
  return (
    <div className='bg-gradient-to-l from-purple-600 via-pink-600 to-yellow-500 text-white h-[520px] items-center p-10'>
     <div className='flex justify-center gap-4'>
        <h1 className='font-bold text-5xl'>Do it with Instagram Community</h1>
        <LuInstagram className='bg-gradient-to-l from-purple-600 via-pink-600 to-yellow-500 rounded-lg' size={50}/>
     </div>
     <p className='pl-[550px] text-[18px] mt-2'>Inspire and let yourself be inspired,from one unique fashion to another</p>
     <div className='grid grid-cols-5 gap-8 mt-10 rounded-lg px-[100px]'>
        <img className='h-[300px] w-[400px] rounded-3xl hover:animate-pulse' src={img1} alt='no'/>
        <img className='h-[300px] w-[400px] rounded-3xl hover:animate-pulse' src={img2} alt='no'/>
        <img className='h-[300px] w-[400px] rounded-3xl hover:animate-pulse' src={img3} alt='no'/>
        <img className='h-[300px] w-[400px] rounded-3xl hover:animate-pulse' src={img4} alt='no'/>
        <img className='h-[300px] w-[400px] rounded-3xl hover:animate-pulse' src={img5} alt='no'/>
     </div>
    </div>
  )
}

export default Instagram
