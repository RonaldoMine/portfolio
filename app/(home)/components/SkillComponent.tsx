import Image from "next/image";
/* import style from "../style/index.module.css";
 */
type Props = {
  title: string;
  description: string;
  tools: Array<{ src: string; title: string }>;
};
export default function SkillComponent({ title, description, tools }: Props) {
  return (
    <div
      className={`flex flex-col gap-6 relative p-1 my-8`}
    >
      <div className="bg-gradient-alice p-10 sm:p-20 grid gap-y-5 sm:grid-cols-2 items-center relative">
        <div className="sm:pr-16">
          <span className="font-bold text-xl mb-6">{title}</span>
          <p>{description}</p>
        </div>
        <div className="flex justify-start flex-wrap sm:w-11/12 ml-auto gap-x-10 gap-y-4">
          {tools.map((tool, index) => {
            return (
              <Image
                key={"images-" + index}
                src={tool.src}
                alt={tool.title}
                title={tool.title}
                width={35}
                height={35}
                className="object-contain sm:w-14 h-auto"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
