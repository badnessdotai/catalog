export default function About() {
  return (
    <main>
      <section className="flex lg:mt-64 gap-8">
        <div className="w-1/6 hidden md:block" />
        <article className="flex flex-col gap-8 justify-end max-w-5xl">
          <h1 className="text-9xl font-serif">About Us</h1>
          <p className="text-4xl font-sans">
            Badness.org is an open-source, community-operated database of AI
            harms, built in pursuit of safer, more responsible AI systems.
          </p>
          <div className="prose prose-2xl dark:prose-invert text-black dark:text-white">
            <p>
              AI is an exciting platform shift that will transform our lives.
              But it also comes with profound implications for society. We
              believe that a healthy dose of caution, sobriety, and pragmatism
              toward AI are crucial for developing safer, more robust AI
              systems.
            </p>

            <p>
              Examples of AI badness are everywhere; on the news, Twitter, on
              various forums, and elsewhere across the internet. Badness.org is
              a systematic catalog of these stories, assembled by — and for —
              the community.
            </p>

            <p>
              By thoughtfully documenting past failures of AI systems, we hope
              we can empower model developers and application developers to take
              a more proactive approach to safety — and not repeat past
              mistakes. We equally hope that our catalog aides policymakers,
              journalists, and the public in understanding and responding to the
              unique safety challenges of AI.
            </p>

            <p className="italic">
              Badness.org is an open source project, and we expect our purpose
              and scope to evolve over time in partnership with the broader AI
              safety community.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
