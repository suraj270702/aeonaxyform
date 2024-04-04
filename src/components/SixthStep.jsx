import React, { useEffect } from "react";

const SixthStep = ({ setIndex }) => {
    useEffect(()=>{

        setTimeout(()=>{
          setIndex(6)
        },3000)
    },[])
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center flex-col">
        <div>
          <div className="w-[60px] h-[60px] rounded-full bg-yellow-400 flex items-center justify-center animate-pulse ">
            <div className="w-[45px] h-[45px] bg-white rounded-full"></div>
          </div>
        </div>
        <h1 className="mt-5 font-bold text-lg md:text-xl text-center">
          Finding learning path recommendation for you based on your responses
        </h1>
      </div>
    </div>
  );
};

export default SixthStep;
