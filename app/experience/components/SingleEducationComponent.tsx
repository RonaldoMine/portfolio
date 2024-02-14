type Props = {
  degree: string;
  school: string;
  date: string;
};

export default function SingleEducationComponent({ degree, school, date }: Props) {
  return (
    <li className="flex flex-start relative pl-3">
      <div className="absolute mt-2 bg-red w-2 h-2 flex items-center justify-center rounded-full -ml-1 ring-8 ring-red ring-opacity-15"></div>
      <div className="w-0.5 bg-white bg-opacity-25 mt-8 mb-2"></div>
      <div className="flex-grow rounded-lg ml-6 sm:ml-16 mb-8">
        <div className="mb-2 sm:flex sm:flex-wrap sm:justify-between sm:items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {degree}
            </h3>
            <span className="text-sm text-white text-opacity-70">{school}</span>
          </div>
          <time className="block text-sm font-normal leading-none text-gray-500">
            {date}
          </time>
        </div>
      </div>
    </li>
  );
}
