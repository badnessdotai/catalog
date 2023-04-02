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
      <div className="flex flex-col lg:flex-row items-start mt-12 lg:mt-24 gap-12">
        <div className="lg:w-1/6">
          <div className="font-mono lg:text-xl uppercase flex flex-wrap lg:flex-col gap-12">
            {entry.categories.length > 0 && (
              <div>
                <p className="text-gray-400 mb-1">CATEGORIES</p>
                <span className="flex flex-col gap-1">
                  {entry.categories.map((c) => (
                    <Link key={c} href={`/categories/${encodeURIComponent(c)}`}>
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
                    <Link key={c} href={`/companies/${encodeURIComponent(c)}`}>
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
                    <Link key={c} href={`/models/${encodeURIComponent(c)}`}>
                      {c}
                    </Link>
                  ))}
                </span>
              </div>
            )}
            <div>
              <p className="text-gray-400 mb-1">EXPERIMENTAL</p>
              <span className="flex flex-col gap-1">
                {entry.experimental ? "Yes" : "No"}
              </span>
            </div>
            {entry.sources.length > 0 && (
              <div>
                <p className="text-gray-400 mb-1">SOURCES</p>
                <span className="flex flex-col gap-1">
                  {entry.sources.map((c) => {
                    const url = new URL(c);
                    const hostname = url.hostname.startsWith("www.")
                      ? url.hostname.slice(4)
                      : url.hostname;
                    return (
                      <a key={c} href={url.href} className="block max-w-full">
                        {`${hostname} ↗`}
                      </a>
                    );
                  })}
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
          {entry.experimental && (
            <div
              className="border-2 border-t-8 border-black dark:border-white rounded-b text-black dark:text-white px-4 py-3 mt-16"
              role="alert"
            >
              <div className="flex">
                <div className="py-1">
                  <svg
                    className="fill-current h-6 w-6 text-black dark:text-white mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">
                    The example above is experimental.
                  </p>
                  <p className="text-sm">
                    It was produced to demonstrate a real-world harm; although
                    no actual harm was caused in this setting, the example
                    exhibits a potential risk.
                  </p>
                </div>
              </div>
            </div>
          )}
          <div>
            {relatedEntries.length > 0 && (
              <div className="w-full mt-16">
                <div className="font-mono uppercase lg:text-xl mb-8">
                  See Also
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                  {relatedEntries.slice(0, 4).map((e) => (
                    <div key={e.slug}>
                      <EntryCard entry={e} withTopline={true} />
                    </div>
                  ))}
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
