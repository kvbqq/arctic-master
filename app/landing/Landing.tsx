"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { FaPhoneAlt } from "react-icons/fa";
import BgImage from "@/public/landing-bg.png";

export const Landing = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <section
      className={`w-full h-svh min-h-[540px] relative flex ${
        isDesktop ? "pt-24 items-center" : "pt-28"
      } justify-center`}
    >
      <div
        className={`w-[72rem] flex gap-5 px-5 ${
          isDesktop ? null : "justify-center"
        }`}
      >
        <article
          className={`${
            isDesktop ? "w-1/2 justify-center gap-5" : "max-w-[21rem] gap-3"
          } flex flex-col`}
        >
          <h1
            className={`font-bold ${
              isDesktop ? "text-[2.5rem] leading-12" : "text-2xl leading-7"
            }`}
          >
            Zadbaj o komfortową <br />{" "}
            <span className={`text-[#0A3441]`}>temperaturę</span> <br /> w Twoim
            domu
          </h1>
          <p className={`${isDesktop ? "text-base" : "text-sm"}`}>
            Profesjonalny montaż i serwis klimatyzacji oraz pomp ciepła. Komfort
            przez cały rok dzięki efektywnym i ekologicznym rozwiązaniom
            dopasowanym do Twoich potrzeb.
          </p>
          <div
            className={`flex font-medium ${
              isDesktop ? "text-lg gap-6" : "text-base gap-3"
            }`}
          >
            <Link
              href="#oferta"
              className={`${
                isDesktop ? "px-12" : "px-8"
              } py-2 flex items-center bg-[#0A3441] text-[#F7F7F7] rounded-full`}
            >
              Oferta
            </Link>
            <Link
              href="tel:+48664624810"
              className={`${
                isDesktop ? "px-12" : "px-8"
              } py-2 flex items-center gap-3 border-2 border-[#0A3441] text-[#0A3441] rounded-full hover:bg-[#0A3441] hover:text-[#F7F7F7] transition-colors duration-500`}
            >
              <FaPhoneAlt />
              Konsultacja
            </Link>
          </div>
        </article>
        {isDesktop ? (
          <div className={`w-1/2`}>
            <Image src={BgImage} alt="" quality={100} />
          </div>
        ) : (
          <div className={`w-full h-[40%] absolute bottom-0 right-0`}>
            <Image
              src={BgImage}
              alt=""
              fill
              objectFit="contain"
              unoptimized
              objectPosition="right bottom"
              quality={100}
            />
          </div>
        )}
      </div>
    </section>
  );
};
