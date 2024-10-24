import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import img1 from '../assets/mult1.png'
import img2 from '../assets/white1.png';
import img3 from '../assets/grey7.png';
import img4 from '../assets/white.png';
import img5 from '../assets/grey6y.png';
import img6 from '../assets/white1.png';
import img7 from '../assets/blue.png';
import img8 from '../assets/black6.png';
import img9 from '../assets/b.png';
function Page1() {
  return (
    <>
      <div className='flex justify-between gap-[90px]  px-[100px] bg-gradient-to-r from-blue-200 via-red-200 to-yellow-100 h-[1340px] pt-[100px]'>
         <div>
              <div>
                <img className='h-[430px] w-[590px] rounded-2xl' src={img1} alt='bo'/>
              </div>
              <div>
              <div className='grid grid-cols-5 gap-2 mt-4 rounded-lg '>
        <img className='h-[150px] w-[200px] rounded-2xl hover:animate-pulse' src={img2} alt='no'/>
        <img className='h-[150px] w-[200px] rounded-2xl hover:animate-pulse' src={img3} alt='no'/>
        <img className='h-[150px] w-[200px] rounded-2xl hover:animate-pulse' src={img4} alt='no'/>
        <img className='h-[150px] w-[200px] rounded-2xl hover:animate-pulse' src={img5} alt='no'/>
     </div>
     {/* nnnnnnn */}
     <div className='grid grid-cols-5 gap-2 mt-4 rounded-lg '>
        <img className='h-[150px] w-[200px] rounded-2xl hover:animate-pulse' src={img6} alt='no'/>
        <img className='h-[150px] w-[200px] rounded-2xl hover:animate-pulse' src={img7} alt='no'/>
        <img className='h-[150px] w-[200px] rounded-2xl hover:animate-pulse' src={img8} alt='no'/>
        <img className='h-[150px] w-[200px] rounded-2xl hover:animate-pulse' src={img9} alt='no'/>
     </div>
              </div>
         </div>
         <div>
            <p className='bg-pink-400 text-white font-serif font-bold text-xl p-4 px-32 rounded-3xl text-center'>UP TO 40% OFF GRAB IT NOW</p>
            <div className='text-3xl font-serif font-semibold py-3 cursor-pointer border-b-2 border-black'>
                <h1 className='text-4xl font-bold'>FLOWFIBER COMPRESSION STOCKS-VINTAGE</h1>
                <div className='flex justify-start mt-4 '>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid />
                <p className='text-2xl text-blaCK font-mono font-semibold' > 19,223 (Reviews)</p>
                </div>
                <p className='text-4xl text-blaCK font-mono font-bold mt-4' > $30.00<sup>oo</sup></p>
                {/* cccccccc */}
            </div>
                 <div className='mt-8 flex gap-2'>
                    <div className='bg-white h-[150px] w-[200px] relative rounded-2xl px-[28px]  shadow-xl shadow-grey hover:scale-90 border-pink-300  '>
                        <h1 className='text-2xl font-sans text-white bg-pink-500 font-bold p-2 text-center absolute rounded-3xl w-[60]'>SAVE $9.00</h1>
                        <p className='text-2xl text-blaCK font-mono font-bold mt-14 pl-8' >Buy-1</p>
                        <p className='text-xl text-blaCK font-mono font-bold ' > $30.00<span className='text-gray-400'>$40.00</span></p>
                    
                    </div>
                    {/* nnnn */}
                    <div className='bg-white h-[150px] w-[200px] relative rounded-2xl px-[28px]  shadow-xl shadow-grey hover:scale-90 border-pink-300  '>
                        <h1 className='text-2xl font-sans text-white bg-pink-500 font-bold p-2 text-center absolute rounded-3xl w-[60]'>SAVE $9.00</h1>
                        <p className='text-2xl text-blaCK font-mono font-bold mt-14 pl-8' >Buy-1</p>
                        <p className='text-xl text-blaCK font-mono font-bold ' > $30.00<span className='text-gray-400'>$40.00</span></p>
                    
                    </div>
                    {/* vvvv */}
                    <div className='bg-white h-[150px] w-[200px] relative rounded-2xl px-[28px]  shadow-xl shadow-grey hover:scale-90 border-pink-300  '>
                        <h1 className='text-2xl font-sans text-white bg-pink-500 font-bold p-2 text-center absolute rounded-3xl w-[60]'>SAVE $9.00</h1>
                        <p className='text-2xl text-blaCK font-mono font-bold mt-14 pl-8' >Buy-1</p>
                        <p className='text-xl text-blaCK font-mono font-bold ' > $30.00<span className='text-gray-400'>$40.00</span></p>
                    
                    </div>
                    {/* bbbb */}
                </div>
                {/* bbbbbbbbb */}
                <div >
                <h1 className='text-3xl font-sans text-black font-bold mt-8 '>Pick Your Favourite Color</h1>
                <div className='flex gap-3'>
                    <div className='rounded-full h-[100px] w-[100px] bg-gradient-to-r from-red-300 to-purple-500 mt-6 border-4 hover:border-black hover:cursor-pointer'></div>
                    <div className='rounded-full h-[100px] w-[100px] bg-gradient-to-r from-yellow-300 to-pink-500 mt-6 border-4 hover:border-black hover:cursor-pointer'></div>
                    <div className='rounded-full h-[100px] w-[100px] bg-gradient-to-r from-blue-300 to-orange-100 mt-6 border-4 hover:border-black hover:cursor-pointer'></div>
                    <div className='rounded-full h-[100px] w-[100px] bg-gradient-to-r from-green-400 to-pink-200 mt-6 border-4 hover:border-black hover:cursor-pointer'></div>    
                </div>
                <div className='flex gap-4 mt-7 font-bold font-sans text-xl'>
                   <span>Size</span>
                   <span>What's my size?</span>
                </div>
                <div className='flex mt-7 gap-2'>
                     <button className='px-8 py-3 rounded-2xl font-bold bg-gradient-to-r from-red-100 to-yellow-400  font-sans text-2xl '>S/M</button>
                     <button className='px-8 py-3 rounded-2xl font-bold bg-gradient-to-r from-red-100 to-pink-400  font-sans text-2xl '>S/M WIDE</button>
                     <button className='px-8 py-3 rounded-2xl font-bold bg-gradient-to-r from-red-300 to-blue-100  font-sans text-2xl '>L/XL</button>
                     <button className='px-8 py-3 rounded-2xl font-bold bg-gradient-to-r from-slate-300 to-orange-200  font-sans text-2xl '>L/XL WIDE</button>   </div>

{/* ///////////////////////////////////////// */}
<p className='bg-pink-400 text-white font-serif font-bold text-xl p-4 px-32 mt-8 rounded-3xl text-center'>UP TO 40% OFF GRAB IT NOW</p>
                <div className='bg-white h-[300px] w-[640px] mt-0 rounded-3xl flex items-center justify-center gap-12'>
<div  className='w-[150px] h-[160px] bg-white shadow-xl shadow-grey pl-5 hover:scale-90 border-r-4 border-black'  >
    <p className='bg-black p-3 px-6  items-center text-white w-[100px] rounded-2xl '>2 items</p>
    
    <div className='flex mt-2 '>
        <div> <h1 className='font-bold text-6xl font-mono'>10</h1></div>
      <div className='grid grid-rows-2 gap-0'><p className='font-bold text-xl'>%</p><p className='font-bold text-xl'>OFF</p></div>
    </div>
    <ul className='font-bold'><li>Free Shipping</li></ul>
</div>
{/* ////////// */}
<div className='w-[150px] h-[160px] bg-white shadow-xl shadow-grey pl-5 hover:scale-90 border-r-4 border-black' >
    <p className='bg-black p-3 px-6  items-center text-white w-[100px] rounded-2xl '>2 items</p>
    
    <div className='flex mt-2'>
        <div> <h1 className='font-bold text-6xl font-mono'>10</h1></div>
      <div className='grid grid-rows-2 gap-0'><p className='font-bold text-xl'>%</p><p className='font-bold text-xl'>OFF</p></div>
    </div>
    <ul className='font-bold'><li>Free Shipping</li></ul>
</div>
{/* .//////////////// */}
<div className='w-[150px] h-[160px] bg-white shadow-xl shadow-grey pl-5 hover:scale-90' >
    <p className='bg-black p-3 px-6  items-center text-white w-[100px] rounded-2xl '>2 items</p>
    
    <div className='flex mt-2'>
        <div> <h1 className='font-bold text-6xl font-mono'>10</h1></div>
      <div className='grid grid-rows-2 gap-0'><p className='font-bold text-xl'>%</p><p className='font-bold text-xl'>OFF</p></div>
    </div>
    <ul className='font-bold'><li>Free Shipping</li></ul>
</div>
{/* //////////////////// */}
</div>
                </div>
         </div>
      </div>
    </>
  )
}

export default Page1
