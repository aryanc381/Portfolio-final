function Date() {
  return (
    <div className='md:top-[-0.05vw] md:left-[-1vw] md:fixed shadow-lg flex justify-center text-[4.5vw] bg-[#ffffff] mt-[2vw] mb-[] mr-[2vw] ml-[2vw] pt-[3vw] pb-[3vw] pr-[2vw] pl-[2vw] gap-[6vw] rounded-xl border-[0.1vw] border-gray-200 md:text-[1.1vw] md:tracking-[-0vw] md:pb-[0.6vw] md:pt-[0.6vw] md:pl-[0vw] md:pr-[0vw] md:mb-[1vw] md:flex md:justify-left md:w-[28vw] md:gap-[2vw]'>
        <div className="flex">
            <img src="/pfp.jpg" alt="" className='p-[0.5vw] w-[15vw] bg-gray-200 rounded-[50%] md:w-[4.5vw] md:h-[4.5vw] md:p-[0.15vw]'/>
            <div className="pt-[0.7vw] pl-[2vw] md:pt-[0.5vw] md:pl-[0.5vw]">
                <p className='font-medium'>Aryan Chauhan</p>
                <p className=''>Portfolio Overview</p>
            </div>
            
        </div>
        <div className="pt-[0.7vw] md:pt-[0.5vw]">
            <p>August 27, 2025</p>
            <p>India, 10:32 AM</p>
        </div>
    </div>
  )
}

export default Date;