import Image from "next/image";
import { useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";

interface PictureInterface {
  title?: string;
  src: string;
}

type Props = {
  title: string;
  pictures: Array<PictureInterface>;
};

export default function SingleGalleryCardComponent({ title, pictures }: Props) {
  const [currentSelectedPicture, setCurrentSelectedPicture] = useState(
    pictures[0]
  );

  const handleChangeSelectedPicture = (picture: PictureInterface) => {
    setCurrentSelectedPicture(picture);
  };
  return (
    <section className="bg-white bg-opacity-10 py-6 px-3 flex flex-col gap-4">
      <Image
        src={currentSelectedPicture.src}
        height={500}
        width={500}
        className="w-full h-60 object-cover"
        alt={currentSelectedPicture.title ?? title}
      />
      <div className="w-full">
        <Swiper slidesPerView={4.25} grabCursor={true} spaceBetween={5}>
          {pictures.map((picture, index) => (
            <SwiperSlide key={`picture-${index}`}>
              <Image
                src={picture.src}
                alt={picture.title ?? title}
                height={500}
                width={500}
                className={`h-10 w-10 rounded-full cursor-pointer ${
                  picture.src === currentSelectedPicture.src
                    ? "border-2 border-red opacity-50"
                    : ""
                }`}
                onClick={() => handleChangeSelectedPicture(picture)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <section className="flex justify-between items-center">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="flex items-center">
          <HiOutlinePhotograph />{" "}
          <span className="ml-1">{pictures.length}</span>
        </div>
      </section>
    </section>
  );
}
