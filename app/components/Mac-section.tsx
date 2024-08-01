import React from "react";
import Image from "next/image";

const Macsection = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center relative bg-[#F5F5F7]">
      <div className="relative w-[718px] h-[348px] bg-no-repeat bg-cover mt-[300px]">
        <Image className="object-cover" src="/mbam3.png" alt="" layout="fill" />
      </div>
      <div className="flex flex-col gap-5 mt-4 absolute top-4 text-center">
        <p className="text-[60px] font-bold">Macbook Air</p>
        <p className="text-[30px]">Lean. Mean. M3 machine</p>
        <div className="flex justify-center items-center gap-5">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Learn more
          </button>
          <button className=" text-[#0367CC] border-[1px] border-[#0367CC] px-6 py-2 rounded-full">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Macsection;
