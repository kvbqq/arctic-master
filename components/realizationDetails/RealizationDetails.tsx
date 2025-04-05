"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { GallerySlider } from "../gallerySlider/GallerySlider";

import { IoApps } from "react-icons/io5";
import { GalleryImageType } from "@/types/types";

interface RealizationDetailsProps {
  id: string;
  title: string;
  description: string;
  mainUrl: string;
  gallery: GalleryImageType[];
}

export const RealizationDetails: React.FC<RealizationDetailsProps> = ({
  id,
  title,
  description,
  mainUrl,
  gallery,
}) => {
  const [images, setImages] = useState<GalleryImageType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const { imageId } = useParams();
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    if (showGallery) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showGallery]);

  return (
    <React.Fragment>
      <article
        id={id}
        className={`w-full p-8 flex bg-[#0A3441] rounded-4xl text-[#F7F7F7] ${
          isDesktop ? "gap-20" : "flex-col gap-8"
        }`}
      >
        <div
          className={`${
            isDesktop ? "w-1/2 h-[300px]" : "h-[200px]"
          } relative hover:cursor-pointer`}
          onClick={() => setShowGallery(true)}
        >
          <Image
            src={mainUrl}
            alt={title}
            fill
            objectFit="cover"
            unoptimized
            quality={100}
            className={`rounded-2xl`}
          />
          <div
            className={`absolute bottom-3 right-3 px-5 py-2 flex gap-3 items-center bg-white text-black rounded-full ${
              isDesktop ? "text-sm" : "text-[0.65rem]"
            }`}
          >
            <IoApps color="#0A3441" />
            <p>Pokaż wszystkie zdjęcia</p>
          </div>
        </div>
        <div className={`${isDesktop ? "w-1/2" : null} flex flex-col gap-4`}>
          <h1 className={`font-bold text-lg`}>{title}</h1>
          <div
            className={`flex flex-col gap-1 text-sm text-[#9F9F9F]`}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      </article>
      {showGallery ? (
        <GallerySlider
          images={gallery}
          startId={0}
          showGallery={showGallery}
          setShowGallery={setShowGallery}
        />
      ) : null}
    </React.Fragment>
  );
};
