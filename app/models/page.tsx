import IndexPage from "@/components/IndexPage";
import { getModelsByCount } from "@/lib/api";
import Link from "next/link";

export const metadata = {
  title: "Models | Badness.ai"
};

export default function Models() {
  const categoryByCount = getModelsByCount();

  return (
    <IndexPage title="Models" category="">
      {categoryByCount.map((c) => {
        return (
          <div key={c.model} className="font-mono uppercase text-4xl">
            <Link href={`/models/${c.model}`}>
              <span>{c.model}</span>
              <span className="ml-4 opacity-50">{c.count}</span>
            </Link>
          </div>
        );
      })}
    </IndexPage>
  );
}
