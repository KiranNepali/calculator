import React from "react";

export const Result = ({ input, output }) => {
  return (
    <>
      {/* output section  */}
      <div className="flex flex-col justify-center w-full item-end mt-12 h-full pr-6 ">
        <div
          id="input"
          className="bg-[#191717] w-full font-bold  text-[4rem] sm:text-4xl text-[#F1EFEF] text-end"
        >
          {output}
        </div>
        <div
          type="text"
          id="input"
          className="bg-[#191717] w-full text-[2rem] sm:text-xl text-end font-medium text-[#868585]"
        >
          {input}
        </div>
      </div>
    </>
  );
};
