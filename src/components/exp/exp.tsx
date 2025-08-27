function Experience() {
  return (
    <div className='shadow-lg grid justify-center bg-[#ffffff] m-[1vw] mt-[2.5vw] mb-[] mr-[2.5vw] ml-[2.5vw] pt-[3vw] pb-[4vw] pr-[3vw] pl-[3vw] rounded-xl border-[0.1vw] border-gray-200'>
        <p className='text-[6.4vw] tracking-[-0.30vw] font-[500] pl-[0.2vw] pb-[0.5vw]'>Experience</p>
        <div className='text-[4.5vw] '>
            <div className="shadow-lg shadow-gray-200 justify-between flex bg-gray-100 pt-[1vw] pb-[1vw] pr-[3vw] pl-[3vw] mt-[1vw] border border-[0.1vw] border-gray-200 gap-[6vw] rounded">
                <div className="">
                    <p className='font-medium'>Python & Advance AI Instructor</p>
                    <p>IIT-Delhi, Remote</p>
                </div>
                <p className='text-green-500 font-medium'>8 months</p>
            </div>

            <div className="shadow-lg shadow-gray-200 justify-between flex bg-gray-100 pt-[1vw] pb-[1vw] pr-[3vw] pl-[3vw] mt-[1vw] border border-[0.1vw] border-gray-200 gap-[1vw] rounded">
                <div className="">
                    <p className='font-medium'>Software Tech Team</p>
                    <p>Innovators Hub, MITWPU-Pune</p>
                </div>
                <p className='text-green-500 font-medium'>1 year </p>
            </div>
            <div className="shadow-lg shadow-gray-200 justify-between flex bg-gray-100 mt-[2vw] pt-[1vw] pb-[1vw] pr-[3vw] pl-[3vw] mt-[1vw] border border-[0.1vw] border-gray-200 gap-[13vw] rounded">
                <div className="">
                    <p className='font-medium'>Technical Manager</p>
                    <p>Texephyr, MITWPU-Pune</p>
                </div>
                <p className='text-green-500 font-medium'>1 year</p>
            </div>
        </div>
    </div>
  )
}

export default Experience;