import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import vediobp from '../assets/vedio.mp4'
import vediop from '../assets/vedioo.mp4'
import vediob from '../assets/vedio3.mp4'
function Claim() {
  return (
    <>
      <div className='bg-gradient-to-r from-yellow-100 to-rose-50 h-[600px] flex justify-evenly items-center gap-10'> 
        <div className=''>
            <h1 className='text-4xl font-serif font-bold'>Look At How Others Are
                <br></br> loving Their Bleame</h1>
                <p  className='text-xl font-serif mt-2'>Real Review From Real People</p>
                <button className='p-4 px-16 font-bold text-xl rounded-3xl mt-5 bg-black text-white'>CLAIM OFFER</button>
                <div className='flex justify-start mt-4 text-3xl'>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid />
                <p className='text-xl text-blaCK font-mono mt-1' >Rated 4.8/5 by 1,319 + Happy Customers</p>
                </div>
        </div>
        <div className='flex justify-center items-center gap-5'>
        <video className='h-[400px] w-[300px] object-cover rounded-3xl'loop autoplay muted controls src={vediobp} ></video>
        <video className='h-[500px] w-[300px] object-cover rounded-3xl'loop autoplay muted controls src={vediob} ></video>
        <video className='h-[400px] w-[300px] object-cover rounded-3xl'loop autoplay muted controls src={vediop} ></video>
        </div>
      </div>
    </>
  )
}
 
export default Claim
