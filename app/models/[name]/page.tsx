import EntryCard from "@/components/EntryCard";
import IndexPage from "@/components/IndexPage";
import { getAllEntries, getModelsByCount } from "@/lib/api";
import { notFound } from "next/navigation";

export default function Categories({ params }: { params: { name: string } }) {
  const { name } = params;

  // De-url encode the name
  const decodedName = decodeURIComponent(name);

  const entries = getAllEntries().filter((e) => e.models.includes(decodedName));

  if (entries.length === 0) {
    notFound();
  }

  return (
    <IndexPage title={decodedName} category="Model">
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
  const entries = getModelsByCount();

  return entries.map((e) => {
    return {
      name: encodeURIComponent(e.model),
    };
  });
}
