"use client";

import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import AboutImage from "@/public/about.jpg";

export const About = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <section
      id={`o-firmie`}
      className={`${
        isDesktop ? "h-svh items-end" : "mt-20"
      } w-full min-h-[540px] flex justify-center`}
    >
      <div
        className={`${
          isDesktop ? "h-[90%]" : "flex-col-reverse"
        } w-[72rem] px-5 flex gap-24`}
      >
        <div
          className={`${
            isDesktop ? "w-[45%]" : "w-full h-[80vw]"
          } relative bg-black`}
        >
          <Image src={AboutImage} alt="" fill objectFit="cover" quality={100} />
        </div>
        <article
          className={`${
            isDesktop ? "w-[55%]" : "w-full"
          } flex flex-col gap-10 justify-center `}
        >
          <h1 className={`font-bold text-4xl`}>O firmie</h1>
          <p>
            Od młodzieńczych lat pasjonuję się branżą techniczną. Zaczynałem od
            naprawy samochodów w garażu, a z czasem założyłem własny warsztat,
            zdobywając zaufanie wielu klientów w Słupcy i okolicach.
            <br />
            <br />
            Z biegiem lat pasja przerodziła się w pracę i sposób na życie. Dziś
            oferuję nowoczesne, energooszczędne rozwiązania dla domów i firm.
            Specjalizuję się w montażu klimatyzacji oraz pomp ciepła. Stawiam na
            indywidualne podejście i technologie dopasowane do potrzeb każdego
            klienta.
            <br />
            <br />
            Niezależnie od rodzaju zlecenia, czy to montaż, serwis, czy
            modernizacja, każde realizuję z pełnym zaangażowaniem, łącząc wiedzę
            techniczną z doświadczeniem i rzetelnym podejściem do klienta.
          </p>
        </article>
      </div>
    </section>
  );
};
