import EntryCard from "@/components/EntryCard";
import IndexPage from "@/components/IndexPage";
import { getAllEntries } from "@/lib/api";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Catalog | Badness.ai",
};

export default function Categories() {
  const entries = getAllEntries();

  if (entries.length === 0) {
    notFound();
  }

  return (
    <IndexPage title="Catalog" category="">
      {entries.map((c) => {
        return <EntryCard key={c.slug} entry={c} withTopline={true} />;
      })}
    </IndexPage>
  );
}
