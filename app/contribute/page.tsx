export default function About() {
  return (
    <main>
      <section className="flex lg:mt-64 gap-8">
        <div className="w-1/6 hidden md:block" />
        <article className="flex flex-col gap-8 justify-end max-w-5xl">
          <h1 className="text-9xl font-serif">Contribute</h1>
          <p className="text-4xl font-sans">
            There's tons of work to do. Here's how you can help.
          </p>
          <div className="prose prose-2xl dark:prose-invert text-black dark:text-white prose-headings:font-serif prose-headings:font-normal">
            <p>
              Aspirationally, this website will be the largest repository of
              verified incidents of distinct harm caused by AI systems. We can
              only achieve this goal with help from contributors like you. This
              page lays out the values of our project, various ways you can
              contribute, and guidelines for our content.
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
                not "anti-AI" &mdash; not by a long shot.
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
              <a href="https://github.com/badnessdotorg/catalog/issues">
                create a GitHub issue
              </a>{" "}
              on our repository.
            </p>
            <p>
              To add a new incident to the catalog, please do so using a GitHub
              pull request. Incidents of harm are stored in the{" "}
              <code>catalog/</code> directory; simply add a new file there. You
              can use the existing incidents as a reference.
            </p>
            <p>
              All contributions to the project are subject to review by the
              project maintainers. We will do our best to respond to all
              contributions in a timely manner. If you have any questions about
              the project, please feel free to reach out to us via GitHub or
              email.
            </p>
            <h2>Contribution Guideliens</h2>
            <p>
              We expect all contributors to follow our{" "}
              <a href="https://github.com/badnessdotorg/catalog/blob/main/CODE_OF_CONDUCT.md">
                code of conduct
              </a>
              , which is modeled after the Contributor Covenant. All
              contributions are licensed under the Apache 2.0 license.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
