import ErrorPage from "next/error";
import {
  getPostBySlug as getEntryBySlug,
  getAllEntries,
} from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import EntryType from "@/interfaces/entry";

export default async function EntryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const entry = getEntryBySlug(slug);
  const renderedMarkdown = await markdownToHtml(entry.content || "");

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
        <div className="w-1/6">
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
        <div className="w-5/6">
          <p className="font-mono text-3xl uppercase flex flex-wrap gap-16">
            {entry.categories.length > 0 && (
              <span className="font-bold">{entry.categories.join(", ")}</span>
            )}
            {entry.models.length > 0 && (
              <span className="font-bold">{entry.models.join(", ")}</span>
            )}
            {entry.companies.length > 0 && (
              <span className="font-bold">{entry.companies.join(", ")}</span>
            )}
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex gap-8 w-full">
        <div className="w-1/6" />
        <div
          className="prose prose-2xl prose-black dark:prose-invert text-black dark:text-white"
          dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
        />
      </div>
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
