import React from 'react'

function Subscribe() {
  return (
    <>
      <div className='bg-black h-[400px] '>
       <div> <h1 className='font-bold text-4xl text-white ml-[600px] pt-16 font-mono'>SUBSCRIBE AND GET DISCOUNT NOW</h1></div>
       <div className='bg-white h-[210px] w-[640px] ml-[580px] mt-6 rounded-3xl flex items-center justify-center gap-12'>

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
    </>
  )
}

export default Subscribe
