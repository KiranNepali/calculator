import React from "react";

export const Input = ({ handleClick }) => {
  return (
    <>
      {/* input section  */}
      <div className="w-full flex justify-center flex-col gap-1 font-medium text-[#F1EFEF] ">
        <div onClick={handleClick} className=" grid grid-cols-5 gap-1 ">
          <button className="bg-[#303030] p-7  text-[25px]">AC</button>
          <button className="bg-[#303030] p-7  text-[25px]">(</button>
          <button className="bg-[#303030] p-7  text-[25px]">)</button>
          <button className="bg-[#303030] p-7  text-[25px]">%</button>
          <button className="bg-[#303030] p-7  text-[25px]">/</button>
        </div>
        <div onClick={handleClick} className=" grid grid-cols-4 gap-1 ">
          <button className="bg-[#303030] p-7  text-[25px]">1</button>
          <button className="bg-[#303030] p-7  text-[25px]">2</button>
          <button className="bg-[#303030] p-7  text-[25px]">3</button>
          <button className="bg-[#303030] p-7  text-[25px]">*</button>
        </div>
        <div onClick={handleClick} className="grid grid-cols-4 gap-1 ">
          <button className="bg-[#303030] p-7  text-[25px]">4</button>
          <button className="bg-[#303030] p-7  text-[25px]">5</button>
          <button className="bg-[#303030] p-7  text-[25px]">6</button>
          <button className="bg-[#303030] p-7  text-[25px]">+</button>
        </div>
        <div onClick={handleClick} className="grid grid-cols-4 gap-1 ">
          <button className="bg-[#303030] p-7  text-[25px]">7</button>
          <button className="bg-[#303030] p-7  text-[25px]">8</button>
          <button className="bg-[#303030] p-7  text-[25px]">9</button>
          <button className="bg-[#303030] p-7  text-[25px]">-</button>
        </div>
        <div onClick={handleClick} className="grid grid-cols-4 gap-x-1 ">
          <button className="bg-[#303030] p-7 col-span-2 text-[25px]">0</button>
          <button className="bg-[#303030] p-7  text-[25px]">.</button>
          <button className="bg-[#303030] p-7  text-[25px]">=</button>
        </div>
      </div>
    </>
  );
};
