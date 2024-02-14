"use client";

import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import homePageImg from "@/public/images/projects/indomptable-shop/home-website-page.png";

export default function IndomptableShop() {
  const tools = [
    {
      title: "NextJS",
      img: "/images/tools/nextjs-round.png",
    },
    {
      title: "Typescript",
      img: "/images/tools/typescript-round.png",
    },
    {
      title: "Tailwind",
      img: "/images/tools/tailwind-round.png",
    },
    {
      title: "Vercel",
      img: "/images/tools/vercel-round.png",
    },
    {
      title: "Sanity",
      img: "/images/tools/sanity-round.png",
    },
    {
      title: "Git",
      img: "/images/tools/git-round.png",
    },
  ];

  const mockups = [
    {
      img: "/images/projects/indomptable-shop/mockup-home-page.jpg",
      title: "Home Page",
      description:
        "Lorem ipsum dolor sit amet consectetur. Risus hendrerit eleifend accumsan cursus ut. Facilisis eget molestie massa lectus etiam donec cursus amet. ",
    },
    {
      img: "/images/projects/indomptable-shop/mockup-product-detail.jpg",
      title: "Product detail Page",
      description:
        "Lorem ipsum dolor sit amet consectetur. Risus hendrerit eleifend accumsan cursus ut. Facilisis eget molestie massa lectus etiam donec cursus amet. ",
    },
    {
      img: "/images/projects/indomptable-shop/mockup-shop-page.jpg",
      title: "Shop Page",
      description:
        "Lorem ipsum dolor sit amet consectetur. Risus hendrerit eleifend accumsan cursus ut. Facilisis eget molestie massa lectus etiam donec cursus amet. ",
    },
  ];
  return (
    <>
      <section className="py-10 flex flex-col gap-3 sm:gap-6">
        <span className="bg-clip-text bg-gradient-lapis text-fill-color-transparent text-xs sm:text-base">
          ONLINE SHOP
        </span>
        <div className="flex justify-between">
          <h1 className="text-red text-2xl sm:text-4xl font-bold">
            Indomptable Shop
          </h1>
          <Link href={"https://indomptable-shop.vercel.app/"} target="_blank">
            <FiExternalLink className="text-red" size={25} />
          </Link>
        </div>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          odit vel, ratione harum molestias sed cum at id cupiditate tenetur
          quia ea quaerat dolores assumenda a magnam molestiae repellendus sunt?
        </p>
      </section>
      <section className="border-y border-gray-200 py-10 my-16 flex flex-col gap-10">
        <div className="sm:flex sm:flex-row">
          <h2 className="font-bold text-xl basis-1/4 mb-3">Context</h2>
          <div className="flex flex-col gap-4 basis-3/4">
            <div>
              <h3 className="text-lg font-bold mb-3 hidden sm:block">
                Build an online shop to send Indomptable articles
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Risus hendrerit eleifend
                accumsan cursus ut. Facilisis eget molestie massa lectus etiam
                donec cursus amet.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Increase Visibility</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Risus hendrerit eleifend
                accumsan cursus ut. Facilisis eget molestie massa lectus etiam
                donec cursus amet.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:flex-row">
          <h2 className="font-bold text-xl basis-1/4 mb-3">Teams</h2>
          <div className="basis-3/4">
            <h3 className="text-lg font-bold mb-3 hidden sm:block">
              The Squad
            </h3>
            <ul className="list-disc ml-8">
              <li>Ronaldo Mine : Developer</li>
              <li>Marc-Antoine Ngaba : Developer/Designer</li>
            </ul>
          </div>
        </div>
        <div className="sm:flex sm:flex-row">
          <h2 className="font-bold text-xl basis-1/4 mb-3">Stack</h2>
          <div className="basis-3/4">
            <h3 className="text-lg font-bold mb-3 hidden sm:block">
              The technicals tools used
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Risus hendrerit eleifend
              accumsan cursus ut. Facilisis eget molestie massa lectus etiam
              donec cursus amet.
            </p>
            <div className="flex flex-wrap mt-4 gap-4">
              {tools.map((tool, index) => {
                return (
                  <Image
                    key={index}
                    src={tool.img}
                    width={50}
                    height={50}
                    alt={tool.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="sm:flex sm:flex-row">
          <h2 className="font-bold text-xl basis-1/4 mb-3">Mockups</h2>
          <div className="basis-3/4 w-full sm:w-3/4">
            <Swiper
              slidesPerView={1}
              grabCursor={true}
              navigation={true}
              spaceBetween={30}
              modules={[Navigation]}
              wrapperClass="mb-4"
            >
              {mockups.map((mockup, index) => {
                return (
                  <SwiperSlide key={`mockup-${index}`}>
                    <div className="mb-14">
                      <h3 className="text-lg font-bold mb-3 hidden sm:block">
                        {mockup.title}
                      </h3>
                      <p className="text-justify">{mockup.description}</p>
                      <div className="flex flex-wrap mt-4 gap-4">
                        <Image
                          src={mockup.img}
                          alt={mockup.title}
                          width={732}
                          height={100}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="text-center">
        <div className="flex flex-col gap-10 mb-20">
          <Image
            src={"/images/projects/indomptable-shop/logo.png"}
            alt="Logo Indomptable"
            width={150}
            height={150}
            className="mx-auto"
          />
          <h1 className="text-2xl font-extrabold tracking-widest">
            Ready to enjoy the experience ?
          </h1>
          <div className="mx-auto">
            <Link
              href={"https://indomptable-shop.vercel.app/"}
              className="bg-red p-3 flex-shrink-0"
            >
              Visit the website
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="inset-0 absolute bg-white bg-opacity-40"></div>
          <Image
            src={homePageImg}
            alt="Logo Indomptable"
            width={homePageImg.width}
            height={homePageImg.height}
            className="mx-auto w-full"
          />
        </div>
      </section>
    </>
  );
}
