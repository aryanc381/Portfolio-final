function Education() {
  return (
    <div className='shadow-lg grid justify-center bg-[#ffffff] m-[1vw] mt-[2.5vw] mb-[] mr-[2.5vw] ml-[2.5vw] pt-[2vw] md:pt-[0.2vw] pb-[4vw] pr-[3vw] pl-[3vw] rounded-xl border-[0.1vw] border-gray-200 md:fixed md:pb-[1vw] md:pl-[1vw] md:pr-[1vw] md:mt-[20.6vw] md:mb-[1vw] md:ml-[1vw] md:mr-[0vw]'>
        <p className='text-[6.4vw] tracking-[-0.30vw] font-[500] pl-[0.2vw] pb-[0.5vw] md:text-[1.8vw] md:tracking-[-0.1vw] md:pb-[0vw] md:mt-[0vw]'>Education</p>
        <div className='text-[4.5vw] md:text-[1.40vw] md:tracking-[-0.05vw]'>
            <div className="shadow-lg shadow-gray-200 justify-between flex bg-gray-100 pt-[1vw] pb-[1vw] pr-[3vw] pl-[3vw] mt-[1vw] border border-[0.1vw] border-gray-200 gap-[20vw] rounded md:pt-[0.5vw] md:pb-[0.5vw] md:pl-[0.5vw] md:pr-[0.5vw] md:gap-[10vw] md:justify-center md:w-[30vw] md:mt-[0.25vw]">
                <div className="">
                    <p className='font-medium'>MIT World Peace University</p>
                    <p>Pune, Maharashtra</p>
                </div>
                <p className='text-yellow-400 font-medium'>2026</p>
            </div>

            <div className="shadow-lg shadow-gray-200 justify-between flex bg-gray-100 pt-[1vw] pb-[1vw] pr-[3vw] pl-[3vw] mt-[1vw] border border-[0.1vw] border-gray-200 gap-[20vw] rounded md:pt-[0.5vw] md:pb-[0.5vw] md:pl-[0.5vw] md:pr-[0.5vw] md:gap-[13vw] md:justify-center md:w-[30vw]">
                <div className="">
                    <p className='font-medium'>Arham Junior College</p>
                    <p>Pune, Maharashtra</p>
                </div>
                <p className='text-green-500 font-medium'>2022</p>
            </div>
            <div className="shadow-lg shadow-gray-200 justify-between flex bg-gray-100 pt-[1vw] pb-[1vw] pr-[3vw] pl-[3vw] mt-[1vw] border border-[0.1vw] border-gray-200 gap-[20vw] rounded md:pt-[0.5vw] md:pb-[0.5vw] md:pl-[0.5vw] md:pr-[0.5vw] md:gap-[3.5vw] md:justify-center md:w-[30vw]">
                <div className="">
                    <p className='font-medium'>Symbiosis Primary & Secondary School</p>
                    <p>Pune, Maharashtra</p>
                </div>
                <p className='text-green-500 font-medium'>2026</p>
            </div>
        </div>
    </div>
  )
}

export default Education;