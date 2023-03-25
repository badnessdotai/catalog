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
      <body className="bg-white dark:bg-black text-black dark:text-white m-4 md:m-8 lg:mx-16 2xl:mx-auto 2xl:max-w-screen-2xl">
        <nav className="flex items-center justify-between gap-6">
          <Link href="/" className="text-3xl font-mono font-bold">
            AI BADNESS
          </Link>
          <hr className="grow border-b border-b-4" />
          <div className="flex items-center gap-6">
            <Link href="/" className="font-mono text-xl">
              SEARCH
            </Link>
            <Link href="/" className="font-mono text-xl">
              ABOUT
            </Link>
            <Link href="/" className="font-mono text-xl">
              CONTRIBUTE
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
