import { useEffect, useState } from "react";

function LiveDate() {
  const [dateTime, setDateTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dateOptions: Intl.DateTimeFormatOptions = { 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  };
  
  const timeOptions: Intl.DateTimeFormatOptions = { 
    hour: "numeric", 
    minute: "numeric", 
    hour12: true, 
    timeZone: "Asia/Kolkata" 
  };

  return (
    <div className='md:top-[-0.05vw] md:left-[-1vw] md:fixed shadow-lg flex justify-center text-[4.5vw] tracking-[-0.04vw] bg-[#ffffff] mt-[2vw] mr-[2vw] ml-[2vw] pt-[3vw] pb-[3vw] pr-[2vw] pl-[2vw] gap-[4vw] md:rounded-2xl rounded-xl border-[0.1vw] border-gray-200 md:text-[1.1vw] md:pb-[0.6vw] md:pt-[0.6vw] md:pl-[0vw] md:pr-[0vw] md:mb-[1vw] md:flex md:justify-left md:w-[28vw] md:gap-[5vw]'>
      <div className="flex">
        <img 
          src="/pfp.jpg" 
          alt="Profile" 
          className='p-[0.5vw] w-[15vw] bg-gray-200 rounded-full md:w-[4.5vw] md:h-[4.5vw] md:p-[0.15vw]' 
        />
        <div className="pt-[0.7vw] pl-[2vw] md:pt-[0.5vw] md:pl-[0.5vw]">
          <p className='font-medium'>Aryan Chauhan</p>
          <p>Pune, India.</p>
        </div>
      </div>
      <div className="pt-[0.7vw] md:pt-[0.5vw]">
        <p>{dateTime.toLocaleDateString("en-US", dateOptions)}</p>
        <p>India, {dateTime.toLocaleTimeString("en-US", timeOptions)}</p>
      </div>
    </div>
  );
}

export default LiveDate;
