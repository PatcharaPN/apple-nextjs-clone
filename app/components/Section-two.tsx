import React from "react";
import GreyBubble from "./greyBubble";
import Image from "next/image";
import BubbleSVG from "./BubbleSvg";
import MiniBubbleSvg from "./MiniBubbleSvg";
import MiddleBubbleSvg from "./MiddleBubbleSvg";

type Props = {};

const Section = (props: Props) => {
  return (
    <div className="h-[70vh] bg-[#F5F5F7]">
      <section className="relative h-[500px] w-screen ">
        <div className=" absolute inset-0 flex flex-col items-center justify-center pb-10">
          <div className="relative flex justify-center items-center w-full max-w-screen-lg">
            <div className="relative h-fit">
              <div className="w-full justify-center ">
                <Image
                  className="absolute z-10 right-[90%] top-[-14%]"
                  width={88}
                  height={95}
                  src={"/heart.png"}
                  alt={""}
                />
                <Image
                  className="absolute z-10 left-[65%] top-[-10%]"
                  width={161}
                  height={95}
                  src={"/mba.png"}
                  alt={""}
                />
                <Image
                  className="absolute z-10 right-[75%] bottom-[-57%]"
                  width={161}
                  height={95}
                  src={"/ipadair.png"}
                  alt={""}
                />
                <div className="absolute left-16 top-6 z-10 text-white text-[47px] -rotate-3 leading-[54px] font-bold">
                  Buy Mac <br />
                  or iPad
                  <br />
                  for college
                </div>
                <BubbleSVG />
              </div>
            </div>
            <div className="absolute -bottom-9 right-[32%] z-30">
              <div className="absolute left-6 -top-2 z-10 text-white text-[19px] -rotate-3 leading-[54px] ">
                with education savings
              </div>
              <MiniBubbleSvg />
            </div>
            <div className="absolute -bottom-40 rotate-6 right-[29%]">
              <Image
                className="absolute z-10 right-[-15%] bottom-5"
                width={103}
                height={25}
                src={"/sticker.png"}
                alt={""}
              />
              <div className="absolute left-10 top-3 z-10 text-white text-[34px] rotate-2 leading-tight">
                Get a gift card <br /> up to $150*
              </div>
              <MiddleBubbleSvg />
            </div>
            <div className="absolute -bottom-[100%] left-[36%]">
              <Image
                className="absolute z-10 right-[7px] bottom-6"
                width={30}
                height={30}
                src={"/tapback.png"}
                alt={""}
              />
              <div className="absolute left-8 top-2 z-10 text-black text-[18px] leading-tight">
                Only at the Apple Store
              </div>
              <GreyBubble />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center">
        <button className="text-[#06C] border-[#06C] border-[1px] px-5 py-2 rounded-full mt-20">
          Shop
        </button>
      </div>
    </div>
  );
};

export default Section;
