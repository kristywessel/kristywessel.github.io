import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Kristy Wessel" },
      {
        name: "description",
        content:
          "Selected work from Kristy Wessel — Jamf Pro 11, Target Canada, Thomson Reuters, Washington County Library, and more.",
      },
      { property: "og:title", content: "Projects — Kristy Wessel" },
      {
        property: "og:description",
        content:
          "Selected work from Kristy Wessel — Jamf Pro 11, Target Canada, Thomson Reuters, Washington County Library, and more.",
      },
    ],
  }),
  component: ProjectsIndex,
});

const categories = ["All", "Web Development", "Design Systems", "Leadership", "Teaching"] as const;
type Cat = (typeof categories)[number];

function ProjectsIndex() {
  const [cat, setCat] = useState<Cat>("All");

  const filtered = useMemo(
    () => (cat === "All" ? projects : projects.filter((p) => p.category === cat)),
    [cat],
  );

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="container-narrow pt-14 pb-8 md:pt-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-sage-deep">Portfolio</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">All projects</h1>
        <p className="mt-4 max-w-2xl text-lg text-foreground/80">
          A mix of enterprise SaaS work, small-business web builds, teaching engagements, and
          public-sector programs. Filter by the kind of work you're curious about.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                cat === c
                  ? "border-terracotta bg-terracotta text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-terracotta/40 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-narrow pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
