import EntryCard from "@/components/EntryCard";
import IndexPage from "@/components/IndexPage";
import {
  getAllEntries,
  getCategoryDescription,
  getCategoriesByCount,
} from "@/lib/api";
import Link from "next/link";

export default function Categories({ params }: { params: { name: string } }) {
  const { name } = params;

  // De-url encode the name
  const decodedName = decodeURIComponent(name);

  const categoryDescription = getCategoryDescription(decodedName);

  const entries = getAllEntries().filter((e) =>
    e.categories.includes(decodedName)
  );

  return (
    <IndexPage
      title={decodedName}
      category="Category"
      description={categoryDescription}
    >
      {entries.map((c) => {
        return <EntryCard key={c.slug} entry={c} withTopline={true} />;
      })}
    </IndexPage>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}) {
  // https://beta.nextjs.org/docs/api-reference/metadata

  const { name } = params;

  return { title: decodeURIComponent(name) + " | Badness.ai" };
}

export async function generateStaticParams() {
  const entries = getCategoriesByCount();

  return entries.map((e) => {
    return {
      name: encodeURIComponent(e.category),
    };
  });
}
