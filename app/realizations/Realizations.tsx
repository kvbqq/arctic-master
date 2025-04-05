"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { fetchData } from "@/graphqlClient";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import { RealizationLanding } from "@/components/realizationLanding/RealizationLanding";

const GET_REALIZATIONS_QUERY = `
    query GetRealizations {
          realizations {
            id
            title
            mainImage {
                url
            }
        }
    }
`;

interface RealizationType {
  id: string;
  title: string;
  mainImage: {
    url: string;
  };
}

export default function Realizations() {
  const [realizations, setRealizations] = useState<RealizationType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  useEffect(() => {
    const fetchRealizations = async () => {
      try {
        const data = await fetchData(GET_REALIZATIONS_QUERY);
        setRealizations(data.realizations);
      } catch (err) {
        setError("Nie udało się załadować danych." + err);
      } finally {
        setLoading(false);
      }
    };

    fetchRealizations();
  }, []);

  if (loading) return <p className="text-center">Ładowanie...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section
      id="realizacje"
      className={`w-full flex justify-center bg-[#0A3441] text-[#F7F7F7]`}
    >
      <div className={`w-[72rem] my-28 px-5 flex flex-col justify-center`}>
        <h1 className={`font-bold text-4xl`}>Realizacje</h1>
        <p
          className={`${
            isDesktop ? "w-1/2" : "w-full"
          } mt-5 mb-10 text-[#9F9F9F]`}
        >
          Arctic Masters to sprawdzony sposób na chłód latem i ciepło zimą.
          Oferujemy niezawodne systemy klimatyzacji i pomp ciepła, które
          zapewniają wygodę i oszczędność energii.
        </p>
        <div
          className={`w-full pb-8 ${
            isDesktop
              ? "grid grid-cols-3 grid-rows-2"
              : "flex flex-col items-center"
          } gap-3`}
        >
          {isDesktop
            ? realizations
                .slice(0, 6)
                .map((realization: RealizationType) => (
                  <RealizationLanding
                    id={realization.id}
                    key={realization.id}
                    title={realization.title}
                    url={realization.mainImage.url}
                  />
                ))
            : realizations
                .slice(0, 3)
                .map((realization: RealizationType) => (
                  <RealizationLanding
                    id={realization.id}
                    key={realization.id}
                    title={realization.title}
                    url={realization.mainImage.url}
                  />
                ))}
        </div>
        <div className={`w-full flex justify-center`}>
          <Link
            href={"/realizacje"}
            className={`px-12 py-2 flex items-center gap-3 bg-[#F7F7F7] text-black text-lg font-semibold rounded-full`}
          >
            Zobacz nasze realizacje
          </Link>
        </div>
      </div>
    </section>
  );
}
