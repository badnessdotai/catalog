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
    <article className="mx-auto max-w-screen-lg">
      <div className="flex flex-col items-start mt-16 lg:mt-32">
        <div className="font-mono text-lg lg:text-xl truncate uppercase">
          <span>
            {entry.date.toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
        <h1 className="font-serif text-3xl md:text-6xl mt-2 lg:mt-4">
          {entry.title}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-start mt-12 lg:mt-24">
        <div className="lg:w-1/6">
          <div className="font-mono lg:text-xl truncate uppercase flex flex-wrap lg:flex-col gap-12">
            {entry.categories.length > 0 && (
              <div>
                <p className="text-gray-400 mb-1">CATEGORIES</p>
                <span className="flex flex-col gap-1">
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
                <p className="text-gray-400 mb-1">COMPANIES</p>
                <span className="flex flex-col gap-1">
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
                <p className="text-gray-400 mb-1">MODELS</p>
                <span className="flex flex-col gap-1">
                  {entry.models.map((c) => (
                    <Link key={c} href={`/models/${c}`}>
                      {c}
                    </Link>
                  ))}
                </span>
              </div>
            )}
            <div>
              <p className="text-gray-400 mb-1">EXPERIMENTAL</p>
              <span className="flex flex-col gap-1">
                {entry.experimental}
              </span>
            </div>
            {entry.sources.length > 0 && (
              <div>
                <p className="text-gray-400 mb-1">SOURCES</p>
                <span className="flex flex-col gap-1">
                  {entry.sources.map((source, i) => (
                    <a key={i} href={source}>
                      Source #{i + 1}
                    </a>
                  ))}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 w-full mt-12 lg:mt-0">
          <div
            className="text-xl lg:text-2xl text-black dark:text-white"
            dangerouslySetInnerHTML={{
              __html: renderedMarkdown.replaceAll("</p>\n<p>", "</p><br><p>"),
            }}
          />
          <div>
            {relatedEntries.length > 0 && (
              <div className="flex gap-8 w-full mt-16">
                <div className="lg:w-5/6">
                  <div className="font-mono uppercase lg:text-xl mb-6">
                    See Also
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {relatedEntries.slice(0, 4).map((e) => (
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
