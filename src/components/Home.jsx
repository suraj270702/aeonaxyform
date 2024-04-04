import React, { useState } from "react";
import FirstStepForm from "./FirstStepForm";
import SecondStepForm from "./SecondStepForm";
import ThirdStepPage from "./ThirdStepPage";
import FourthStepPage from "./FourthStepPage";
import FifthStepPage from "./FifthStepPage";
import SixthStep from "./SixthStep";
import MainPage from "./MainPage";
import { ChevronLeft } from "lucide-react";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [userResponse, setUserResponse] = useState({
    question1: "",
    question2: "",
    question3: "",
  });
  return (
    <div className="w-[96%] lg:w-[80%] mx-auto">
      <div>
       {
        index < 5 && (
          <div className="flex items-center justify-center gap-x-2 mt-10">
  {
    index !==0 && (
      <div className="flex items-center -mt-3 cursor-pointer" onClick={()=>setIndex((index)=>index-1)}>
    <ChevronLeft />
  </div>
    )
  }
  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
    <div
      className={`bg-green-600 h-1.5 rounded-full dark:bg-green-800 ${
        index === 1
          ? "w-[30%]"
          : index === 2
          ? "w-[40%]"
          : index === 2
          ? "w-[50%]"
          : index === 3
          ? "w-[60%]"
          : index === 4
          ? "w-full"
          : "w-[20%]"
      }`}
    ></div>
  </div>
</div>

        )
       }
        {index === 0 && (
          <div className="mt-10">
            <FirstStepForm setIndex={setIndex} />
          </div>
        )}

        {index === 1 && (
          <div className="mt-10">
            <SecondStepForm setIndex={setIndex} />
          </div>
        )}
        {index === 2 && (
          <div className="mt-10">
            <ThirdStepPage setIndex={setIndex} />
          </div>
        )}
        {index === 3 && (
          <div className="mt-10">
            <FourthStepPage setIndex={setIndex} />
          </div>
        )}
        {index === 4 && (
          <div className="mt-10">
            <FifthStepPage setIndex={setIndex} />
          </div>
        )}
        {index === 5 && (
          <div className="mt-10">
            <SixthStep setIndex={setIndex} />
          </div>
        )}
        {index === 6 && (
          <div className="mt-10">
            <MainPage s />
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;
