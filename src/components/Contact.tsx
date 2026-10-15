"use client";

import { useState, type FormEvent } from "react";
import { FadeIn } from "./FadeIn";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message"),
      }),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-border px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — heading + info */}
          <FadeIn delay={0.1}>
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl lg:text-6xl">
                Let&rsquo;s build
                <br />
                something.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted">
                I&rsquo;m always open to interesting conversations&mdash;whether
                it&rsquo;s a role, a collaboration, or a side project that keeps
                you up at night.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 size-4 shrink-0 text-accent">
                    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                    <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                  </svg>
                  <div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-fg-muted">Email</span>
                    <a href="mailto:piyushmajee28@gmail.com" className="mt-0.5 block text-sm font-medium text-fg transition-colors hover:text-accent">
                      piyushmajee28@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="relative mt-1.5 flex size-3 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
                  </span>
                  <div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-fg-muted">Availability</span>
                    <p className="mt-0.5 text-sm font-medium text-fg">Open to opportunities</p>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block font-mono text-[10px] tracking-widest uppercase text-fg-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full border-b border-border bg-transparent pb-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-muted/40 focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-[10px] tracking-widest uppercase text-fg-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full border-b border-border bg-transparent pb-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-muted/40 focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-[10px] tracking-widest uppercase text-fg-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="mt-2 w-full resize-none border-b border-border bg-transparent pb-3 text-sm leading-relaxed text-fg outline-none transition-colors placeholder:text-fg-muted/40 focus:border-accent"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="group inline-flex items-center gap-2 bg-fg px-6 py-3 font-mono text-xs tracking-widest uppercase text-bg transition-colors hover:bg-accent disabled:opacity-60"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "sent" ? (
                    "Message sent!"
                  ) : status === "error" ? (
                    "Failed — try again"
                  ) : (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3.5 transition-transform group-hover:translate-x-0.5">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
