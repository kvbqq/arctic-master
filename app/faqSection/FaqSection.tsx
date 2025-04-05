"use client";

import React from "react";

import { FaqElement } from "@/components/faqElement/FaqElement";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const FaqSection = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  return (
    <section className={`w-full flex justify-center items-center bg-[#0A3441]`}>
      <div
        className={`${
          isDesktop ? "w-[72rem] p-20" : "p-10"
        } mx-5 mb-20 flex items-center flex-col rounded-3xl border border-gray-100 shadow-lg bg-[#F7F7F7]`}
      >
        <h1
          className={`${
            isDesktop ? "text-[2rem]" : "text-2xl text-center"
          } mb-20 font-bold align-center`}
        >
          Najczęściej zadawane pytania
        </h1>
        <FaqElement
          question="Czy potrzebuję pozwolenia na montaż klimatyzacji?"
          answer="W przypadku montażu na elewacji budynku wielorodzinnego konieczna jest zgoda wspólnoty mieszkaniowej. W domu jednorodzinnym nie są wymagane dodatkowe pozwolenia."
        />
        <hr className="w-full mb-5 border-t-2 border-gray-200" />
        <FaqElement
          question="Gdzie najlepiej zamontować jednostkę wewnętrzną?"
          answer="Najczęściej nad drzwiami lub w miejscu, gdzie powietrze może swobodnie cyrkulować po całym pomieszczeniu."
        />
        <hr className="w-full mb-5 border-t-2 border-gray-200" />
        <FaqElement
          question="Czy pompa ciepła sprawdzi się w starym domu?"
          answer="Tak, ale kluczowa jest dobra izolacja budynku. Można ją też łączyć z innym źródłem ciepła (np. piecem gazowym)."
        />
        <hr className="w-full mb-5 border-t-2 border-gray-200" />
        <FaqElement
          question="Czy dojazd do klienta jest płatny?"
          answer="Dojazd do klienta w promieniu do 100 km od naszej siedziby jest całkowicie bezpłatny."
        />
        <hr className="w-full mb-5 border-t-2 border-gray-200" />
        <FaqElement
          question="Ile kosztuje montaż klimatyzacji lub pompy ciepła?"
          answer="Koszt montażu zależy od wielu czynników – m.in. rodzaju urządzenia, warunków technicznych oraz zakresu prac. Dlatego zapraszamy do skorzystania z darmowej konsultacji, podczas której przygotujemy indywidualną wycenę."
        />
      </div>
    </section>
  );
};
