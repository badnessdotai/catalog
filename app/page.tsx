import EntryCard from "@/components/EntryCard";
import EntryType from "@/interfaces/entry";
import { getAllEntries } from "@/lib/api";

type Props = {
  entries: EntryType[];
};

export default function Home() {
  const entries = getAllEntries();

  return (
    <main>
      <section className="flex h-[90vh] justify-between gap-8">
        <article className="flex flex-col gap-8 justify-end max-w-5xl">
          <h1 className="text-8xl font-serif">
            An open, collaborative catalog of AI badness
          </h1>
          <p className="text-3xl font-sans">
            To build safer and more responsible AI systems, we must learn from
            the mistakes of the past. Badness.org is an open-source catalog of
            AI systems causing real-world harm.
          </p>
        </article>
        <article className="flex flex-col gap-12 max-w-sm justify-end">
          {entries.slice(0, 4).map((entry) => (
            <EntryCard entry={entry} />
          ))}
        </article>
      </section>
      <section className="mt-32 flex flex-col gap-8 pt-8">
        <div className="flex items-center gap-12">
          <h2 className="font-serif text-4xl inline">Latest</h2>
          <hr className="grow border-b border-b-2" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {entries.slice(0, 32).map((entry) => (
            <EntryCard entry={entry} withTopline={false} />
          ))}
        </div>
      </section>
    </main>
  );
}
