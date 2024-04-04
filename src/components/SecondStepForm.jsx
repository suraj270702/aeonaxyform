import React, { useState } from "react";
import iconImg from "../assets/icon6.png";
import icon1Img from "../assets/icon7.png";
import icon2Img from "../assets/icon8.png";
import icon3Img from "../assets/icon9.png";
import icon4Img from "../assets/icon10.png";


const SecondStepForm = ({setIndex}) => {
  const questions = [
    {
        tag:"Learning specific skills to advance my career",
        img:iconImg
    },
    {
        tag:"Exploring new topics I'm interested in",
        img:icon1Img
    },
    {
        tag:"Refreshing my math foundations",
        img:icon2Img
    },
    {
        tag:"Exercising my brain to stay sharp",
        img:icon3Img
    },
    {
        tag:"Something else",
        img:icon4Img
    }
    
  ];
  const [selectedIndex,setSelectedIndex] = useState(null)
 const handleIndex=(i)=>{
    if(selectedIndex===i){
        setSelectedIndex(null)
    }
    else{
        setSelectedIndex(i)
    }

  }
  return (
    <div className="lg:w-[50%] mx-auto w-full">
      <div className="mt-5">
        <h1 className="text-center font-semibold text-[20px] md:text-[30px]">
          Which are you most interested in ?
        </h1>
        <p className="text-center text-gray-500 font-medium text-[12px] md:text-[16px]">
          Choose just one.This will help us get started (but won't limit your experience)
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-y-5">
        {questions.map((item, i) => (
          <div
            onClick={()=>handleIndex(i)}
            className={`rounded-lg border ${selectedIndex === i ? "border-yellow-500 shadow-xl":"border-gray-300 "}  py-2 px-2 cursor-pointer`}
            key={i}
          >
            <div className="flex items-center gap-x-10">
              <img src={item.img} alt="" className="w-10 h-10" />
              <h1 className="font-normal flex items-center gap-x-2">
                
                {item.tag}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center ">
        <button onClick={()=>setIndex(2)} className={`w-[50%] lg:w-[30%] mx-auto py-2 md:py-3 bg-black text-white text-[20px] rounded-lg ${selectedIndex ===null && "opacity-10"}`} disabled={selectedIndex === null}>continue</button>

      </div>
    </div>
  );
};

export default SecondStepForm;
