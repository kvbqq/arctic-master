"use client";

import { useState, useEffect } from "react";

import { fetchData } from "@/graphqlClient";
import { RealizationDetails } from "@/components/realizationDetails/RealizationDetails";
import { GalleryImageType } from "@/types/types";

const GET_REALIZATIONS_QUERY = `
    query GetRealizations {
          realizations {
            id
            title
            description {
              html
            }
            mainImage {
                url
            }
            gallery {
                id
                url
            }
        }
    }
`;

interface RealizationType {
  id: string;
  title: string;
  description: {
    html: string;
  };
  mainImage: {
    url: string;
  };
  gallery: GalleryImageType[];
}

export default function Home() {
  const [realizations, setRealizations] = useState<RealizationType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    <main className={`flex justify-center`}>
      <section className={`w-[72rem] pt-36 px-5 flex flex-col gap-5`}>
        <h1 className={`font-bold text-4xl`}>Realizacje</h1>
        {realizations.map((realization: RealizationType) => (
          <RealizationDetails
            id={realization.id}
            key={realization.id}
            title={realization.title}
            description={realization.description.html}
            mainUrl={realization.mainImage.url}
            gallery={realization.gallery}
          />
        ))}
      </section>
    </main>
  );
}
