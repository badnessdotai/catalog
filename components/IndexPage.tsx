type Props = {
  title: string;
  category: string;
  children: React.ReactNode;
};

export default function IndexPage({ children, title, category }: Props) {
  return (
    <main className="flex gap-8">
      <div className="md:w-1/6 hidden md:block" />
      <div className="md:w-5/6 mt-64">
        <h1 className="font-serif text-9xl mb-16">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          {children}
        </div>
      </div>
    </main>
  );
}
