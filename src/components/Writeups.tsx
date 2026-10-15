import { FadeIn } from "./FadeIn";


interface Post {
  title: string;
  date: string;
  topic: string;
  excerpt: string;
  href: string;
}

const POSTS: Post[] = [
  {
    title: "Writing a title that earns the click without begging for it",
    date: "Sep 2025",
    topic: "Engineering",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
  },
  {
    title: "Lessons from rebuilding a system nobody wanted to touch",
    date: "Jul 2025",
    topic: "Architecture",
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    href: "#",
  },
  {
    title: "The underrated skill of knowing when not to abstract",
    date: "Apr 2025",
    topic: "Craft",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    href: "#",
  },
  {
    title: "On shipping fast without shipping garbage",
    date: "Jan 2025",
    topic: "Process",
    excerpt:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    href: "#",
  },
];

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
            {/* PLACEHOLDER: A line about why you write — what readers get out of it */}
            Notes on engineering, architecture, and the craft of building
            software that lasts.
          </p>
        </FadeIn>

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

        <FadeIn delay={0.5}>
          <div className="mt-10 border-t border-border pt-8">
            <a
              href="#"
              className="font-mono text-xs tracking-widest uppercase text-fg-muted transition-colors hover:text-accent"
            >
              {/* PLACEHOLDER: Link to full blog or archive */}
              View all posts &rarr;
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
