"use client";

import { Source_Sans_Pro, Source_Serif_Pro } from "next/font/google";

import "@fontsource/iosevka";

import { useServerInsertedHTML } from "next/navigation";

const sourceSans = Source_Sans_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const sourceSerif = Source_Serif_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

function Fonts() {
  useServerInsertedHTML(() => {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              --primary-font: ${sourceSans.style.fontFamily};
              --serif-font: ${sourceSerif.style.fontFamily};
              --mono-font: Iosevka, monospace;
            }
            `,
        }}
      />
    );
  });

  return null;
}

export default Fonts;
