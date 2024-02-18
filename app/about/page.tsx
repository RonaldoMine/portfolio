"use client";

import ContentSectionComponent from "@/app/components/ContentSectionComponent";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { galleries, songs } from "./datas";
import SingleGalleryCardComponent from "./components/SingleGalleryCardComponent";
import SingleSongComponent from "./components/SingleSongComponent";

export default function About() {
  return (
    <>
      <ContentSectionComponent title="Who I am ?" heading="About Me">
        <p className="text-justify mb-4">
          Commonly known as Ronaldo MINE, I&apos;m a young Cameroonian who&apos;s been
          passionate about technology ever since I was a child. My academic
          background has enabled me to specialize in web development solutions,
          with over 5 years of professional experience to my credit.
        </p>
        <p className="text-justify mb-4">
          During my professional career, I was able to adapt easily to the work
          environment, both with the people and the technologies used, which
          enabled me to increase my team spirit, develop my perseverance, my
          analytical mind and thanks to all this I was very quickly able to
          receive key responsibilities in the development of solutions for these
          different companies. What&apos;s more, I&apos;ve had to develop applications
          that have been used by thousands of people in both the professional
          and personal spheres. My goal is to join a company at the cutting edge
          of technology and digital innovation, and work together to design
          quality solutions. This will enable me to gain knowledge and
          experience around a diverse team focused on excellence, and ultimately
          build a solid and serene future for myself.
        </p>
        <p className="text-justify">
          Personally, I&apos;m passionate about music, photography, soccer and board
          games. This allows me to find a balance in my life and share pleasant
          moments with friends and colleagues.
        </p>
      </ContentSectionComponent>
      <ContentSectionComponent title="Photography" heading="Passion">
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
        title="Music - 10 favorites songs"
        heading="Passion"
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
