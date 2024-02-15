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
  reverse?: boolean;
};

export default function SingleProjectComponent({
  bg,
  title,
  description,
  img,
  rank,
  slug,
  reverse = false,
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
          className="h-[400px] w-[200px] sm:h-[650px] sm:w-[350px] pt-20 mx-auto object-contain"
        />
      </div>
      <div
        className={`flex flex-col gap-8 py-10 ${
          reverse ? "order-2" : "order-2 sm:order-1"
        }`}
      >
        <div className="flex">
          <span className="border-b-2 border-red w-10 block"></span>
          <span className="text-red">0{rank}/03</span>
        </div>
        <h4 className="text-3xl font-bold">{title}</h4>
        <p className="leading-7">{description}</p>
        <div>
          <Link
            href={`/projects/${slug}`}
            className="bg-red p-3 flex items-center gap-2 w-max"
          >
            Explore <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
}