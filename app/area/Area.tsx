"use client";

import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import AreaImage from "@/public/area.png";

export const Area = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <section className={`w-full flex justify-center`}>
      <div
        className={`w-[72rem] my-28 px-5 flex flex-col gap-20 justify-center`}
      >
        <h1 className={`font-bold text-4xl`}>Gdzie działamy?</h1>
        <div
          className={`flex items-center gap-24 ${
            isDesktop ? null : "flex-col"
          }`}
        >
          <Image
            src={AreaImage}
            alt=""
            quality={100}
            className={`${isDesktop ? "w-1/3" : null}`}
          />
          <p className={`${isDesktop ? "w-2/3" : null} font-bold text-lg`}>
            Nasza siedziba znajduje się pod Poznaniem, ale usługi świadczymy na
            terenie <span className={`text-[#FF0000]`}>CAŁEJ POLSKI</span>.
            Niezależnie od lokalizacji, możesz liczyć na pełne wsparcie — od
            bezpłatnej konsultacji, przez indywidualną wycenę, aż po
            profesjonalny montaż.
            <br />
            <br />
            Dojazd do klientów w promieniu 100 km od Poznania jest bezpłatny. W
            przypadku dalszych lokalizacji doliczany jest koszt dojazdu,
            ustalany indywidualnie przed realizacją zlecenia. Dzięki temu masz
            pewność, że nie zaskoczą Cię żadne dodatkowe opłaty.
          </p>
        </div>
      </div>
    </section>
  );
};
