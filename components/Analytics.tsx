"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";

const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    posthog.init("phc_F1WsfAUHRIas1BBeCcZWpxEbKILdZV1PlmzZnUwrIcY", {
      api_host: "https://app.posthog.com",
      // Disable in development
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.opt_out_capturing();
      },
    });

    posthog?.capture("$pageview");
    console.log("Pageview captured", { pathname, searchParams });
  }, [pathname, searchParams]);

  return null;
};

export default Analytics;
