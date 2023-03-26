type Props = {
  title: string;
  category: string;
  description?: string;
  children: React.ReactNode;
};

export default function IndexPage({ children, title, category, description }: Props) {
  const titleClass = description ? 'font-serif text-6xl lg:text-9xl mb-4' : 'font-serif text-6xl lg:text-9xl mb-32';
  return (
    <main className="flex gap-8">
      <div className="md:w-1/6 hidden md:block" />
      <div className="md:w-5/6 mt-64">
        <h1 className={titleClass}>{title}</h1>
        {description && <p className="font-serif text-3xl mb-32">{description}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          {children}
        </div>
      </div>
    </main>
  );
}
