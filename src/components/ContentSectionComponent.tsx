type Props = {
  title: string;
  heading: string;
};
export default function ContentSectionComponent({
  title,
  heading,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <section className="mb-16">
      <div className="mb-6">
        <span className="bg-clip-text bg-gradient-lapis text-fill-color-transparent text-xs">
          {heading}
        </span>
        <h1 className="text-red text-2xl sm:text-4xl font-bold">{title}</h1>
      </div>
      {children}
    </section>
  );
}
