import EntryCard from "@/components/EntryCard";
import IndexPage from "@/components/IndexPage";
import { getAllEntries, getCategoriesByCount } from "@/lib/api";
import Link from "next/link";

export default function Categories({ params }: { params: { name: string } }) {
  const { name } = params;

  // De-url encode the name
  const decodedName = decodeURIComponent(name);

  const entries = getAllEntries().filter((e) =>
    e.categories.includes(decodedName)
  );

  return (
    <IndexPage title={decodedName} category="Category">
      {entries.map((c) => {
        return <EntryCard key={c.slug} entry={c} withTopline={true} />;
      })}
    </IndexPage>
  );
}

export async function generateStaticParams() {
  const entries = getCategoriesByCount();

  return entries.map((e) => {
    return {
      name: encodeURIComponent(e.category),
    };
  });
}
