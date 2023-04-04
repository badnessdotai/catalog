export const metadata = {
  title: "Contribute | Badness.ai",
};

export default function About() {
  return (
    <main>
      <section className="mt-32 lg:mt-64 w-full">
        <article className="flex flex-col gap-8 justify-end max-w-3xl mx-auto">
          <h1 className="text-6xl lg:text-9xl font-serif">Contribute</h1>
          <p className="text-xl lg:text-4xl font-sans">
            There&apos;s tons of work to do. Here&apos;s how you can help.
          </p>
          <div className="prose lg:prose-2xl dark:prose-invert text-black dark:text-white prose-headings:font-serif prose-headings:font-normal">
            <p>
              Aspirationally, this website will be the most high-quality and
              accessible catalog of verified harm caused by AI systems. We can
              only achieve this ambitious goal with help from contributors like
              you. This page lays out the values of our project, various ways
              you can contribute, and guidelines for our content.
            </p>
            <p>
              Badness.ai is an open source project, and we encourage you to
              contribute. You can find the source code on{" "}
              <a href="https://github.com/badnessdotai/catalog">GitHub</a>. This
              project is licensed under the{" "}
              <a href="https://github.com/badnessdotai/catalog/blob/main/LICENSE">
                Apache 2.0 license
              </a>
              , and the content on this website is licensed under the{" "}
              <a href="https://creativecommons.org/licenses/by/4.0/">
                CC BY 4.0
              </a>{" "}
              license (attribution to &ldquo;Badness.ai&rdquo;). By
              contributing, you agree to license your content these terms.
            </p>
            <h2>Our Values</h2>
            <p>Our project is guided by the following values:</p>
            <ol>
              <li>
                <strong>Inclusivity</strong> &mdash; Harms of AI systems often
                disproportionally affect marginalized and underresourced groups;
                it is crucially important that our project &mdash; and our
                contributor community &mdash; reflect this reality.
              </li>
              <li>
                <strong>Grounding</strong> &mdash; We do not speculate about
                hypothetical future harms of AI systems, as legitimate as those
                harms might be. This website is a catalog of <i>past</i> harms.
                We must keep our work grounded in actual, present harms.
              </li>
              <li>
                <strong>Optimism</strong> &mdash; We are optimistic about the
                positive impacts of AI, both now and in the future. We simply
                believe that the best way to build safer and more responsible AI
                systems is to learn from the mistakes of the past. This site is
                not &quot;anti-AI&quot; &mdash; not by a long shot.
              </li>
              <li>
                <strong>Reliability</strong> &mdash; Our project relies on
                well-researched, verifiable instances of harm. We do not accept
                anecdotal evidence. It is crucial that our catalog of harms is
                as accurate as possible. More information about our sourcing and
                verification process is below.
              </li>
            </ol>
            <h2>How to Contribute</h2>
            <p>There are a number of ways you can contribute to the project.</p>
            <p>
              If you have a suggestion, found an issue, or want to share an
              idea, please feel free to{" "}
              <a href="https://github.com/badnessdotai/catalog/issues">
                create a GitHub issue
              </a>{" "}
              on our{" "}
              <a href="https://github.com/badnessdotai/catalog">repository</a>.
            </p>
            <p>
              To add a new incident to the catalog, please do so using a GitHub
              pull request. Incidents of harm are stored in the{" "}
              <code>catalog/</code> directory; simply add a new file there. You
              can use the existing incidents as a reference. Please follow these
              guidelines when contributing an entry:
            </p>
            <ul>
              <li>
                Titles should be a single full sentence, and descriptions should
                be about four full sentences split into paragraphs as needed.
              </li>
              <li>
                Please use active voice whenever possible in your incident
                titles and descriptions, and maintain consistency with the verb
                tense (incidents that happened in the past should use past
                tense, and ongoing incidents should use present tense).
              </li>
              <li>
                When deciding whether an entry is demonstrative or not, consider
                whether the incident was a result of individuals probing the
                system&apos;s boundaries and capabilities, or whether the
                incident took place &ldquo;in the wild&rdquo; and caused real,
                non-hypothetical harm.
              </li>
              <li>
                Badness.ai is a catalog of harms &mdash; demonstrative or not
                &mdash; rather than a catalog of <i>methods</i> for harm. As a
                result, &ldquo;jailbreaks&rdquo; and other demonstrations of
                system vulnerabilities are generally not in scope for the
                catalog, unless they caused demonstrative harm or indicate novel
                potential for harm. For example, a jailbreak used in the wild
                that caused a demonstrative harm would be in scope, but a
                jailbreak that simply demonstrated a vulnerability would not.
              </li>
            </ul>
            <p>
              All contributions to the project are subject to review by the
              project maintainers. We will do our best to respond to all
              contributions in a timely manner. If you have any questions about
              the project, please feel free to reach out to us via GitHub or
              email.
            </p>
            <h2>Contribution Guidelines</h2>
            <p>
              We expect all contributors to follow our{" "}
              <a href="https://github.com/badnessdotorg/catalog/blob/main/CODE_OF_CONDUCT.md">
                code of conduct
              </a>
              , which is modeled after the Contributor Covenant.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
