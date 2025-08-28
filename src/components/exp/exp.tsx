function Experience() {
  return (
    <div className="md:fixed md:top-[1vw] md:left-[55.5vw] shadow-lg grid justify-center bg-[#ffffff] 
                    m-[1vw] mt-[2.5vw] pr-[3vw] pl-[3vw] pt-[2vw] pb-[4vw]
                    rounded-xl border-[0.1vw] border-gray-200
                    md:pt-[0.4vw] md:pb-[0.7vw] md:pl-[1vw] md:pr-[1vw] md:w-[30vw] md:mt-[1vw]">
      
      <p className="text-[6.4vw] tracking-[-0.30vw] font-[500] pl-[0.2vw] pb-[0.5vw]
                    md:text-[1.8vw] md:tracking-[-0.1vw] md:pb-[0vw]">
        Experience &nbsp;⇒
      </p>

      <div className="text-[4.5vw] md:text-[1.3vw] md:tracking-[-0.05vw]">
        
        <div className="shadow-lg shadow-gray-200 flex justify-between bg-gray-100 
                        pt-[1vw] pb-[1vw] pl-[3vw] pr-[3vw] mt-[1vw] 
                        border border-[0.1vw] border-gray-200 gap-[6vw] rounded 
                        md:pt-[0.5vw] md:pb-[0.5vw] md:pl-[0.5vw] md:mt-[1vw] md:pr-[0.5vw] md:gap-[4vw] md:w-[28vw]">
          <div>
            <p className="font-medium">Python & Advance AI Instructor</p>
            <p>IIT-Delhi, Remote</p>
          </div>
          <p className="text-green-500 font-medium">8 months</p>
        </div>

        <div className="shadow-lg shadow-gray-200 flex justify-between bg-gray-100 
                        pt-[1vw] pb-[1vw] pl-[3vw] pr-[3vw] mt-[1vw] 
                        border border-[0.1vw] border-gray-200 gap-[1vw] rounded 
                        md:pt-[0.5vw] md:pb-[0.5vw] md:pl-[0.5vw] md:pr-[0.5vw] md:gap-[4vw] md:w-[28vw]">
          <div>
            <p className="font-medium">Software Tech Team</p>
            <p>Innovators Hub, MITWPU-Pune</p>
          </div>
          <p className="text-green-500 font-medium">1 year</p>
        </div>

        <div className="md:hidden shadow-lg shadow-gray-200 flex justify-between bg-gray-100 
                        pt-[1vw] pb-[1vw] pl-[3vw] pr-[3vw] mt-[1vw] 
                        border border-[0.1vw] border-gray-200 gap-[13vw] rounded 
                        md:pt-[0.5vw] md:pb-[0.5vw] md:pl-[0.5vw] md:pr-[0.5vw] md:gap-[4vw] md:w-[28vw]">
          <div className="">
            <p className="font-medium">Technical Manager</p>
            <p>Texephyr, MITWPU-Pune</p>
          </div>
          <p className="text-green-500 font-medium">1 year</p>
        </div>

      </div>
    </div>
  );
}

export default Experience;
