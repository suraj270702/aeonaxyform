import React from "react";
import bannerImg from "../assets/banner-img.png";

const ThirdStepPage = ({setIndex}) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:justify-between ">
        <div className="w-full md:w-1/2">
        <img src={bannerImg} alt="banner image" />
        </div>
        <div className="flex flex-col items-start gap-y-5 w-full md:w-1/2">
            <h1 className="font-semibold text-[25px] md:text-[35px]">You're in the right place</h1>
            <p className="font-normal text-[16px] md:text-[18px]">
                Brilliant gets you hands-on to help to help improve your professional skills knowledge.You'll interact with concepts and solve fun problem in math,science and computer science
            </p>
        </div>
      </div>
      <div className="mt-5  lg:mt-0 flex items-center justify-center ">
        <button
          onClick={() => setIndex(3)}
          className={`w-[50%] md:w-[20%] lg:w-[15%] mx-auto py-2 md:py-3 bg-black text-white text-[20px] rounded-lg `}
          
        >
          continue
        </button>
      </div>
    </div>
  );
};

export default ThirdStepPage;
