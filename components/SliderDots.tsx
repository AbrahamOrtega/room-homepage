import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

interface SliderDotsProps {
  className: string;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}
export default function SliderDots({
  className,
  activeIndex,
  setActiveIndex,
}: SliderDotsProps) {
  const handleForward = () => {
    if (activeIndex === 2) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleBack = () => {
    if (activeIndex === 0) {
      setActiveIndex(2);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className={className}>
      <div className="flex">
        <Link
          className="flex w-24 h-24 items-center justify-center bg-black hover:bg-veryDarkGray"
          href={`#${activeIndex - 1 < 0 ? 2 : activeIndex - 1}`}
          onClick={handleBack}
        >
          <IoIosArrowBack className="text-darkGray mx-auto text-[40px]" />
        </Link>
        <Link
          className="flex w-24 h-24 items-center justify-center bg-black hover:bg-veryDarkGray"
          href={`#${activeIndex + 1 > 2 ? 0 : activeIndex + 1}`}
          onClick={handleForward}
        >
          <IoIosArrowForward className="text-darkGray mx-auto text-[40px]" />
        </Link>
      </div>
    </div>
  );
}
