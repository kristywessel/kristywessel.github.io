import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

const categoryStyles: Record<Project["category"], string> = {
  "Web Development": "bg-terracotta/10 text-terracotta",
  "Design Systems": "bg-sage/15 text-sage-deep",
  Leadership: "bg-accent text-accent-foreground",
  Teaching: "bg-sage-deep/10 text-sage-deep",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-terracotta/40 hover:shadow-[0_18px_40px_-24px_color-mix(in_oklab,var(--terracotta)_55%,transparent)]"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${categoryStyles[project.category]}`}
        >
          {project.category}
        </span>
        <span className="text-xs text-muted-foreground">{project.year}</span>
      </div>

      <h3 className="mt-5 font-display text-2xl leading-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{project.role}</p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tools.slice(0, 4).map((tool) => (
          <span
            key={tool}
            className="rounded-md border border-border/70 bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
          >
            {tool}
          </span>
        ))}
        {project.tools.length > 4 && (
          <span className="rounded-md px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
            +{project.tools.length - 4}
          </span>
        )}
      </div>

      <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
        View project
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
