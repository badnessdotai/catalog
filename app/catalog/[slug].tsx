import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug as getEntryBySlug, getAllEntries } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import EntryType from "@/interfaces/entry";

type Props = {
  slug: string;
};

export default function E({ slug }: Props) {
  const router = useRouter();

  const entry = getEntryBySlug(slug);
  console.log(entry);

  if (!router.isFallback && !entry?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <article>
      {router.isFallback ? (
        <span>Loading…</span>
      ) : (
        <>
          <article className="mb-32">(Something)</article>
        </>
      )}
    </article>
  );
}

export async function generateStaticParams() {
  const entries = getAllEntries();

  return {
    paths: entries.map((e) => {
      return {
        params: {
          slug: e.slug,
        },
      };
    }),
    fallback: false,
  };
}
