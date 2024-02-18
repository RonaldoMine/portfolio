import Link from "next/link";
import Image from "next/image";

type Props = {
  coverSrc: string;
  link: string;
  title: string;
  artist: string;
  duration: string;
  position: number;
};

export default function SingleSongComponent({
  coverSrc,
  link,
  title,
  artist,
  duration,
  position,
}: Props) {
  return (
    <Link href={link} target="_blank" aria-label="Listening one of my favarite music">
      <div className="flex items-center w-full px-3 gap-4">
        <span className="text-gray-200 hidden sm:block">
          {position < 9 ? `0${position}` : position}.
        </span>
        <Image
          src={coverSrc}
          alt={title}
          height={500}
          width={500}
          className="h-12 w-12 sm:h-16 sm:w-16 object-cover"
        />
        <div className="flex flex-grow items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-md font-bold">{title}</span>
            <span className="text-gray-400 text-xs">{artist}</span>
          </div>
          <span className="text-gray-400 text-xs font-bold">{duration}</span>
        </div>
      </div>
    </Link>
  );
}
