import IndexPage from "@/components/IndexPage";
import { getCompaniesByCount } from "@/lib/api";
import Link from "next/link";

export default function Companies() {
  const categoryByCount = getCompaniesByCount();

  return (
    <IndexPage title="Companies" category="">
      {categoryByCount.map((c) => {
        return (
          <div key={c.company} className="font-mono uppercase text-4xl">
            <Link href={`/companies/${c.company}`}>
              <span>{c.company}</span>
              <span className="ml-4 opacity-50">{c.count}</span>
            </Link>
          </div>
        );
      })}
    </IndexPage>
  );
}
