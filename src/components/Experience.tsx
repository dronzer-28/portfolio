import { FadeIn } from "./FadeIn";

interface Role {
  company: string;
  title: string;
  period: string;
  description: string;
  tags: string[];
}

const ROLES: Role[] = [
  {
    company: "Oracle",
    title: "Member of Technical Staff I",
    period: "Jul 2025 – Apr 2026",
    description:
      "Owned core modules of Oracle Service Bus routing millions of API calls daily for enterprise customers. Redesigned the REST transport's I/O layer to stream arbitrarily large payloads, dropping p99 latency by 35%. Architected TriageX, a RAG-based bug triage platform on OCI that hit ~80% retrieval accuracy and reduced mean time to root-cause by 50% across four engineering teams.",
    tags: ["Java", "WebLogic", "OCI", "LangChain", "ADF", "REST"],
  },
  {
    company: "Oracle",
    title: "Software Developer Intern",
    period: "May 2024 – Jul 2024",
    description:
      "Built a test analytics platform that gave the team visibility into test health across 1,200+ runs for the first time. Automated environment provisioning end-to-end with Jenkins, turning a manual setup into a one-click deploy.",
    tags: ["Java", "Jenkins", "CI/CD", "Testing", "REST APIs"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0.1}>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Where I&rsquo;ve worked
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-0">
          {ROLES.map((role, i) => (
            <FadeIn key={role.company + role.title} delay={0.1 * (i + 1)}>
              <article className="group grid gap-4 border-t border-border py-8 first:border-t-0 lg:grid-cols-[200px_1fr] lg:gap-12">
                <div className="font-mono text-xs tracking-wider text-fg-muted">
                  {role.period}
                </div>
                <div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                    <h3 className="text-lg font-semibold text-fg">
                      {role.title}
                    </h3>
                    <span className="text-sm text-accent">{role.company}</span>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-muted">
                    {role.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-2.5 py-0.5 font-mono text-[11px] tracking-wider text-fg-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
