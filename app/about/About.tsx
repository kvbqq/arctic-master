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
            Mam na imię Mariusz Szustakiewicz. Wszystko zaczęło się od
            młodzieńczej pasji do motoryzacji – już jako nastolatek spędzałem
            godziny w garażu, naprawiając samochody, szukając rozwiązań i ucząc
            się, jak działa technika. To zamiłowanie doprowadziło mnie do
            założenia własnego warsztatu samochodowego, który przez lata zdobył
            zaufanie wielu klientów w Słupcy i okolicach.
            <br />
            <br />
            Z biegiem czasu i rosnącym doświadczeniem postanowiłem pójść o krok
            dalej. Dziś moja firma to nie tylko naprawa aut, ale przede
            wszystkim nowoczesne systemy dla domu i firmy. Specjalizuję się w
            montażu klimatyzacji, pomp ciepła oraz paneli fotowoltaicznych.
            Zawsze zależy mi na tym, by oferować rozwiązania nie tylko
            skuteczne, ale też energooszczędne i dopasowane do realnych potrzeb
            klientów.
            <br />
            <br />
            Niezależnie od tego, czy chodzi o sprawny montaż klimatyzacji,
            wydajną pompę ciepła, instalację paneli słonecznych czy odświeżenie
            klimatyzacji w samochodzie – można na mnie liczyć. Łączę wiedzę
            techniczną z rzetelnym podejściem do pracy i prawdziwą pasją do
            tego, co robię. Każde zlecenie traktuję indywidualnie, bo wiem, że
            zaufanie buduje się poprzez jakość i uczciwość.
          </p>
        </article>
      </div>
    </section>
  );
};
