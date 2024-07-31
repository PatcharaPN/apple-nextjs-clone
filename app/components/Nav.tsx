"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Nav = () => {
  const [popover, setPopover] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => {
    setPopover(item);
  };
  const handleMouseLeave = () => {
    setPopover(null);
  };

  return (
    <nav className="z-10 w-[100vw] flex justify-center items-center bg-black/70 backdrop-blur-md h-12 sticky top-0">
      <ul className="flex gap-10 text-[14px] text-[#D1D1D1] ">
        <li>
          <Link href={""}>
            <Icon width={20} icon="ic:baseline-apple" />
          </Link>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("store")}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <Link href={""} className="text-[#D1D1D1] hover:text-[#ffffff]">
            Store
          </Link>
          {
            <div
              className={`fixed top-11 left-1/2 transform -translate-x-1/2 w-screen max-w-screen h-[340px] bg-black/70 backdrop-blur-md flex justify-center items-center transition-opacity duration-300 ease-in-out ${
                popover === "store"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-100"
              }`}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-[60%] h-full mt-20">
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-white">
                    <p className="text-[15px] opacity-30">Shop</p>
                    <ul className="flex flex-col gap-2 text-[17px]">
                      <li>Shop the Latest</li>
                      <li>Mac</li>
                      <li>iPad</li>
                      <li>iPhone</li>
                      <li>Apple Watch</li>
                      <li>Apple Vision Pro</li>
                      <li>Accessories</li>
                    </ul>
                  </div>
                  <div className="text-white">
                    <p className="text-[15px] opacity-30">Quick Links</p>
                    <ul className="flex flex-col gap-2">
                      <li>Find a Store</li>
                      <li>Order Status</li>
                      <li>Apple Trade In</li>
                      <li>Financing</li>
                      <li>College Student Offer</li>
                    </ul>
                  </div>
                  <div className="text-white">
                    <p className="text-[15px] opacity-30">
                      Shop Special Stores
                    </p>
                    <ul className="flex flex-col gap-2">
                      <li>Certified Refurbished</li>
                      <li>Education</li>
                      <li>Business</li>
                      <li>Veterabs and Military</li>
                      <li>Government</li>
                    </ul>
                  </div>
                  <div className="text-white"></div>
                </div>
              </div>
            </div>
          }
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("Mac")}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <Link className="text-[#D1D1D1] hover:text-[#ffffff]" href={""}>
            Mac
          </Link>{" "}
          {
            <div
              className={`fixed top-11 left-1/2 transform -translate-x-1/2 w-screen max-w-screen h-fit pb-10 bg-black/70 backdrop-blur-md flex justify-center items-center transition-opacity duration-300 ease-in-out ${
                popover === "Mac"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-100"
              }`}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-[60%] h-full mt-10">
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-white">
                    <p className="text-[15px] opacity-30">Explore Mac</p>
                    <ul className="flex flex-col gap-2 text-[17px] mb-5">
                      <li>Explore All Mac</li>
                      <li>Macbook Air</li>
                      <li>Macbook Pro</li>
                      <li>iMac</li>
                      <li>Mac mini</li>
                      <li>Mac Studio</li>
                      <li>Mac Pro</li>
                      <li>Displays</li>
                    </ul>
                    <ul className="text-[10px] flex flex-col gap-2">
                      <li>Compare Mac</li>
                      <li>Mac Does That</li>
                    </ul>
                  </div>
                  <div className="text-white">
                    <p className="text-[15px] opacity-30">Shop Mac</p>
                    <ul className="flex flex-col gap-2">
                      <li>Shop Mac</li>
                      <li>Help Me Choose</li>
                      <li>Mac Accessories</li>
                      <li>Apple Trade In</li>
                      <li>Financing</li>
                      <li>College Student Offer</li>
                    </ul>
                  </div>
                  <div className="text-white">
                    <p className="text-[15px] opacity-30">More from Mac</p>
                    <ul className="flex flex-col gap-2">
                      <li>Mac Support</li>
                      <li>AppleCare+ for Mac</li>
                      <li>macOS Sequioia Preview</li>
                      <li>Apple Intelligence</li>
                      <li>Apps by Apple</li>
                      <li>Continuity</li>
                      <li>iCloud+</li>
                      <li>Mac for Business</li>
                      <li>Education</li>
                    </ul>
                  </div>
                  <div className="text-white"></div>
                </div>
              </div>
            </div>
          }
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("iPad")}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <Link className="text-[#D1D1D1] hover:text-[#ffffff]" href={""}>
            iPad
          </Link>{" "}
          {
            <div
              className={`fixed top-11 left-1/2 transform -translate-x-1/2 w-screen max-w-screen h-fit pb-10 bg-black/70 backdrop-blur-md flex justify-center items-center transition-opacity duration-300 ease-in-out ${
                popover === "iPad"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-100"
              }`}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-[60%] h-full mt-10">
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-white">
                    <p className="text-[15px] opacity-30">Explore Mac</p>
                    <ul className="flex flex-col gap-2 text-[17px] mb-5">
                      <li>Explore All iPad</li>
                      <li>iPad Pro</li>
                      <li>iPad Air</li>
                      <li>iPad</li>
                      <li>iPad mini</li>
                      <li>Apple Pencil</li>
                      <li>Keyboards</li>
                    </ul>
                    <ul className="text-[10px] flex flex-col gap-2">
                      <li>Compare iPad</li>
                      <li>Why iPad</li>
                    </ul>
                  </div>
                  <div className="text-white">
                    <p className="text-[15px] opacity-30">Shop Mac</p>
                    <ul className="flex flex-col gap-2">
                      <li>Shop iPad</li>
                      <li>iPad Accessories</li>
                      <li>Apple Trade In</li>
                      <li>Financing</li>
                      <li>College Student Offer</li>
                    </ul>
                  </div>
                  <div className="text-white">
                    <p className="text-[15px] opacity-30">More from Mac</p>
                    <ul className="flex flex-col gap-2">
                      <li>iPad Support</li>
                      <li>AppleCare+ for iPad</li>
                      <li>iPadOS 18 Preview</li>
                      <li>Apple Intelligence</li>
                      <li>Apps by Apple</li>
                      <li>iCloud+</li>
                      <li>Education</li>
                    </ul>
                  </div>
                  <div className="text-white"></div>
                </div>
              </div>
            </div>
          }
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("iPhone")}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <Link className="text-[#D1D1D1] hover:text-[#ffffff]" href={""}>
            iPhone
          </Link>{" "}
          {
            <div
              className={`fixed top-11 left-1/2 transform -translate-x-1/2 w-screen max-w-screen h-fit pb-10 bg-black/70 backdrop-blur-md flex justify-center items-center transition-opacity duration-300 ease-in-out ${
                popover === "iPhone"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-100"
              }`}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-[60%] h-full mt-10">
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-white">
                    <p className="text-[15px] opacity-30">Explore Mac</p>
                    <ul className="flex flex-col gap-2 text-[17px] mb-5">
                      <li>Explore All iPhone</li>
                      <li>iPhone 15 Pro</li>
                      <li>iPhone 15</li>
                      <li>iPhone 14</li>
                      <li>iPhone 13</li>
                      <li>iPhone SE</li>
                    </ul>
                    <ul className="text-[10px] flex flex-col gap-2">
                      <li>Compare iPhone</li>
                      <li>Switch from Android</li>
                    </ul>
                  </div>
                  <div className="text-white">
                    <p className="text-[15px] opacity-30">Shop Mac</p>
                    <ul className="flex flex-col gap-2">
                      <li>Shop iPhone</li>
                      <li>iPhone Accessories</li>
                      <li>Apple Trade In</li>
                      <li>Carrier Deals at Apple</li>
                      <li>Financing</li>
                    </ul>
                  </div>
                  <div className="text-white">
                    <p className="text-[15px] opacity-30">More from Mac</p>
                    <ul className="flex flex-col gap-2">
                      <li>iPhone Support</li>
                      <li>AppleCare+ for iPone</li>
                      <li>iOS 18 Preview</li>
                      <li>Apple Intelligence</li>
                      <li>Apps by Apple</li>
                      <li>iPhone Privacy</li>
                      <li>iCloud+</li>
                      <li>Wallet,Pay, Card</li>
                      <li>Siri</li>
                    </ul>
                  </div>
                  <div className="text-white"></div>
                </div>
              </div>
            </div>
          }
        </li>
        <li>
          <Link href={""}>Watch</Link>
        </li>
        <li>
          <Link href={""}>Vision</Link>
        </li>
        <li>
          <Link href={""}>AirPods</Link>
        </li>
        <li>
          <Link href={""}>TV & Home</Link>
        </li>
        <li>
          <Link href={""}>Entertainment</Link>
        </li>
        <li>
          <Link href={""}>Accessories</Link>
        </li>
        <li>
          <Link href={""}>Support</Link>
        </li>
        <li>
          <Link href={""}>
            <Icon width={20} icon="ic:sharp-search" />
          </Link>
        </li>
        <li>
          <Link href={""}>
            <Icon width={20} icon="solar:cart-outline" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
