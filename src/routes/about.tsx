import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import portrait from "@/assets/kristy-portrait.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kristy Wessel" },
      {
        name: "description",
        content:
          "About Kristy Wessel: a UX engineering leader and front end engineer with 10+ years across enterprise SaaS, public-sector, and small-business web work.",
      },
      { property: "og:title", content: "About — Kristy Wessel" },
      {
        property: "og:description",
        content:
          "About Kristy Wessel: a UX engineering leader and front end engineer with 10+ years across enterprise SaaS, public-sector, and small-business web work.",
      },
    ],
  }),
  component: About,
});

const skills = [
  { label: "HTML5", value: 95 },
  { label: "CSS3", value: 90 },
  { label: "Design Systems", value: 90 },
  { label: "Web Components", value: 75 },
  { label: "Vue", value: 65 },
  { label: "Accessibility", value: 85 },
];

const experience = [
  {
    role: "Senior Manager, UX Engineering",
    org: "Jamf",
    when: "Dec 2020 – Present",
    blurb:
      "Own the delivery and success of Jamf's design system across all Jamf products. Led the Jamf Pro 11 release, including the highly praised Dark Mode.",
  },
  {
    role: "Founder",
    org: "Write to Heal",
    when: "Apr 2024 – Present",
    blurb:
      "Founded and maintain a WordPress-based digital experience focused on journaling and emotional well-being.",
  },
  {
    role: "Technology Manager",
    org: "Washington County Library",
    when: "Dec 2018 – Dec 2020",
    blurb:
      "Led digital transformation for a library system serving 150,000+ patrons. Website redesign, hotspot & Chromebook lending, and a two-year digital roadmap.",
  },
  {
    role: "Team Lead, UX Development",
    org: "Thomson Reuters",
    when: "Mar 2016 – Dec 2018",
    blurb:
      "Led UX engineering and web standards across 20+ global legal enterprise products, including Westlaw Edge, Practical Law, and the Developer Portal.",
  },
  {
    role: "Instructor, Engineering & UX",
    org: "Prime Digital Academy",
    when: "Jul 2015 – May 2016",
    blurb:
      "Taught front end development, UX foundations, and accessibility. Guided student teams through real client projects for local nonprofits.",
  },
  {
    role: "Front End Engineer",
    org: "Target — Canada launch",
    when: "2012 – 2013",
    blurb:
      "Hired onto the in-house creative team to build Target's Canadian retail website — navigation and landing pages.",
  },
];

const education = [
  {
    degree: "MS, IT Management",
    school: "Saint Mary's University of Minnesota",
    when: "2018",
  },
  {
    degree: "BA, Communications",
    school: "University of Minnesota",
    when: "2011",
  },
  {
    degree: "DesignOps: Scaling UX Design & User Research",
    school: "Nielsen Norman Group",
    when: "2024",
  },
  {
    degree: "SAFe 5 Agilist Certification",
    school: "Scaled Agile, Inc.",
    when: "2021",
  },
];

function About() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="container-narrow pt-14 pb-6 md:pt-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div className="relative mx-auto w-full max-w-xs md:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-sage/25"
              style={{ transform: "rotate(-3deg)" }}
            />
            <img
              src={portrait}
              alt="Portrait of Kristy Wessel"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sage-deep">About</p>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">
              Let me introduce myself.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-foreground/85">
              My background is in web development and people management. I love systems and
              processes that let teams scale gracefully — and I care deeply about the humans on
              both sides of the software.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              Over the last decade I've led UX engineering at Jamf, front end teams at Thomson
              Reuters, technology at Washington County Library, and taught the next generation of
              engineers at Prime Digital Academy. I also build and maintain sites for
              small-business and community clients.
            </p>
          </div>
        </div>
      </section>

      <section className="container-narrow py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">Profile</h2>
            <ul className="mt-6 divide-y divide-border/60 text-sm">
              <li className="flex justify-between py-3">
                <span className="text-muted-foreground">Full name</span>
                <span className="font-semibold">Kristy Wessel</span>
              </li>
              <li className="flex justify-between py-3">
                <span className="text-muted-foreground">Currently</span>
                <span className="font-semibold">Sr. Manager, UX Engineering @ Jamf</span>
              </li>
              <li className="flex justify-between py-3">
                <span className="text-muted-foreground">Based in</span>
                <span className="font-semibold">Lakeville, MN</span>
              </li>
              <li className="flex justify-between py-3">
                <span className="text-muted-foreground">Email</span>
                <a
                  href="mailto:wessel.kristy@gmail.com"
                  className="font-semibold text-terracotta hover:underline"
                >
                  wessel.kristy@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-3xl">Skills</h2>
            <ul className="mt-6 space-y-4">
              {skills.map((s) => (
                <li key={s.label}>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{s.label}</span>
                    <span className="text-muted-foreground">{s.value}%</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-terracotta"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-narrow pb-16">
        <h2 className="font-display text-3xl">Work experience</h2>
        <ol className="mt-8 space-y-6 border-l border-border/70 pl-6">
          {experience.map((e) => (
            <li key={`${e.org}-${e.when}`} className="relative">
              <span
                aria-hidden
                className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-terracotta ring-4 ring-background"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl">
                  {e.role} <span className="text-muted-foreground">· {e.org}</span>
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-sage-deep">
                  {e.when}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{e.blurb}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-narrow pb-20">
        <h2 className="font-display text-3xl">Education & certifications</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {education.map((ed) => (
            <div key={ed.degree} className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sage-deep">
                {ed.when}
              </p>
              <h3 className="mt-1 font-display text-lg leading-snug">{ed.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{ed.school}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
