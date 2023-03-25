import {
  getPostBySlug as getEntryBySlug,
  getAllEntries,
} from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import Link from "next/link";
import EntryCard from "@/components/EntryCard";

export default async function EntryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const entry = getEntryBySlug(slug);
  const renderedMarkdown = await markdownToHtml(entry.content || "");

  const relatedEntries = getAllEntries()
    .filter(
      (e) =>
        e.categories.some((c) => entry.categories.includes(c)) ||
        e.companies.some((c) => entry.companies.includes(c)) // Models is less relevant here
    )
    .filter((e) => e.slug !== entry.slug);

  return (
    <article>
      <div className="flex gap-8 w-full justify-end">
        <div className="w-1/6" />
        <h1 className="w-5/6 justify-end font-serif text-7xl mt-64">
          {entry.title}
        </h1>
      </div>
      <hr className="my-8" />
      <div className="flex gap-8 w-full">
        <div className="md:w-1/6">
          <p className="font-mono text-3xl truncate uppercase">
            <span className="font-bold">
              {entry.date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </p>
        </div>
        <div className="md:w-5/6">
          <p className="font-mono text-3xl uppercase flex flex-wrap gap-16">
            {entry.categories.length > 0 && (
              <span className="font-bold flex flex-wrap gap-8">
                {entry.categories.map((c) => (
                  <Link key={c} href={`/categories/${c}`}>
                    {c}
                  </Link>
                ))}
              </span>
            )}
            {entry.models.length > 0 && (
              <span className="font-bold flex flex-wrap gap-8">
                {entry.models.map((c) => (
                  <Link key={c} href={`/models/${c}`}>
                    {c}
                  </Link>
                ))}
              </span>
            )}
            {entry.companies.length > 0 && (
              <span className="font-bold flex flex-wrap gap-8">
                {entry.companies.map((c) => (
                  <Link key={c} href={`/companies/${c}`}>
                    {c}
                  </Link>
                ))}
              </span>
            )}
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex gap-8 w-full">
        <div className="md:w-1/6" />
        <div
          className="prose prose-2xl prose-black dark:prose-invert text-black dark:text-white"
          dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
        />
      </div>
      {relatedEntries.length > 0 && (
        <div className="flex gap-8 w-full mt-16">
          <div className="md:w-1/6" />
          <div className="md:w-5/6">
            <div className="font-mono uppercase text-xl mb-8">See Also</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {relatedEntries.slice(0, 3).map((e) => (
                <div key={e.slug}>
                  <EntryCard entry={e} withTopline={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export async function generateStaticParams() {
  const entries = getAllEntries();

  return entries.map((e) => {
    return {
      slug: e.slug,
    };
  });
}
