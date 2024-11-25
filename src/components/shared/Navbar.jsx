"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Container from "../ui/Container";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/"}>Shop</Link>
      </li>
      <li>
        <Link href={"/"}>Deals</Link>
      </li>
      <li>
        <Link href={"/"}>{"What's New"}</Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#F5F3FF]">
      <Container>
        <div className="h-14 lg:h-20 flex items-center justify-between">
          {/* Menu Toggle Button (Mobile View) */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {menuOpen ? (
                <HiX className="text-2xl text-gray-700 " />
              ) : (
                <CgMenuRight className="text-2xl text-gray-700 rotate-180" />
              )}
            </button>
          </div>

          {/* logo */}
          <div className="w-24 sm:w-32 md:w-36 lg:w-[162px] h-6 lg:h-10 mr-auto md:mr-0 ml-2 md:ml-0">
            <Link href={"/"}>
              <Image
                src="/assets/logo.png"
                width={162}
                height={40}
                alt="Website Logo"
              />
            </Link>
          </div>

          {/* Menu */}
          <div
            className={`absolute top-14 left-0 w-full lg:static lg:w-auto bg-white lg:bg-transparent p-5 lg:p-0 z-50 lg:flex lg:items-center transition-all duration-300 ease-in-out ${
              menuOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 lg:opacity-100"
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-6 text-[#646464] font-semibold lg:space-x-6 px-4 lg:px-0 space-y-3 lg:space-y-0">
              {links}
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Search (Responsive: Icon, Normal: Full Input) */}
            <div className="lg:hidden">
              <IoSearch className="text-2xl text-gray-700" />
            </div>
            <div className="hidden lg:block lg:w-[242px] h-[35px] relative">
              <IoSearch className="absolute left-2 top-2.5" />
              <input
                type="text"
                placeholder="Search"
                className="pl-8 rounded-full w-full h-full outline-none placeholder:text-black"
              />
            </div>
            <p className="relative">
              <TbShoppingBag className="text-3xl" />
              <span className="bg-black text-white w-4 h-4 rounded-full absolute top-0 -right-[2px] text-xs text-center">
                0
              </span>
            </p>
            <p>
              <FaRegUser className="text-2xl" />
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
