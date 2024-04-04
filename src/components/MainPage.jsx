import React, { useState } from "react";
import Item1img from '../assets/item1.png'

const MainPage = () => {
    const [selectedIndex,setSelectedIndex] = useState(null)
    const handleIndex =(i)=>{
        if(i===selectedIndex){
            setSelectedIndex(null)
        }
        else{
            setSelectedIndex(i)
        }
    }
  return (
    <div>
      <div className="w-full lg:w-[80%] mx-auto">
        <div className="mt-5">
          <h1 className="text-center font-semibold text-[20px] md:text-[30px]">
            Learning path based on your answers
          </h1>
          <p className="text-center text-gray-500 font-normal text-[12px] md:text-[16px]">
            Choose one to get started.You can switch anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 mt-10">
          <div className={`border ${selectedIndex===0 ? "border-yellow-500 shadow-xl" : "border-gray-400"}  rounded-lg p-5 relative`} onClick={()=>handleIndex(0)}>
            <div className="flex flex-row gap-x-3">
                <div className="w-[60%]">
                 <h1 className="font-bold text-xl">Foundational Math</h1>
                 <p>Build your foundational skill in algebra,geometry and probability</p>
                </div>
                <div className="w-[40%]">
                   <img src={Item1img} alt="" />
                </div>
                 

            </div>
            <div className="absolute w-[90px] h-[20px] rounded-[30px] bg-yellow-400 -top-2 left-[40%] text-[10px] text-center font-bold ">MOST POPULAR</div>
          </div>
          <div className={`border ${selectedIndex===1 ? "border-yellow-500 shadow-xl" : "border-gray-400"}  rounded-lg p-5 relative`} onClick={()=>handleIndex(1)}>
            <div className="flex flex-row gap-x-3">
                <div className="w-[60%]">
                 <h1 className="font-bold text-xl">Mathematical Thinking</h1>
                 <p>Build your foundational skill in algebra,geometry and probability</p>
                </div>
                <div className="w-[40%]">
                   <img src={Item1img} alt="" />
                </div>
                 

            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MainPage;
