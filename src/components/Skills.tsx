"use client";

import { type IconType } from "react-icons";
import { FaJava, FaAws, FaCss3Alt } from "react-icons/fa";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFastapi,
  SiTailwindcss,
  SiLangchain,
  SiPytorch,
  SiApachekafka,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiJenkins,
  SiCplusplus,
  SiGraphql,
  SiHtml5,
} from "react-icons/si";
import { TbApi, TbDatabase, TbServer, TbSettings, TbCloud } from "react-icons/tb";
import { FadeIn } from "./FadeIn";

interface Skill {
  name: string;
  icon: IconType;
}

const SKILLS: Skill[] = [
  { name: "Java", icon: FaJava },
  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "SQL", icon: TbDatabase },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "LangChain", icon: SiLangchain },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Kafka", icon: SiApachekafka },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "AWS", icon: FaAws },
  { name: "OCI", icon: TbCloud },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redis", icon: SiRedis },
  { name: "Git", icon: SiGit },
  { name: "Jenkins", icon: SiJenkins },
  { name: "REST APIs", icon: TbApi },
  { name: "GraphQL", icon: SiGraphql },
  { name: "System Design", icon: TbSettings },
  { name: "Microservices", icon: TbServer },
];

export function Skills() {
  return (
    <section className="border-t border-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0.1}>
          <h2 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-3 text-base text-fg-muted">
            Tools and technologies I use to build things.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-alt/50 px-4 py-2 text-sm text-fg-muted transition-colors hover:border-accent/40 hover:text-fg"
              >
                <skill.icon className="size-4 shrink-0" />
                {skill.name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
