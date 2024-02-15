"use client";

import ContentSectionComponent from "@/app/components/ContentSectionComponent";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { galleries, songs } from "./datas";
import SingleGalleryCardComponent from "./components/SingleGalleryCardComponent";
import Link from "next/link";
import SingleSongComponent from "./components/SingleSongComponent";

export default function About() {
  return (
    <>
      <ContentSectionComponent title="Who I am ?" heading="About Me">
        <p>
          Lorem ipsum dolor sit amet consectetur. Sed ut lacus nunc vitae at
          ornare sed rhoncus. Viverra risus sed maecenas tellus diam consequat.
          A odio enim egestas vel risus vitae et non. Ac leo rhoncus bibendum
          massa neque. Tempor odio nam eu purus sapien vitae. Urna consequat
          donec tempus viverra aliquet at fusce pharetra libero Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eius rerum vel, corporis,
          at beatae quos numquam aut sit impedit totam, quo dolorem voluptas
          harum suscipit qui eum commodi placeat animi? Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Voluptas neque, facilis modi quo
          quae amet, laboriosam itaque error, ducimus inventore nesciunt
          aliquid! Maxime sunt, id obcaecati fuga autem accusantium laborum? Quo
          ratione et eveniet similique, nemo aut sapiente atque rerum ex placeat
          architecto! Quod quia, reprehenderit quos quidem velit quisquam est
          quo odio tempore ab facilis nihil provident in quibusdam. Cupiditate
          consequatur consequuntur rem amet molestias qui. Excepturi laudantium
          eum quia, adipisci animi, numquam repellendus eos eaque nisi aliquid
          corporis officiis suscipit error sunt labore reiciendis quod.
          Voluptatum, mollitia ullam.
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
        title="Music - My 10 favorites songs"
        heading="Passion"
      >
        <section className="flex max-h-96">
          <Image
            src={"/images/music/cover.png"}
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
