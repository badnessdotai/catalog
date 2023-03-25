import EntryType from "@/interfaces/entry";
import Link from "next/link";

export default function EntryCard({ entry }: { entry: EntryType }) {
  const categoryString = entry.categories.join(", ");

  return (
    <Link className="flex flex-col gap-2" href={`/catalog/${entry.slug}`}>
      <hr />
      <h3 className="font-sans text-xl">{entry.title}</h3>
      <p className="font-mono text-sm truncate uppercase">
        <span className="font-bold">
          {entry.date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        &nbsp;/&nbsp;
        {categoryString}
      </p>
    </Link>
  );
}
