"use client";

import Link from "next/link";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const ContactFooter = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <footer id="kontakt" className={`w-full flex justify-center`}>
      <div
        className={`w-[72rem] my-20 px-5 flex ${
          isDesktop ? "justify-between" : "flex-col gap-10"
        }`}
      >
        <div>
          <h1 className={`mb-5 font-bold text-2xl`}>Kontakt</h1>
          <div className={`flex flex-col gap-2`}>
            <p
              className={`flex gap-4 items-center text-xl font-semibold tracking-wider`}
            >
              <FaPhoneAlt size={26} color="#0A3441" />
              501 437 262
            </p>
            <p
              className={`flex gap-2 items-center text-xl font-semibold tracking-wider`}
            >
              <MdEmail size={32} color="#0A3441" />
              kontakt@arcticmaster.pl
            </p>
          </div>
        </div>
        <div>
          <h1 className={`mb-5 font-bold text-2xl`}>Social Media</h1>
          <div className={"flex items-center space-x-3"}>
            <Link
              href={"https://www.facebook.com/profile.php?id=61574955181785"}
            >
              <FaFacebookSquare size={36} color="#0A3441" />
            </Link>
            <Link href={"https://www.instagram.com/arcticmaster.pl/"}>
              <FaInstagram size={36} color="#0A3441" />
            </Link>
          </div>
        </div>
        <div className={`rounded-2xl`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.8675747537377!2d17.87592417666777!3d52.300257972004374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704c61a8f4f1b33%3A0xc0ea3583aa958fc5!2sTraugutta%2057%2C%2062-400%20S%C5%82upca!5e0!3m2!1spl!2spl!4v1743376408569!5m2!1spl!2spl"
            loading="lazy"
            className={`${
              isDesktop ? "w-[28rem]" : "w-full"
            } h-[18rem] rounded-2xl border border-gray-100 shadow-lg`}
          ></iframe>
        </div>
      </div>
    </footer>
  );
};
