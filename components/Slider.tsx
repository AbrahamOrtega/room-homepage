import Image from "next/image";
import Navbar from "./Navbar";
import { HiArrowLongRight } from "react-icons/hi2";
import SliderDots from "./SliderDots";
import { useState } from "react";

const images = [
  "/images/desktop-image-hero-1.jpg",
  "/images/desktop-image-hero-2.jpg",
  "/images/desktop-image-hero-3.jpg",
];

const content = [
  {
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex w-full h-[70%]">
      {/* Image Slider */}
      <div className="flex flex-col w-3/5 h-full relative">
        <div className="flex w-full h-full overflow-x-hidden snap-x snap-mandatory scroll-smooth">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              id={index.toString()}
              alt={"hero"}
              width={1000}
              height={1000}
              className="object-cover w-full h-full snap-center"
            />
          ))}
        </div>

        <div className="flex items-center absolute p-12 gap-x-12">
          <h1 className="text-[32px] text-white">room</h1>
          <Navbar />
        </div>
      </div>

      {/* Text Slider */}
      <div className="flex flex-col w-2/5 px-20 h-full justify-center relative">
        {/* Content */}
        <div className="flex flex-col w-full gap-y-6">
          {/* Dynamic content */}
          <div className="flex flex-col gap-y-6">
            <h1 className="text-[48px] font-[700] leading-[1.2]">
              {content[activeIndex].title}
            </h1>
            <p className="text-darkGray">{content[activeIndex].description}</p>
          </div>

          <button className="flex items-center text-black hover:text-darkGray">
            <span className="text-[18px] tracking-[16px]">SHOP NOW</span>
            <HiArrowLongRight className="text-[40px]" />
          </button>
        </div>

        {/* Dots */}
        <SliderDots
          className={"absolute bottom-0 left-0"}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  );
}
