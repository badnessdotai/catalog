import {
  getPostBySlug as getEntryBySlug,
  getAllEntries,
} from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import Link from "next/link";
import EntryCard from "@/components/EntryCard";
import Head from "next/head";

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
      <div className="flex flex-col items-start mt-32">
        <div className="font-mono text-lg lg:text-3xl truncate uppercase">
          <span className="font-bold">
            {entry.date.toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
        <h1 className="font-serif text-4xl lg:text-7xl mt-4">
          {entry.title}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-start mt-24">
        <div className="w-1/5 lg:w-1/6">
          <div className="font-mono text-lg lg:text-3xl truncate uppercase">
            {entry.categories.length > 0 && (
              <div>
                <p className=" text-gray-400 mb-2">CATEGORIES</p>
                <span className=" flex flex-wrap gap-2">
                  {entry.categories.map((c) => (
                    <Link key={c} href={`/categories/${c}`}>
                      {c}
                    </Link>
                  ))}
                </span>
              </div>
            )}
            {entry.companies.length > 0 && (
              <div>
                <p className=" text-gray-400 mb-2 mt-12">COMPANIES</p>
                <span className="flex flex-wrap gap-2">
                  {entry.companies.map((c) => (
                    <Link key={c} href={`/companies/${c}`}>
                      {c}
                    </Link>
                  ))}
                </span>
              </div>
            )}
            {entry.models.length > 0 && (
              <div>
                <p className=" text-gray-400 mb-2 mt-12">MODELS</p>
                <span className=" flex flex-wrap gap-2">
                  {entry.models.map((c) => (
                    <Link key={c} href={`/models/${c}`}>
                      {c}
                    </Link>
                  ))}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 w-full">
          <div
            className="text-4xl text-black dark:text-white mb-32"
            dangerouslySetInnerHTML={{ __html: renderedMarkdown.replaceAll("</p>\n<p>", "</p><br><p>") }}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start mt-24">
        <div className="w-1/5 lg:w-1/6">
        </div>
        <div className="flex-1 w-full">
          <div>
            {relatedEntries.length > 0 && (
              <div className="flex gap-8 w-full mt-16">
                <div className="lg:w-5/6">
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
          </div>
        </div>
      </div>
    </article>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  // https://beta.nextjs.org/docs/api-reference/metadata

  const { slug } = params;
  const entry = getEntryBySlug(slug);

  return { title: entry.title + " | Badness.ai" };
}

export async function generateStaticParams() {
  const entries = getAllEntries();

  return entries.map((e) => {
    return {
      slug: e.slug,
    };
  });
}
