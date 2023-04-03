import {
  getPostBySlug as getEntryBySlug,
  getAllEntries,
  getSourceTitle,
} from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import Link from "next/link";
import EntryCard from "@/components/EntryCard";
import { notFound } from "next/navigation";

export default async function EntryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const entry = getEntryBySlug(slug);

  if (entry === null) {
    notFound();
  }

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
              <p className="text-gray-400 mb-1">DEMONSTRATIVE</p>
              <span className="flex flex-col gap-1">
                {entry.demonstrative ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full mt-12 lg:mt-0">
          <div
            className="text-xl lg:text-2xl text-black dark:text-white mb-2"
            dangerouslySetInnerHTML={{
              __html: renderedMarkdown.replaceAll("</p>\n<p>", "</p><br><p>"),
            }}
          />
          {entry.demonstrative && (
            <div className="text-xl lg:text-2xl text-black dark:text-white mb-2 mt-8">
              <strong>This entry is demonstrative.</strong> It was produced in
              an experimental environment to demonstrate a real-world harm;
              although no actual harm was caused in this setting, this entry
              exhibits a potential risk.
            </div>
          )}
          {entry.sources.length > 0 && (
            <div className="mt-12">
              <div className="font-serif text-lg lg:text-2xl mb-6">Sources</div>
              <span className="flex flex-col gap-3 text-xl lg:text-2xl">
                {await Promise.all(
                  entry.sources.map(async (c) => {
                    const url = new URL(c);
                    const hostname = url.hostname.startsWith("www.")
                      ? url.hostname.slice(4)
                      : url.hostname;
                    const title = await getSourceTitle(url.href);
                    return (
                      <a key={c} href={url.href} className="block max-w-full">
                        <div className="text-black dark:text-white flex flex-row overflow-y-hidden items-baseline h-[1.1em]">
                          <p className="font-mono text-lg lg:text-xl">
                            {hostname.toLocaleUpperCase()}
                            <span className="font-sans">&nbsp;&#8599;</span>
                          </p>
                          {title && (
                            <p className="truncate ml-4 lg:ml-6">{title}</p>
                          )}
                        </div>
                      </a>
                    );
                  })
                )}
              </span>
            </div>
          )}
          <div>
            {relatedEntries.length > 0 && (
              <div className="w-full mt-16">
                <div className="font-serif text-lg lg:text-2xl mb-8">
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

  return { title: entry?.title + " | Badness.ai" };
}

export async function generateStaticParams() {
  const entries = getAllEntries();

  return entries.map((e) => {
    return {
      slug: e.slug,
    };
  });
}
