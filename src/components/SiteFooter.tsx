import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-cream/60">
      <div className="container-narrow flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-foreground">Let's build something warm.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Based in Lakeville, MN. Available for thoughtful front end and UX work.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href="https://linkedin.com/in/kristywessel"
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground transition-colors hover:text-terracotta"
          >
            LinkedIn
          </a>
          <a
            href="mailto:wessel.kristy@gmail.com"
            className="text-muted-foreground transition-colors hover:text-terracotta"
          >
            wessel.kristy@gmail.com
          </a>
          <Link to="/contact" className="text-muted-foreground transition-colors hover:text-terracotta">
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container-narrow py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kristy Wessel. Handcrafted in Minnesota.
        </div>
      </div>
    </footer>
  );
}
