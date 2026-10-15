import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          {/* Left column — photo or visual */}
          <FadeIn delay={0.1}>
            <div className="aspect-[4/5] w-full bg-bg-alt border border-border flex items-center justify-center">
              <span className="font-mono text-xs text-fg-muted uppercase tracking-wider">
                Photo
              </span>
            </div>
          </FadeIn>

          {/* Right column — bio */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                About Me
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-fg-muted lg:text-lg">
                <p>I'm a software engineer who lives across the full stack. I build web applications, AI agents, and developer tools. The kind of systems where clean architecture meets intelligent automation.</p>
                <p>Whether it's designing APIs, building agent workflows, or getting models to behave in production, I care about the engineering that makes things reliable. If it involves Python, TypeScript, or LLMs, that's where I do my best work.</p>
                <p>Other interests: Running, reading manhwa and fiction novels.</p>
                <p>Currently freelancing and always chasing problems worth solving.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
