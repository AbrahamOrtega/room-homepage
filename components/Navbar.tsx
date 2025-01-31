import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="flex">
      <button className="md:hidden" onClick={() => setOpenNav(!openNav)}>
        <IoMdMenu className="flex md:hidden text-white text-[40px]" />
      </button>

      {/* Mobile Navbar */}
      {openNav && (
        <div className="fixed flex md:hidden w-full  h-full bg-black/50 items-start z-20 top-0 left-0">
          <ul className="flex gap-x-6 text-[18px] items-center font-[700] text-black px-8 py-16 bg-white w-full">
            <button className="mr-12">
              <IoMdClose
                className="text-darkGray text-[40px]"
                onClick={() => setOpenNav(!openNav)}
              />
            </button>
            <li className="navbarItem">
              <Link href="/">home</Link>
              <div className="navbarUnderline" />
            </li>
            <li className="navbarItem">
              <Link href="/">shop</Link>
              <div className="navbarUnderline" />
            </li>
            <li className="navbarItem">
              <Link href="/">about</Link>
              <div className="navbarUnderline" />
            </li>
            <li className="navbarItem">
              <Link href="/">contact</Link>
              <div className="navbarUnderline" />
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Navbar */}
      <ul className="hidden md:flex gap-x-6 text-[18px] font-[500] text-white">
        <li className="navbarItem">
          <Link href="/">home</Link>
          <div className="navbarUnderline" />
        </li>
        <li className="navbarItem">
          <Link href="/">shop</Link>
          <div className="navbarUnderline" />
        </li>
        <li className="navbarItem">
          <Link href="/">about</Link>
          <div className="navbarUnderline" />
        </li>
        <li className="navbarItem">
          <Link href="/">contact</Link>
          <div className="navbarUnderline" />
        </li>
      </ul>
    </div>
  );
}
