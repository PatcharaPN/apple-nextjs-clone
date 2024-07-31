import Image from "next/image";
import Nav from "./components/Nav";
import { Icon } from "@iconify/react/dist/iconify.js";
import BubbleSVG from "./components/BubbleSvg";

export default function Home() {
  return (
    <main className="w-screen flex flex-col h-screen">
      <Nav />
      <div className="absolute top-0 left-0 w-full h-[90%]">
        <Image
          className="shadow-2xl"
          src="/hero_apple_vision_pro_enhanced_endframe__b917czne63hy_large.jpg"
          alt="Hero Apple Vision Pro"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute w-full bottom-[50px] left-1/2 flex-col gap-2 flex transform -translate-x-1/2 -translate-y-1 text-white text-center">
          <div className="flex justify-center items-center text-[55px]">
            <Icon icon="ic:baseline-apple" />
            <p>Vision Pro</p>
          </div>
          <div className="w-full flex justify-center mb-2 font-extralight items-center text-[32px]">
            <p>You've never seen everything like this before.</p>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <button className="bg-white text-black px-4 py-2 rounded-full">
              Learn more
            </button>
            <button className="border-white border-[1px] px-6 py-2 rounded-full">
              Buy
            </button>
          </div>
        </div>
      </div>
      <section className="h-screen w-screen">
        <div>
          <h1>sadasdads</h1>
        </div>
      </section>
    </main>
  );
}
