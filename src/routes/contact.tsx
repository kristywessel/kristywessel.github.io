import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kristy Wessel" },
      {
        name: "description",
        content:
          "Get in touch with Kristy Wessel — front end engineer and UX leader based in Minnesota.",
      },
      { property: "og:title", content: "Contact — Kristy Wessel" },
      {
        property: "og:description",
        content:
          "Get in touch with Kristy Wessel — front end engineer and UX leader based in Minnesota.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="container-narrow pt-14 pb-24 md:pt-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-sage-deep">Contact</p>
        <h1 className="mt-2 font-display text-4xl md:text-6xl">Say hello.</h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/80">
          I'd love to hear about the problem you're working on. The fastest way to reach me is
          email or LinkedIn — I usually reply within a couple of days.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <a
            href="mailto:wessel.kristy@gmail.com"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-terracotta/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
              <Mail size={22} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="font-display text-lg group-hover:text-terracotta">
                wessel.kristy@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/kristywessel"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-terracotta/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/20 text-sage-deep">
              <Linkedin size={22} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</p>
              <p className="font-display text-lg group-hover:text-terracotta">
                linkedin.com/in/kristywessel
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 sm:col-span-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <MapPin size={22} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Based in</p>
              <p className="font-display text-lg">Lakeville, Minnesota</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
