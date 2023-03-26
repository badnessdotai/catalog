import Link from "next/link";
import "./globals.css";
import Fonts from "../components/Fonts";

export const metadata = {
  title: "Badness | Collaborative catalog of AI harms",
  description:
    "To build safer and more responsible AI systems, we must learn from the mistakes of the past.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Fonts />
      <body className="bg-[#faf8f0] dark:bg-black text-black dark:text-white p-4 mx-auto md:p-8 overflow-x-hidden 2xl:max-w-screen-2xl">
        <nav className="flex items-baseline md:items-center justify-between gap-6">
          <Link href="/" className="text-2xl md:text-3xl font-mono font-bold">
            AI BADNESS
          </Link>
          <hr className="border-b hidden md:block grow" />
          <div className="flex items-center gap-6">
            <Link href="/about" className="font-mono text-lg md:text-xl">
              ABOUT
            </Link>
            <Link href="/contribute" className="font-mono text-lg md:text-xl">
              CONTRIBUTE
            </Link>
          </div>
        </nav>
        <hr className="grow mt-2 md:hidden" />
        {children}
      </body>
    </html>
  );
}
