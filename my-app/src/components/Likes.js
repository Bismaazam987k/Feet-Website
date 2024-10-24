import React from 'react'
// import img1 from '../assets/multi.png';
import { LiaStarSolid } from "react-icons/lia";
import img4 from '../assets/hello.png';
import img2 from '../assets/grey7.png';
import img3 from '../assets/peach.png';
import img5 from '../assets/multi5.png';
function Likes() {
  return (
    <div className=''>
         <div> <h1 className='font-bold text-5xl text-black ml-[700px] pt-16 font-sarif'>You May Also Like</h1></div>
       <div className='grid grid-cols-4 px-24 gap-8 p-16'>
        <div>
            <img className='h-[250px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img2} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 cursor-pointer'>
                <a className='text-b'>Sterling Silver Kit</a>
                <p className='text-2xl text-blaCK font-serif font-bold' > $119.<sup>oo</sup></p>
                <div className='flex justify-start mt-1'>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid />
                <p className='text-2xl text-blaCK font-mono font-semibold' > 5.0(200)</p>
                </div>
            </div>

        </div>
        <div>
            <img className='h-[250px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img3} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 cursor-pointer'>
                <a className='text-b'>Sterling Silver Kit</a>
                <p className='text-2xl text-blaCK font-serif font-bold' > $119.<sup>oo</sup></p>
                <div className='flex justify-start mt-1'>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <p className='text-2xl text-blaCK font-mono font-semibold' > 5.0(200)</p>
                </div>
            </div>
        </div>
        <div>
            <img className='h-[250px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img4} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 cursor-pointer'>
                <a className='text-b'>Sterling Silver Kit</a>
                <p className='text-2xl text-blaCK font-serif font-bold' > $119.<sup>oo</sup></p>
                <div className='flex justify-start mt-1'>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid />
                <p className='text-2xl text-blaCK font-mono font-semibold' > 5.0(200)</p>
                </div>
            </div>
        </div>
        <div>
            <img className='h-[250px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img5} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 cursor-pointer'>
                <a className='text-b'>Sterling Silver Kit</a>
                <p className='text-2xl text-blaCK font-serif font-bold' > $119.<sup>oo</sup></p>
                <div className='flex justify-start mt-1'>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <p className='text-2xl text-blaCK font-mono font-semibold' > 5.0(200)</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Likes
