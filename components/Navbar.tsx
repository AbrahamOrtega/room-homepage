import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex">
      <ul className="flex gap-x-6 text-[18px] font-[500] text-white">
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
