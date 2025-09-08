import { useEffect } from "react";
import React from "react";
function Assistant() {
  useEffect(() => {
    // Dynamically load the ElevenLabs script once
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Cleanup (optional) when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='md:top-[-0.5vw] md:left-[27vw] md:fixed shadow-lg shadow-gray-300 gap-[4vw] flex justify-center bg-[#ffffff] m-[1vw] mt-[2.5vw] mr-[2.5vw] ml-[2.5vw] pt-[3vw] pb-[4vw] pr-[3vw] pl-[3vw] rounded-xl border-[0.1vw] border-gray-200 md:pt-[1.35vw] md:pb-[1.30vw] md:pl-[1vw] md:pr-[1vw] md:gap-[2.7vw]'>
      {React.createElement("elevenlabs-convai", {
        "agent-id": "agent_4401k4cnzqgbf6qafn6dz0rwjbde",
      })}
    </div>
  );
}

export default Assistant;
