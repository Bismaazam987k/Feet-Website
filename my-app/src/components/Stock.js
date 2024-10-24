import React from 'react'
import img1 from '../assets/grey.png';
import img2 from '../assets/disco.png';
import img3 from '../assets/mmm.png';
import img4 from '../assets/hi1.png';
import img5 from '../assets/aaa.png';
import img6 from '../assets/b.png';
import img7 from '../assets/mm.png';
import img8 from '../assets/gg.png';
import img9 from '../assets/img3.jpg';
import img10 from '../assets/shoes.png';
import img11 from '../assets/pack.png';
function Stock() {
  return (
    <>
      <div className='bg-gradient-to-r from-slate-300 to-yellow-100 h-[1550px]'>
         <div>
         <h1 className='font-bold text-4xl text-black pt-16 font-sarif'><span className='ml-[680px]'>Join The Stock Society</span> <br></br> <span className='ml-[600px]'>Where Every Thread Tells a Story</span></h1>
         </div>
         <div>
            <div className='flex justify-center items-center mt-12 gap-6 '>
                <img className='w-[400px] h-[300px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img1} alt=''/>
                <img className='w-[700px] h-[300px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img2} alt=''/>
                <img className='w-[400px] h-[300px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img3} alt=''/>
            </div>
            <div className='flex justify-center items-center mt-6 gap-6'>
                <div>
                <div className='flex gap-6'>
                <img className='w-[700px] h-[300px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img4} alt=''/>
                <img className='w-[400px] h-[300px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img5} alt=''/>
                </div>
                <div className='flex mt-6 gap-6'> 
                <img className='w-[400px] h-[300px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img6} alt=''/>
                <img className='w-[700px] h-[300px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img7} alt=''/>
                </div>
                </div>
                <div>
                <img className='w-[400px] h-[640px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img8} alt=''/>
                </div>
            </div>

            <div className='flex justify-center items-center mt-6 gap-6 '>
                <img className='w-[400px] h-[300px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img9} alt=''/>
                <img className='w-[700px] h-[300px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img10} alt=''/>
                <img className='w-[400px] h-[300px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img11} alt=''/>
            </div>
         </div>
          
      </div>
    </>
  )
}

export default Stock
