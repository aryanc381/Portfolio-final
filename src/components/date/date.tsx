function Date() {
  return (
    <div className='shadow-lg flex justify-center text-[4.5vw] bg-[#ffffff] mt-[2vw] mb-[] mr-[2vw] ml-[2vw] pt-[3vw] pb-[3vw] pr-[2vw] pl-[2vw] gap-[6vw] rounded-xl border-[0.1vw] border-gray-300'>
        <div className="flex">
            <img src="/pfp.jpg" alt="" className='p-[0.5vw] w-[15vw] bg-gray-200 rounded-[50%]'/>
            <div className="pt-[0.7vw] pl-[2vw]">
                <p className='font-medium'>Aryan Chauhan</p>
                <p className=''>Pune, Maharasthra.</p>
            </div>
            
        </div>
        <div className="pt-[0.7vw]">
            <p>August 27, 2025</p>
            <p>India, 10:32 AM</p>
        </div>
    </div>
  )
}

export default Date;