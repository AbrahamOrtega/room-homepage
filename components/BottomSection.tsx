import Image from "next/image";

export default function BottomSection() {
  return (
    <div className="flex flex-col md:flex-row w-full h-fit md:h-[30%] gap-y-12">
      <div className="flex flex-col w-full md:w-[30%]">
        <Image
          src={"/images/image-about-dark.jpg"}
          alt="dark"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col w-full md:w-[40%] h-full justify-center px-8 gap-y-2">
        <h1 className="font-[700] tracking-[8px]">ABOUT OUR FURNITURE</h1>
        <p className="text-darkGray">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="flex flex-col w-full md:w-[30%]">
        <Image
          src={"/images/image-about-light.jpg"}
          alt="light"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
