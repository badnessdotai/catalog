import EntryCard from "@/components/EntryCard";
import IndexPage from "@/components/IndexPage";
import { getAllEntries } from "@/lib/api";

export default function Categories() {
  const entries = getAllEntries();

  return (
    <IndexPage title="Catalog" category="">
      {entries.map((c) => {
        return <EntryCard key={c.slug} entry={c} withTopline={true} />;
      })}
    </IndexPage>
  );
}
