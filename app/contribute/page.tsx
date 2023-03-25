export default function About() {
  return (
    <main>
      <section className="flex lg:mt-64 gap-8">
        <div className="w-1/6 hidden md:block" />
        <article className="flex flex-col gap-8 justify-end max-w-5xl">
          <h1 className="text-9xl font-serif">Contribute</h1>
          <p className="text-4xl font-sans">
            There's tons of work to do. Here's how you can help.
          </p>
          <div className="prose prose-2xl dark:prose-invert text-black dark:text-white">
            <p>TODO...</p>
          </div>
        </article>
      </section>
    </main>
  );
}
