import Image from "next/image";

type Props = {
  positionTitle: string;
  contractType: string;
  company: string;
  startDate: string;
  endDate?: string;
  tools: Array<{ img: string; title: string }>;
  missions: Array<string>;
};

export default function SingleExperienceComponent({
  positionTitle,
  contractType,
  company,
  startDate,
  endDate,
  tools,
  missions,
}: Props) {
  return (
    <li className="flex flex-start relative pl-3">
      <div className="absolute mt-2 bg-red w-2 h-2 flex items-center justify-center rounded-full -ml-1 ring-8 ring-red ring-opacity-15"></div>
      <div className="w-0.5 bg-white bg-opacity-25 mt-8 mb-2"></div>
      <div className="flex-grow rounded-lg ml-6 sm:ml-16">
        <div className="mb-2 sm:flex sm:flex-wrap sm:justify-between sm:items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {positionTitle}
              <span className="text-sm text-white text-opacity-40 ml-1">
                - {contractType}
              </span>
            </h3>
            <span className="text-opacity-75 text-red text-sm">{company}</span>
          </div>
          <time className="block text-sm font-normal leading-none text-gray-500">
            {startDate} - {endDate ? `${endDate}` : "Current"}
          </time>
        </div>
        <ul className="list-disc list-inside font-normal space-y-2 text-justify">
          {missions.map((mission, index) => (
            <li key={`mission-${index}`}>{mission}</li>
          ))}
        </ul>
        <div className="flex flex-wrap py-4 gap-4 mb-4">
          {tools.map((tool, index) => {
            return (
              <Image
                key={index}
                src={tool.img}
                width={45}
                height={45}
                alt={tool.title}
              />
            );
          })}
        </div>
      </div>
    </li>
  );
}
