import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  bg: string;
  title: string;
  description: string;
  img: string;
  rank: string;
  slug: string;
  link: string;
  linkText: string;
  reverse?: boolean;
  totalCount?: number;
};

export default function SingleProjectComponent({
  bg,
  title,
  description,
  img,
  rank,
  slug,
  link,
  linkText,
  reverse = false,
  totalCount,
}: Props) {
  return (
    <div
      className="grid md:grid-cols-3 gap-10 items-center my-10"
      id={`project-${rank}`}
    >
      <div
        className={`col-span-2 h-full bg-no-repeat bg-contain bg-left ${
          reverse ? "order-2" : "order-1 sm:order-2"
        }`}
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Image
          src={img}
          alt="Indcomptable Project Shop"
          width={200}
          height={400}
          className="h-[400px] w-[200px] sm:h-[650px] sm:w-[350px] pt-5 sm:pt-20 mx-auto object-contain"
        />
      </div>
      <div
        className={`flex flex-col gap-8 py-10 ${
          reverse ? "order-2" : "order-2 sm:order-1"
        }`}
      >
        <div className="flex">
          <span className="border-b-2 border-red w-10 block"></span>
          <span className="text-red">
            0{rank}/0{totalCount}
          </span>
        </div>
        <span className="text-3xl font-bold">{title}</span>
        <p className="leading-7">{description}</p>
        <div className="group w-max relative text-center cursor-pointer">
          <div>
            <Link
              aria-label="Project"
              //href={`/projects/${slug}`}
              href={link}
              target="_blank"
              className=" flex h-full p-3 bg-red items-center gap-2 transition-all duration-700 group-hover:text-red group-hover:bg-white"
            >
              {linkText} <FaArrowRightLong />
            </Link>
          </div>
          <div className="absolute h-full flex justify-between items-center gap-5 bg-white/20 z-1 inset-0 w-0  transition-all duration-500 group-hover:w-full group-hover:p-3"></div>
        </div>
      </div>
    </div>
  );
}
