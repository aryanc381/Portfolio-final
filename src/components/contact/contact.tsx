function Contact() {
  return (
    <div className='md:top-[-1.1vw] md:left-[27vw] md:fixed shadow-lg shadow-gray-300 gap-[4vw] flex justify-center bg-[#ffffff] m-[1vw] mt-[2.5vw] mb-[] mr-[2.5vw] ml-[2.5vw] pt-[3vw] pb-[4vw] pr-[3vw] pl-[3vw] rounded-xl border-[0.1vw] border-gray-200 md:pt-[1.35vw] md:pb-[1.30vw] md:pl-[1vw] md:pr-[1vw] md:gap-[2.7vw]'>
      <p className='text-[6.4vw] tracking-[-0.30vw] font-[500] pt-[2vw] pl-[0.2vw] pb-[0.5vw] md:text-[1.8vw] md:tracking-[-0.05vw] md:pt-[0.15vw] md:pb-[0vw] md:pl-[0vw] md:pr-[0vw]'>Connect</p>
        <div className="flex justify-center gap-[3vw] md:gap-[1vw]">
          <img src="/whatsapp.png" alt="" className=' w-[13vw] md:w-[3vw] md:h-[3vw]'/>
          <img src="/linkedin.png" alt="" className='w-[13vw] md:w-[3vw] md:h-[3vw]'/>
          <img src="/github.png" alt="" className='w-[13vw] md:w-[3vw] md:h-[3vw]'/>
          <img src="/gmail.png" alt="" className='w-[13vw] md:w-[3vw] md:h-[3vw]'/>
        </div>
        
    </div>
  )
}

export default Contact;