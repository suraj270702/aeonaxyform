import React from "react";
import bannerImg from "../assets/banner-img-1.png";
import fiveStarImg from "../assets/five-star.png";

const FifthStepPage = ({setIndex}) => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img src={bannerImg} alt="Banner" />
        </div>
        <div className="w-full md:w-1/2">
          <div>
            <h1 className="text-[20px] md:text-[35px] font-semibold">
              You're on your way
            </h1>

            <div className="mt-5">
              <img src={fiveStarImg} className="h-10 " />
              <p className="font-medium mt-3">
                "Through it's engaging and well structured courses,Brilliant has
                taught me mathematical concepts that I previously struggled to
                understand.I now feel confident approaching both technical job
                interviews and real world problems"
              </p>
              <p className="mt-5 font-medium">-Jacob S.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 lg:mt-10 flex items-center justify-center ">
        <button
          onClick={() => setIndex(5)}
          className={`w-[50%] md:w-[20%] lg:w-[15%] mx-auto py-2 md:py-3 bg-black text-white text-[20px] rounded-lg `}
         
        >
          continue
        </button>
      </div>
    </div>
  );
};

export default FifthStepPage;
