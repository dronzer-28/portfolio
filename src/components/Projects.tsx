import { FadeIn } from "./FadeIn";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    title: "OrderFlow",
    description:
      "E-commerce order platform that handles payments, inventory, and notifications in real time.",
    tags: ["Java 21", "Spring Boot", "Kafka", "PostgreSQL", "Next.js", "Docker"],
    github: "https://github.com/dronzer-28/Event-Driven-Backend-System",
    image: "/projects/orderflow.jpg",
  },
  {
    title: "FraudGuard",
    description:
      "Real-time fraud detection API with XGBoost, SHAP explainability, and drift monitoring.",
    tags: ["Python", "XGBoost", "FastAPI", "SHAP", "Docker"],
    github:
      "https://github.com/dronzer-28/FraudGuard---Fraud-Detection-ML-System",
    image: "/projects/fraudguard.jpg",
  },
  {
    title: "AI Code Review Agent",
    description:
      "LangGraph agent that reviews GitHub PRs and posts inline comments using local LLMs.",
    tags: ["Python", "LangGraph", "Ollama", "GitHub Actions"],
    github: "https://github.com/dronzer-28/AI-code-review-agent",
    image: "/projects/ai-code-review.jpg",
  },
  {
    title: "GPT from Scratch",
    description:
      "Transformer language model built from first principles, bigram to multi-head attention.",
    tags: ["Python", "PyTorch", "Transformers"],
    github: "https://github.com/dronzer-28/gpt-from-scratch",
    image: "/projects/gpt.jpg",
  },
  {
    title: "Low-Level Design",
    description:
      "Rate limiter, URL shortener, Splitwise, and more in Java with clean OOP patterns.",
    tags: ["Java", "OOP", "Design Patterns", "SOLID"],
    github: "https://github.com/dronzer-28/low-level-design",
    image: "/projects/lld.jpg",
  },
  {
    title: "Concurrency & Multithreading",
    description:
      "Thread pools, producer-consumer, dining philosophers, and custom locks in Java.",
    tags: ["Java", "Threads", "Concurrency", "Locks"],
    github: "https://github.com/dronzer-28/Concurrency_and_Multithreading",
    image: "/projects/concurrency.jpg",
  },
  {
    title: "Bluffle",
    description:
      "Wordle-inspired word game where one of the color clues is always lying. Figure out the bluff to find the word.",
    tags: ["React", "TypeScript", "Vite"],
    link: "https://bluffle-one.vercel.app",
    image: "/projects/bluffle.jpg",
  },
  {
    title: "Othello Game",
    description:
      "Classic board game with an AI opponent using minimax and alpha-beta pruning.",
    tags: ["Java", "Minimax", "Alpha-Beta Pruning", "Game AI"],
    github: "https://github.com/dronzer-28/Othello-game",
    image: "/projects/othello.jpg",
  },
  {
    title: "Forkify",
    description:
      "Recipe search and bookmarking app with live API, serving adjustments, and uploads.",
    tags: ["JavaScript", "Parcel", "REST API", "SCSS"],
    github: "https://github.com/dronzer-28/forkify-app",
    image: "/projects/forkify.jpg",
  },
  {
    title: "Customer Churn Predictor",
    description:
      "ANN that predicts bank customer churn with 86% accuracy from transaction data.",
    tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    github: "https://github.com/dronzer-28/Customer-churn-prediction",
    image: "/projects/churn.jpg",
  },
  {
    title: "Sudoku Solver",
    description:
      "Backtracking solver that cracks any valid sudoku puzzle in milliseconds.",
    tags: ["Python", "Backtracking", "Algorithms"],
    github: "https://github.com/dronzer-28/CV-projects",
    image: "/projects/sudoku.jpg",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0.1}>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Things I&rsquo;ve built
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.title} delay={0.1 * (i + 1)}>
              <article className="group flex h-full flex-col p-0 transition-colors">
                <a
                  href={project.link || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mb-6 block aspect-video w-full overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                    <svg
                      className="h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-6h6m0 0v6m0-6L9.75 14.25" />
                    </svg>
                  </div>
                </a>

                <h3 className="font-display text-xl font-bold text-fg">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2 py-0.5 font-mono text-[10px] tracking-wider text-fg-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
