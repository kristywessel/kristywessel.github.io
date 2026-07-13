import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Kristy Wessel" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Kristy Wessel`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  errorComponent: ProjectError,
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <article className="container-narrow pt-10 pb-16 md:pt-14">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-terracotta"
        >
          <ArrowLeft size={14} /> All projects
        </Link>

        <header className="mt-8 grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sage-deep">
              {project.category}
            </p>
            <h1 className="mt-2 font-display text-4xl leading-tight md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-foreground/80">{project.summary}</p>
          </div>
          <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-5 text-sm md:grid-cols-1">
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Role</dt>
              <dd className="mt-1 font-semibold">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Timeframe</dt>
              <dd className="mt-1 font-semibold">{project.year}</dd>
            </div>
            {project.link && (
              <div className="col-span-2 md:col-span-1">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Live site</dt>
                <dd className="mt-1">
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 font-semibold text-terracotta hover:underline"
                  >
                    {project.link.label} <ArrowUpRight size={14} />
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </header>

        <div
          aria-hidden
          className="mt-10 h-56 w-full rounded-3xl md:h-72"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--terracotta-soft) 65%, transparent), color-mix(in oklab, var(--sage) 55%, transparent))",
          }}
        />

        <div className="mt-12 grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <div className="prose-lite">
            <h2 className="font-display text-2xl">About this project</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/85">
              {project.description.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {project.extraLinks && project.extraLinks.length > 0 && (
              <>
                <h3 className="mt-10 font-display text-xl">Further reading</h3>
                <ul className="mt-3 space-y-2">
                  {project.extraLinks.map((l: { label: string; href: string }) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-terracotta hover:underline"
                      >
                        {l.label} <ArrowUpRight size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg">Tools & skills</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((t: string) => (
                <li
                  key={t}
                  className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground/80"
                >
                  {t}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-16 flex flex-col gap-3 rounded-2xl border border-border bg-cream/60 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sage-deep">
              Next project
            </p>
            <p className="mt-1 font-display text-xl">{next.title}</p>
          </div>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="inline-flex items-center gap-1.5 rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform"
          >
            View next <ArrowUpRight size={14} />
          </Link>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}

function ProjectNotFound() {
  const { slug } = Route.useParams();
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="container-narrow py-24 text-center">
        <h1 className="font-display text-4xl">Project not found</h1>
        <p className="mt-3 text-muted-foreground">
          No project matches "{slug}". It may have been renamed or removed.
        </p>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Back to projects
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function ProjectError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  console.error(error);
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="container-narrow py-24 text-center">
        <h1 className="font-display text-3xl">This project didn't load</h1>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 inline-flex items-center rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Try again
        </button>
      </div>
      <SiteFooter />
    </div>
  );
}
