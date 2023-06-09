export const metadata = {
  title: "About | Badness.ai",
};

export default function About() {
  return (
    <main>
      <section className="mt-32 lg:mt-64 w-full">
        <article className="flex flex-col gap-8 justify-end max-w-3xl mx-auto">
          <h1 className="text-6xl lg:text-9xl font-serif">About Us</h1>
          <p className="text-xl lg:text-4xl font-sans">
            Badness.ai is an open-source, community-operated catalog of harms
            involving generative AI, built in pursuit of safer, more responsible
            AI systems.
          </p>
          <div className="prose lg:prose-2xl dark:prose-invert text-black dark:text-white">
            <p>
              Generative AI is an exciting platform shift that will transform
              our lives. But it also comes with profound implications for
              society. We believe that a healthy dose of caution, sobriety, and
              pragmatism toward generative AI are crucial for developing safer,
              more robust AI systems.
            </p>

            <p>
              Badness.ai is scoped to examples of harm involving generative AI,
              not AI and machine learning more broadly. Generative AI increases
              the space of things that machine learning models can say or do by
              many orders of magnitude. This inflection not only unlocks
              proportional business value but also scales up the surface area of
              opportunities for badness. By focusing on generative AI, we can
              help mitigate these systemic risks in the early days before they
              are baked into the technologies we use.
            </p>

            <p>
              Examples of generative AI badness are everywhere; on the news,
              Twitter, on various forums, and elsewhere across the internet.
              Examples can be of people abusing generative AI to cause harm, or
              harm initiated by the systems themselves. Examples can be from
              demonstrative settings or empirical behavior out in the wild.
              Badness.ai is a systematic catalog of all these stories, assembled
              by — and for — the community.
            </p>

            <p>
              By thoughtfully documenting and curating past failures of
              generative AI systems, we hope we can empower model developers and
              application developers to take a more proactive approach to safety
              &mdash; and not repeat past mistakes. We equally hope that our
              catalog aides policymakers, journalists, and the public in
              understanding and responding to the unique safety challenges of
              generative AI. We hope to do so without falling into the trap of
              sensationalism, fearmongering, or information overload.
            </p>

            <p>
              Badness.ai is inspired by the{" "}
              <a href="https://incidentdatabase.ai/">AI Incidents Database</a>,{" "}
              <a href="https://privacyspy.org">PrivacySpy</a>,{" "}
              <a href="https://web3isgoinggreat.com/">Web3IsGoingGreat.com</a>{" "}
              and a number of other projects. We are grateful for these projects
              and the inspiration they have provided.
            </p>

            <p className="italic">
              Badness.ai is an open source project, and we expect our purpose
              and scope to evolve over time in partnership with the broader AI
              safety community.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
