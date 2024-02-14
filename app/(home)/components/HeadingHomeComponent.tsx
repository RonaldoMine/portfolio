type Props = {
  title: string;
  value: string;
};

export default function HeadingHomeComponent({ title, value }: Props) {
  return (
    <div className="text-center font-bold">
      <span className="text-xl sm:text-5xl">
        {value} <span className="text-red">+</span>
      </span>
      <span className="block text-sm sm:text-base">{title}</span>
    </div>
  );
}
