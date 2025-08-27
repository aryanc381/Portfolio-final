import React from 'react';

function Research() {
  return (
    <div className='shadow-lg shadow-gray-300 gap-[4vw] flex justify-center bg-[#ffffff] m-[1vw] mt-[2.5vw] mb-[] mr-[2.5vw] ml-[2.5vw] pt-[3vw] pb-[4vw] pr-[3vw] pl-[3vw] rounded-xl border-[0.1vw] border-gray-200'>
      <p className='text-[6.4vw] tracking-[-0.30vw] font-[500] pt-[2vw] pl-[0.2vw] pb-[0.5vw]'>Connect</p>
        <div className="flex justify-center gap-[3vw]">
          <img src="/whatsapp.png" alt="" className=' w-[13vw]'/>
          <img src="/linkedin.png" alt="" className='w-[13vw]'/>
          <img src="/github.png" alt="" className='w-[13vw]'/>
          <img src="/gmail.png" alt="" className='w-[13vw]'/>
        </div>
        
    </div>
  )
}

export default Research;