"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

import { navLinks } from "@/constants/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import Logo from "@/public/logo.png";
import LogoWhite from "@/public/logo-white.png";

interface NavMenuMobileProps {
  showNav: boolean;
  toggleNav: () => void;
}

const NavMenuDesktop = () => {
  return (
    <div className={`flex gap-12 font-medium text-lg text-[#323232]`}>
      <ul className={`py-2 flex gap-12`}>
        {navLinks.map((item, i) => (
          <li key={i}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <Link
        href={"tel:+48664624810"}
        className={`px-10 py-2 flex items-center gap-3 border-2 border-[#0A3441] rounded-full hover:bg-[#0A3441] hover:text-[#F7F7F7] ease-in-out duration-500`}
      >
        <FaPhoneAlt />
        Konsultacja
      </Link>
    </div>
  );
};

const NavMenuMobile: React.FC<NavMenuMobileProps> = ({ toggleNav }) => {
  return (
    <div
      className={`w-full h-svh absolute inset-0 flex flex-col gap-10 justify-center items-center text-center font-medium text-lg text-[#F7F7F7] bg-[#0A3441] z-10`}
    >
      <ul className={`flex flex-col gap-8`}>
        {navLinks.map((item, i) => (
          <li key={i}>
            <Link href={item.href} onClick={toggleNav}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={"tel:+48664624810"}
        className={`px-10 py-2 flex items-center gap-3 border-1 border-[#F7F7F7] rounded-full`}
      >
        <FaPhoneAlt />
        Konsultacja
      </Link>
    </div>
  );
};

export const Nav = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const [showNav, setNav] = useState(false);

  const toggle = () => {
    setNav(!showNav);
  };

  useEffect(() => {
    if (showNav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showNav]);

  if (isDesktop && showNav) {
    setNav(false);
  }

  return (
    <nav className={`w-full absolute flex justify-center`}>
      <div
        className={`${
          isDesktop ? "py-8" : "py-5"
        } w-[72rem] px-5 flex items-end justify-between z-20`}
      >
        <Link href="/" onClick={() => setNav(false)}>
          <Image
            src={isDesktop || !showNav ? Logo : LogoWhite}
            alt="Arctic Master"
            quality={100}
            className={`${isDesktop ? "w-36" : "w-28"}`}
          />
        </Link>
        {isDesktop ? (
          <NavMenuDesktop />
        ) : (
          <button
            onClick={toggle}
            className={`p-2 bg-[#0A3441] rounded-lg hover:cursor-pointer`}
          >
            {showNav ? (
              <HiOutlineX size={28} color="#F7F7F7" />
            ) : (
              <HiOutlineMenu size={28} color="#F7F7F7" />
            )}
          </button>
        )}
      </div>
      {showNav && !isDesktop ? (
        <NavMenuMobile showNav={showNav} toggleNav={toggle} />
      ) : null}
    </nav>
  );
};
