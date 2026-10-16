import { FadeIn } from "./FadeIn";

interface Post {
  title: string;
  date: string;
  topic: string;
  excerpt: string;
  href: string;
}

const POSTS: Post[] = [];

export function Writeups() {
  return (
    <section
      id="writeups"
      className="border-t border-border px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0.1}>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Thinking in public
          </h2>
          <p className="mt-3 max-w-xl text-base text-fg-muted">
            Notes on engineering, architecture, and the craft of building
            software that lasts.
          </p>
        </FadeIn>

        {POSTS.length > 0 && (
          <div className="mt-16">
            {POSTS.map((post, i) => (
              <FadeIn key={post.title} delay={0.08 * (i + 1)}>
                <a
                  href={post.href}
                  className="group grid gap-4 border-t border-border py-7 transition-colors first:border-t-0 lg:grid-cols-[140px_1fr_auto] lg:gap-8"
                >
                  <div className="flex items-baseline gap-3 lg:flex-col lg:gap-1">
                    <span className="font-mono text-xs tracking-wider text-fg-muted">
                      {post.date}
                    </span>
                    <span className="border border-border px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase text-accent">
                      {post.topic}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-fg group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg-muted">
                      {post.excerpt}
                    </p>
                  </div>

                  <span className="hidden items-center font-mono text-xs tracking-wider text-fg-muted opacity-0 transition-opacity group-hover:opacity-100 lg:flex">
                    Read &rarr;
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        )}

        <FadeIn delay={0.2}>
          <p className="mt-12 font-mono text-sm text-fg-muted">
            Coming soon.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
