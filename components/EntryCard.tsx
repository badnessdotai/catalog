import EntryType from "@/interfaces/entry";
import Link from "next/link";

export default function EntryCard({
  entry,
  withTopline,
}: {
  entry: EntryType;
  withTopline: Boolean | undefined;
}) {
  const categoryString = entry.categories.join(", ");

  return (
    <Link
      className="flex flex-col gap-2 hover:rotate-0 transition-all"
      href={`/catalog/${entry.slug}`}
    >
      {withTopline !== false && <hr />}
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
