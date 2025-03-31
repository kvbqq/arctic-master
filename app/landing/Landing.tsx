"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { FaPhoneAlt } from "react-icons/fa";
import BgImage from "@/public/landing-bg.png";

export const Landing = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const [showNav, setNav] = useState(false);

  const toggle = () => {
    setNav(!showNav);
  };

  return (
    <section
      className={`w-full h-svh min-h-[540px] pt-24 flex items-center justify-center bg-no-repeat bg-right`}
    >
      <div className={`w-[72rem] flex gap-5 px-5`}>
        <article className={`w-1/2 flex flex-col justify-center gap-5`}>
          <h1 className={`font-bold text-[2.5rem] leading-12`}>
            Zadbaj o komfortową <br />{" "}
            <span className={`text-[#0A3441]`}>temperaturę</span> <br /> w Twoim
            domu
          </h1>
          <p className={`text-base`}>
            Profesjonalny montaż i serwis klimatyzacji oraz pomp ciepła. <br />{" "}
            Komfort przez cały rok dzięki efektywnym i ekologicznym <br />{" "}
            rozwiązaniom dopasowanym do Twoich potrzeb.
          </p>
          <div className={`flex gap-6 font-medium text-lg`}>
            <Link
              href="#oferta"
              className={`px-12 py-2 flex items-center bg-[#0A3441] text-[#F7F7F7] rounded-full`}
            >
              Oferta
            </Link>
            <Link
              href="tel:+48664624810"
              className={`px-12 py-2 flex items-center gap-3 border-2 border-[#0A3441] text-[#0A3441] rounded-full hover:bg-[#0A3441] hover:text-[#F7F7F7] ease-in-out duration-500`}
            >
              <FaPhoneAlt />
              Konsultacja
            </Link>
          </div>
        </article>
        <div className={`w-1/2`}>
          <Image src={BgImage} alt="" quality={100} />
        </div>
      </div>
    </section>
  );
};
