import React, { useState } from "react";
import equation1img from "../assets/equation-img.png";
import equation2img from "../assets/equation-img-1.png";
import equation3img from "../assets/equation-img-2.png";
import equation4img from "../assets/equation-img-3.png";



const FourthStepPage = ({setIndex}) => {
    const options=[
        {
            img:equation1img,
            title:"Arithmetic",
            tag:"Introductory"
        },
        {
            img:equation2img,
            title:"Basic Algebra",
            tag:"Foundational"
        },
        {
            img:equation3img,
            title:"Intermediate Algebra",
            tag:"Intermediate"
        },
        {
            img:equation4img,
            title:"Calculus",
            tag:"Advanced"
        }
    ]
    const [selectedIndex, setSelectedIndex] = useState(null);
  const handleIndex = (i) => {
    if (selectedIndex === i) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(i);
    }
  };
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-center font-semibold text-[20px] md:text-[30px]">
          What is your math comfort level ?
        </h1>
        <p className="text-center text-gray-500 font-normal text-[12px] md:text-[16px]">
          choose the highest level you feel confident in- you can always adjust
          later
        </p>
      </div>
      <div className="mt-10 w-full lg:w-[80%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-2 md:gap-x-[5] lg:gap-x-10">
        {
            options.map((item,i)=>(
                <div onClick={()=>handleIndex(i)} key={i} className={`border ${selectedIndex===i ? "border-yellow-500 shadow-xl" :"border-gray-300"}  rounded-lg py-2 w-full flex items-center justify-center cursor-pointer`}>
          <div className="flex flex-col items-center">
          <div>
            <img src={item.img} className="w-20 h-20" />
          </div>
          <div className="mt-3">
            <h1 className="text-[15px] font-semibold text-center">{item.title}</h1>
            <h1 className="text-[15px] font-medium text-gray-400 text-center">{item.tag}</h1>


          </div>
          </div>
        </div>
            ))
        }
        </div>
      </div>
      <div className="mt-5 lg:mt-10 flex items-center justify-center ">
        <button
          onClick={() => setIndex(4)}
          className={`w-[50%] md:w-[20%] lg:w-[15%] mx-auto py-2 md:py-3 bg-black text-white text-[20px] rounded-lg ${
            selectedIndex === null && "opacity-10"
          }`}
          disabled={selectedIndex === null}
        >
          continue
        </button>
      </div>
    </div>
  );
};

export default FourthStepPage;
