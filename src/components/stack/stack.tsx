import React from 'react'

function Stack() {
  return (
    <div className='shadow-lg grid justify-center bg-[#ffffff] m-[1vw] pl-[3vw] mt-[2.5vw] mb-[] mr-[2.5vw] ml-[2.5vw] pt-[3vw] pb-[4vw] pr-[3vw] pl-[3vw] rounded-xl border-[0.1vw] border-gray-200'>
        <p className='text-[6.4vw] tracking-[-0.30vw] font-[500] pl-[1.5vw] pb-[0.5vw]'>Tech Stack - MERN | AIML | Ops</p>
        <div className="pl-[2vw]">
            <div className="flex justify-center mt-[2vw] mb-[2vw]">
                <div className="text-center shadow-lg shadow-gray-200 w-[20vw] bg-gray-100 pt-[2vw] pb-[1vw] pl-[2vw] pr-[2vw] mr-[2vw] rounded-md border border-[0.1vw] border-gray-200">
                    <img src="mongo.png" alt="" className='w-[8.5vw] mx-auto'/>
                    <p className='pl-[1vw]'>Mongo</p>
                </div>
                <div className="text-center shadow-lg shadow-gray-200 w-[20vw]  bg-gray-100 pt-[2vw] pb-[1vw] pl-[2vw] pr-[2vw]  mr-[2vw] rounded-md border border-[0.1vw] border-gray-200">
                    <img src="express.png" alt="" className='w-[8.5vw] mx-auto'/>
                    <p className='pl-[1vw]'>Express</p>
                </div>
                <div className="text-center shadow-lg shadow-gray-200 w-[20vw]  bg-gray-100 pt-[2vw] pb-[1vw] pl-[2vw] pr-[2vw]  mr-[2vw] rounded-md border border-[0.1vw] border-gray-200">
                    <img src="react.png" alt="" className='w-[9vw] pb-[0.5vw] mx-auto'/>
                    <p className='pl-[1vw]'>React</p>
                </div>
                <div className="text-center shadow-lg shadow-gray-200 w-[20vw]  bg-gray-100 pt-[2vw] pb-[1vw] pl-[2vw] pr-[2vw]  mr-[2vw] rounded-md border border-[0.1vw] border-gray-200">
                    <img src="node.png" alt="" className='w-[8.05vw] pb-[0.5vw] mx-auto'/>
                    <p className='pl-[1vw]'>NodeJS</p>
                </div>
            </div>

            <div className="flex justify-center mb-[2vw]">
                <div className="text-center shadow-lg shadow-gray-200 w-[20vw] bg-gray-100 pt-[2vw] pb-[1vw] pl-[2vw] pr-[2vw] mr-[2vw] rounded-md border border-[0.1vw] border-gray-200">
                    <img src="HF.png" alt="" className='w-[8.5vw] mx-auto'/>
                    <p className='pl-[1vw]'>HF</p>
                </div>
                <div className="text-center shadow-lg shadow-gray-200 w-[20vw]  bg-gray-100 pt-[2vw] pb-[1vw] pl-[2vw] pr-[2vw]  mr-[2vw] rounded-md border border-[0.1vw] border-gray-200">
                    <img src="PyTorch.png" alt="" className='w-[8.5vw] pb-[0.2vw] mx-auto'/>
                    <p className='pl-[1vw]'>PyTorch</p>
                </div>
                <div className="text-center shadow-lg shadow-gray-200 w-[20vw]  bg-gray-100 pt-[2vw] pb-[1vw] pl-[2vw] pr-[2vw]  mr-[2vw] rounded-md border border-[0.1vw] border-gray-200">
                    <img src="tf.png" alt="" className='w-[8vw] pb-[0.5vw] mx-auto'/>
                    <p className='pl-[1vw]'>TF</p>
                </div>
                <div className="text-center shadow-lg shadow-gray-200 w-[20vw]  bg-gray-100 pt-[2vw] pb-[1vw] pl-[2vw] pr-[2vw]  mr-[2vw] rounded-md border border-[0.1vw] border-gray-200">
                    <img src="onnx.png" alt="" className='w-[8.05vw] pb-[0.5vw] mx-auto'/>
                    <p className='pl-[1vw]'>ONNX</p>
                </div>
            </div>

            <div className="flex justify-center mb-[2vw]">
                <div className="text-center shadow-lg shadow-gray-200 w-[20vw] bg-gray-100 pt-[2vw] pb-[1vw] pl-[2vw] pr-[2vw] mr-[2vw] rounded-md border border-[0.1vw] border-gray-200">
                    <img src="cplus.png" alt="" className='pl-[1vw] w-[9.5vw] mx-auto'/>
                    <p className='pl-[1vw]'>C++</p>
                </div>
                <div className="text-center shadow-lg shadow-gray-200 w-[20vw]  bg-gray-100 pt-[2vw] pb-[1vw] pl-[2vw] pr-[2vw]  mr-[2vw] rounded-md border border-[0.1vw] border-gray-200">
                    <img src="python.png" alt="" className='pl-[1vw] w-[10.5vw] pb-[0.2vw] mx-auto'/>
                    <p className='pl-[1vw]'>Python</p>
                </div>
                <div className="text-center shadow-lg shadow-gray-200 w-[20vw]  bg-gray-100 pt-[2vw] pb-[1vw] pl-[2vw] pr-[2vw]  mr-[2vw] rounded-md border border-[0.1vw] border-gray-200">
                    <img src="java.png" alt="" className='pl-[1vw] w-[10vw] pb-[0.5vw] mx-auto'/>
                    <p className='pl-[1vw]'>Java</p>
                </div>
                <div className="text-center shadow-lg shadow-gray-200 w-[20vw]  bg-gray-100 pt-[2vw] pb-[1vw] pl-[2vw] pr-[2vw]  mr-[2vw] rounded-md border border-[0.1vw] border-gray-200">
                    <img src="ts.png" alt="" className='pl-[1vw] w-[10.5vw] pt-[0.2vw] pb-[0.25vw] mx-auto'/>
                    <p className='pl-[1vw]'>TS</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
;
export default Stack;