import React, { useState } from "react";
import iconImg from "../assets/icon.png";
import icon1Img from "../assets/icon1.png";
import icon2Img from "../assets/icon2.png";
import icon3Img from "../assets/icon3.png";
import icon4Img from "../assets/icon4.png";
import icon5Img from "../assets/icon5.png";

const FirstStepForm = ({ setIndex }) => {
  const questions = [
    {
      boldTag: "Student",
      normalTag: "or soon to be enrolled",
      img: iconImg,
    },
    {
      boldTag: "Professional",
      normalTag: "pursuing a career",
      img: icon1Img,
    },
    {
      boldTag: "Parent",
      normalTag: "of school-age child",
      img: icon2Img,
    },
    {
      boldTag: "Lifelong Learner",
      normalTag: "",
      img: icon3Img,
    },
    {
      boldTag: "Teacher",
      normalTag: "",
      img: icon4Img,
    },
    {
      boldTag: "Other",
      normalTag: "",
      img: icon5Img,
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleIndex = (i) => {
    if (selectedIndex === i) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(i);
    }
  };
  return (
    <div className="lg:w-[50%] mx-auto w-full">
      <div className="mt-5">
        <h1 className="text-center font-semibold text-[20px] md:text-[30px]">
          Which describes you best?
        </h1>
        <p className="text-center text-gray-500 font-normal text-[12px] md:text-[16px]">
          This will help us personalize your experience
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-y-5">
        {questions.map((item, i) => (
          <div
            onClick={() => handleIndex(i)}
            className={`rounded-lg border ${
              selectedIndex === i
                ? "border-yellow-500 shadow-xl"
                : "border-gray-300 "
            }  py-2 px-2 cursor-pointer`}
            key={i}
          >
            <div className="flex items-center gap-x-10">
              <img src={item.img} alt="" className="w-10 h-10" />
              <div className="font-normal flex items-center gap-x-2">
                <h1 className="font-semibold">{item.boldTag}</h1>
                <span>{item.normalTag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center ">
        <button
          onClick={() => setIndex(1)}
          className={`w-[50%] md:w-[20%] lg:w-[30%] mx-auto py-2 md:py-3 bg-black text-white text-[20px] rounded-lg ${
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

export default FirstStepForm;
