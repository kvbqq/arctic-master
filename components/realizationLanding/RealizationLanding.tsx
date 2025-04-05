"use client";

import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { FaRegArrowAltCircleRight } from "react-icons/fa";

interface RealizationProps {
  id: string;
  title: string;
  url: string;
}

export const RealizationLanding: React.FC<RealizationProps> = ({
  id,
  title,
  url,
}) => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <div
      key={id}
      className={`min-w-[350px] h-[250px] relative group hover:cursor-pointer`}
      onClick={() => (window.location.href = "/realizacje#" + id)}
    >
      <div
        className={`w-full h-full absolute bg-black rounded-2xl p-8 z-10 opacity-0 group-hover:opacity-80 duration-300`}
      >
        <p>{title}</p>
      </div>
      <div
        className={`w-full py-3 absolute bottom-0 flex justify-center items-center gap-3 text-black font-semibold bg-[#F7F7F7] rounded-b-2xl z-20 ${
          isDesktop
            ? "opacity-0 group-hover:opacity-100 transition-all duration-300"
            : null
        }`}
      >
        <p>Zobacz szczegóły</p>
        <FaRegArrowAltCircleRight size={24} />
      </div>
      <Image
        src={url}
        alt={title}
        fill
        objectFit="cover"
        unoptimized
        quality={100}
        className={`rounded-2xl`}
      />
    </div>
  );
};
