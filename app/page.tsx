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
          <h2 className="text-4xl font-serif">Latest</h2>
          {entries.map((entry) => (
            <EntryCard entry={entry} />
          ))}
        </article>
      </section>
    </main>
  );
}
