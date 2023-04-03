import EntryCard from "@/components/EntryCard";
import EntryType from "@/interfaces/entry";
import {
  getAllEntries,
  getCategoriesByCount,
  getCompaniesByCount,
  getModelsByCount,
} from "@/lib/api";
import Link from "next/link";

type Props = {
  entries: EntryType[];
};

export default function Home() {
  const entries = getAllEntries();
  const categoryByCount = getCategoriesByCount();
  const companiesByCount = getCompaniesByCount();
  const modelsByCount = getModelsByCount();

  return (
    <main>
      <section className="flex h-[85vh] justify-between gap-8">
        <article className="flex flex-col gap-8 justify-end lg:max-w-5xl">
          <h1 className="text-6xl lg:text-8xl font-serif">
            An open catalog of generative AI badness
          </h1>
          <p className="text-2xl lg:text-3xl font-sans">
            To build safer and more responsible AI systems, we must learn from
            the mistakes of the past. Badness.ai is a curated catalog of
            generative AI systems causing real-world harm.
          </p>
          <p className="text-xl font-mono uppercase flex gap-8 items-center">
            <Link
              href="https://badness.substack.com"
              className="border border-2 py-2 px-4 border-black dark:border-white"
            >
              SUBSCRIBE
            </Link>
            <Link href="/contribute">CONTRIBUTE</Link>
          </p>
        </article>
        <article className="flex-col gap-12 md:max-w-sm justify-end mt-16 md:mt-0 hidden lg:flex">
          {entries.slice(0, 4).map((entry) => (
            <EntryCard key={entry.slug} entry={entry} withTopline={true} />
          ))}
        </article>
      </section>
      <section className="mt-32 flex flex-col gap-8 pt-8">
        <div className="flex items-center gap-12">
          <h2 className="font-serif text-4xl inline">Categories</h2>
          <hr className="grow" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-12">
          {categoryByCount.map((c) => {
            return (
              <div key={c.category} className="font-mono uppercase text-2xl">
                <Link href={`/categories/${encodeURIComponent(c.category)}`}>
                  <span>{c.category}</span>
                  <span className="ml-4 opacity-50">{c.count}</span>
                </Link>
              </div>
            );
          })}
          <div key={"more"} className="font-mono uppercase text-2xl">
            <Link href={`/categories`}>
              <span>More &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-32 flex flex-col gap-8 pt-8">
        <div className="flex items-center gap-12">
          <h2 className="font-serif text-4xl inline">Companies</h2>
          <hr className="grow" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-12">
          {companiesByCount.map((c) => {
            return (
              <div key={c.company} className="font-mono uppercase text-2xl">
                <Link href={`/companies/${encodeURIComponent(c.company)}`}>
                  <span>{c.company}</span>
                  <span className="ml-4 opacity-50">{c.count}</span>
                </Link>
              </div>
            );
          })}
          <div key={"more"} className="font-mono uppercase text-2xl">
            <Link href={`/companies`}>
              <span>More &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-32 flex flex-col gap-8 pt-8">
        <div className="flex items-center gap-12">
          <h2 className="font-serif text-4xl inline">Models</h2>
          <hr className="grow" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-12">
          {modelsByCount.map((c) => {
            return (
              <div key={c.model} className="font-mono uppercase text-2xl">
                <Link href={`/models/${encodeURIComponent(c.model)}`}>
                  <span>{c.model}</span>
                  <span className="ml-4 opacity-50">{c.count}</span>
                </Link>
              </div>
            );
          })}
          <div key={"more"} className="font-mono uppercase text-2xl">
            <Link href={`/models`}>
              <span>More &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-32 flex flex-col gap-8 pt-8">
        <div className="flex items-center gap-12">
          <h2 className="font-serif text-4xl inline">Latest</h2>
          <hr className="grow" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {entries.slice(0, 16).map((entry) => (
            <EntryCard key={entry.slug} entry={entry} withTopline={false} />
          ))}
          <div key={"more"} className="font-mono uppercase text-2xl mb-8">
            <Link href={`/catalog`}>
              <span>View full catalog &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
