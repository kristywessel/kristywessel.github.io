import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as ArrowLeft, s as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-cy7gO2H1.mjs";
import { n as projects } from "./projects-gzi2ml8X.mjs";
import { t as Route } from "./projects._slug-C1az0Xsk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-BqGtWlDN.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetail() {
	const { project } = Route.useLoaderData();
	const next = projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "container-narrow pt-10 pb-16 md:pt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects",
						className: "inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-terracotta",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), " All projects"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "mt-8 grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-wider text-sage-deep",
								children: project.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 font-display text-4xl leading-tight md:text-6xl",
								children: project.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg text-foreground/80",
								children: project.summary
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-5 text-sm md:grid-cols-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: "Role"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 font-semibold",
									children: project.role
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: "Timeframe"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 font-semibold",
									children: project.year
								})] }),
								project.link && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-2 md:col-span-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs uppercase tracking-wide text-muted-foreground",
										children: "Live site"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: project.link.href,
											target: "_blank",
											rel: "noreferrer noopener",
											className: "inline-flex items-center gap-1 font-semibold text-terracotta hover:underline",
											children: [
												project.link.label,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })
											]
										})
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 w-full rounded-3xl md:h-72 bg-gradient-to-br from-terracotta-soft/65 to-sage/55 overflow-hidden flex items-center justify-center",
						style: { minHeight: project.modalImage || project.image ? "auto" : "224px" },
						children: project.modalImage || project.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.modalImage || project.image,
							alt: project.title,
							className: "w-full h-full object-scale-down"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "w-full h-56 md:h-72",
							style: { background: "linear-gradient(135deg, color-mix(in oklab, var(--terracotta-soft) 65%, transparent), color-mix(in oklab, var(--sage) 55%, transparent))" }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-12 md:grid-cols-[1.6fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "prose-lite",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl",
									children: "About this project"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 space-y-4 text-base leading-relaxed text-foreground/85",
									children: project.description.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, i))
								}),
								project.extraLinks && project.extraLinks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-10 font-display text-xl",
									children: "Further reading"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-2",
									children: project.extraLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: l.href,
										target: "_blank",
										rel: "noreferrer noopener",
										className: "inline-flex items-center gap-1 text-sm font-semibold text-terracotta hover:underline",
										children: [
											l.label,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })
										]
									}) }, l.href))
								})] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "rounded-2xl border border-border bg-card p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg",
								children: "Tools & skills"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 flex flex-wrap gap-2",
								children: project.tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground/80",
									children: t
								}, t))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 flex flex-col gap-3 rounded-2xl border border-border bg-cream/60 p-6 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-sage-deep",
							children: "Next project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-xl",
							children: next.title
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects/$slug",
							params: { slug: next.slug },
							className: "inline-flex items-center gap-1.5 rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform",
							children: ["View next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ProjectDetail as component };
