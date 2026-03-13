"use client";

import ContentSectionComponent from "../components/ContentSectionComponent";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { galleries, songs } from "./datas";
import SingleGalleryCardComponent from "./components/SingleGalleryCardComponent";
import SingleSongComponent from "./components/SingleSongComponent";

export default function AboutClient({ dict }: { dict: any }) {
  return (
    <>
      <ContentSectionComponent title={dict.title} heading={dict.heading}>
        <p className="text-justify mb-4">
          {dict.para1}
        </p>
        <p className="text-justify mb-4">
          {dict.para2}
        </p>
        <p className="text-justify">
          {dict.para3}
        </p>
      </ContentSectionComponent>
      <ContentSectionComponent title={dict.passionTitle} heading={dict.passionHeading}>
        <Swiper
          slidesPerView={1.25}
          grabCursor={true}
          spaceBetween={30}
          wrapperClass="mb-4"
          breakpoints={{
            600: {
              slidesPerView: 2.25,
            },
            1024: {
              slidesPerView: 3.25,
            },
          }}
        >
          {galleries.map((gallery, index) => (
            <SwiperSlide key={`gallery-${index}`}>
              <SingleGalleryCardComponent
                title={gallery.title}
                pictures={gallery.pictures}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ContentSectionComponent>

      <ContentSectionComponent
        title={dict.hobbyTitle}
        heading={dict.hobbyHeading}
      >
        <section className="flex sm:max-h-96">
          <Image
            src={"/images/music/cover.webp"}
            height={500}
            width={500}
            alt="Music Cover"
            className="object-cover w-1/3 hidden sm:block"
          />
          <section className="bg-white bg-opacity-10 flex flex-col gap-y-3 flex-grow py-6 px-2 sm:py-10 sm:px-14 overflow-y-auto">
            {songs.map((song, index) => (
              <SingleSongComponent
                key={`song-${index}`}
                title={song.title}
                artist={song.artist}
                coverSrc={song.coverSrc}
                duration={song.duration}
                link={song.link}
                position={index + 1}
              />
            ))}
          </section>
        </section>
      </ContentSectionComponent>
    </>
  );
}
