import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import portrait from "@/assets/kristy-portrait.png";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 6);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="grain-bg">
        <div className="container-narrow grid gap-10 py-16 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-16 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-terracotta/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-terracotta">
              <Sparkles size={12} /> Hello, world
            </span>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
              I'm Kristy —<br />
              a front end engineer who leads with{" "}
              <span className="text-terracotta">warmth</span> and{" "}
              <span className="text-sage-deep">craft</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
              Ten-plus years building thoughtful web experiences and mentoring the teams behind
              them — from Target and Thomson Reuters to Jamf, a public library system, and a
              coding bootcamp.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                See selected work <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-terracotta/50"
              >
                About me
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] bg-sage/25"
              style={{ transform: "rotate(-3deg)" }}
            />
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-terracotta-soft/50"
              style={{ transform: "rotate(2deg)" }}
            />
            <img
              src={portrait}
              alt="Portrait of Kristy Wessel"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="container-narrow py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sage-deep">
              Selected work
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Projects I'm proud of</h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:underline"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Quick about */}
      <section className="container-narrow pb-4">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl">A quick hello</h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                My background sits at the intersection of web development and people management.
                I love systems and processes that let teams scale gracefully — design systems,
                accessibility patterns, cross-team rituals — and I care deeply about the humans
                using the software we build.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:underline"
              >
                Read more about me <ArrowRight size={14} />
              </Link>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-border/60 pb-2">
                <span className="text-muted-foreground">Currently</span>
                <span className="font-semibold">Sr. Mgr, UX Eng @ Jamf</span>
              </li>
              <li className="flex justify-between border-b border-border/60 pb-2">
                <span className="text-muted-foreground">Based in</span>
                <span className="font-semibold">Lakeville, MN</span>
              </li>
              <li className="flex justify-between border-b border-border/60 pb-2">
                <span className="text-muted-foreground">Education</span>
                <span className="font-semibold">MS, IT Management</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Focus</span>
                <span className="font-semibold">Design systems & UX</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
