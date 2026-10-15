export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt/30 px-6 pt-16 pb-8 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Top grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <span className="font-display text-lg font-bold tracking-tight text-fg">
              PM.
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-fg-muted">
              Software engineer with experience in{" "}
              <span className="font-medium text-accent">backend systems</span>,{" "}
              <span className="font-medium text-accent">applied AI</span>, and{" "}
              <span className="font-medium text-accent">distributed infrastructure</span>.
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-fg-muted">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3.5 shrink-0 text-accent/60">
                <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
              </svg>
              Delhi, India
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold text-fg">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              <li><a href="#projects" className="text-sm text-fg-muted transition-colors hover:text-accent">Projects</a></li>
              <li><a href="#writeups" className="text-sm text-fg-muted transition-colors hover:text-accent">Writeups</a></li>
              <li><a href="#contact" className="text-sm text-fg-muted transition-colors hover:text-accent">Contact</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold text-fg">About</h4>
            <ul className="mt-4 space-y-2.5">
              <li><a href="#about" className="text-sm text-fg-muted transition-colors hover:text-accent">About me</a></li>
              <li><a href="#experience" className="text-sm text-fg-muted transition-colors hover:text-accent">Experience</a></li>
              <li><a href="/resume.pdf" className="text-sm text-fg-muted transition-colors hover:text-accent">Resume</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-fg">Social</h4>
            <ul className="mt-4 space-y-2.5">
              <li><a href="https://github.com/dronzer-28" target="_blank" rel="noopener noreferrer" className="text-sm text-fg-muted transition-colors hover:text-accent">GitHub</a></li>
              <li><a href="https://linkedin.com/in/piyushmajee" target="_blank" rel="noopener noreferrer" className="text-sm text-fg-muted transition-colors hover:text-accent">LinkedIn</a></li>
              <li><a href="mailto:piyushmajee28@gmail.com" className="text-sm text-fg-muted transition-colors hover:text-accent">Email</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-border pt-6 text-center">
          <span className="font-mono text-xs text-fg-muted">
            &copy; 2026 Piyush Majee
          </span>
        </div>
      </div>
    </footer>
  );
}
