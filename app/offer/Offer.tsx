"use client";

import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import Aux from "@/public/aux.png";
import Gree from "@/public/gree.png";
import Rotenso from "@/public/rotenso.png";
import Mitsu from "@/public/mitsu.png";

export const Offer = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <section
      id="oferta"
      className={`${
        isDesktop ? "h-svh" : ""
      } w-full min-h-[540px] flex justify-center bg-[#0A3441] text-[#F7F7F7]`}
    >
      <div
        className={`w-[72rem] px-5 flex flex-col gap-20 justify-center ${
          isDesktop ? "" : "my-16"
        }`}
      >
        <h1 className={`font-bold text-4xl`}>Oferta</h1>
        <div className={`flex gap-10 ${isDesktop ? "" : "flex-col"}`}>
          <article
            className={`${isDesktop ? "w-1/3 " : "w-full"} flex flex-col gap-5`}
          >
            <h2 className={`font-bold text-2xl`}>
              Montaż systemów
              <br />
              klimatyzacji
            </h2>
            <p className={`text-sm text-[#9F9F9F]`}>
              Kompleksowa instalacja urządzeń chłodzących w budynkach
              mieszkalnych i komercyjnych. Dobór odpowiedniego sprzętu, montaż
              oraz uruchomienie systemu zgodnie z obowiązującymi normami, z
              uwzględnieniem optymalnej efektywności energetycznej i estetyki
              wnętrza.
            </p>
          </article>
          {isDesktop ? (
            <div className={`w-0.5 h-full bg-[#F7F7F7]`}></div>
          ) : null}
          <article
            className={`${isDesktop ? "w-1/3 " : "w-full"} flex flex-col gap-5`}
          >
            <h2 className={`font-bold text-2xl`}>
              Montaż pomp
              <br />
              ciepła
            </h2>
            <p className={`text-sm text-[#9F9F9F]`}>
              Profesjonalne wdrożenie niskoemisyjnych systemów grzewczych
              opartych na odnawialnych źródłach energii. Oferujemy dobór
              urządzenia, projekt instalacji oraz montaż, który zapewnia
              długoterminową oszczędność i komfort użytkowania.
            </p>
          </article>
          {isDesktop ? (
            <div className={`w-0.5 h-full bg-[#F7F7F7]`}></div>
          ) : null}
          <article
            className={`${isDesktop ? "w-1/3 " : "w-full"} flex flex-col gap-5`}
          >
            <h2 className={`font-bold text-2xl`}>
              Serwis i konserwacja
              <br />
              instalacji
            </h2>
            <p className={`text-sm text-[#9F9F9F]`}>
              Regularne przeglądy techniczne, czyszczenie i konserwacja
              instalacji klimatyzacyjnych oraz pomp ciepła. Zapewniamy sprawność
              systemu przez cały rok, szybką diagnostykę usterek i naprawy
              zgodne z wytycznymi producentów.
            </p>
          </article>
        </div>
        <div
          className={`flex justify-evenly items-center bg-[#F7F7F7] rounded-xl ${
            isDesktop ? null : "flex-col gap-8"
          }`}
        >
          <Image src={Gree} alt="Gree Logo" quality={100} />
          <Image src={Rotenso} alt="Rotenso Logo" quality={100} />
          <Image src={Aux} alt="Aux Logo" quality={100} />
          <Image src={Mitsu} alt="Mitsubishi Logo" quality={100} />
        </div>
      </div>
    </section>
  );
};
