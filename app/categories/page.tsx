import IndexPage from "@/components/IndexPage";
import { getAllEntries, getCategoriesByCount } from "@/lib/api";
import Link from "next/link";

export default function Categories() {
  const categoryByCount = getCategoriesByCount();

  return (
    <IndexPage title="Categories" category="">
      {categoryByCount.map((c) => {
        return (
          <div key={c.category} className="font-mono uppercase text-4xl">
            <Link href={`/categories/${c.category}`}>
              <span>{c.category}</span>
              <span className="ml-4 opacity-50">{c.count}</span>
            </Link>
          </div>
        );
      })}
    </IndexPage>
  );
}
