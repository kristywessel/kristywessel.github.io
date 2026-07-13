import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProjectCard-C3FMH212.js
var import_jsx_runtime = require_jsx_runtime();
var categoryStyles = {
	"Web Development": "bg-terracotta/10 text-terracotta",
	"Design Systems": "bg-sage/15 text-sage-deep",
	Leadership: "bg-accent text-accent-foreground",
	Teaching: "bg-sage-deep/10 text-sage-deep"
};
function ProjectCard({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/projects/$slug",
		params: { slug: project.slug },
		className: "group flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all hover:-translate-y-0.5 hover:border-terracotta/40 hover:shadow-[0_18px_40px_-24px_color-mix(in_oklab,var(--terracotta)_55%,transparent)]",
		children: [project.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative w-full h-48 overflow-hidden bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.image,
				alt: project.title,
				className: "w-full h-full object-cover transition-transform group-hover:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 flex flex-col flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${categoryStyles[project.category]}`,
						children: project.category
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: project.year
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-5 font-display text-2xl leading-tight text-foreground",
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: project.role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 flex-1 text-sm leading-relaxed text-foreground/80",
					children: project.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-1.5",
					children: [project.tools.slice(0, 4).map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-md border border-border/70 bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground",
						children: tool
					}, tool)), project.tools.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-md px-2 py-0.5 text-[11px] font-medium text-muted-foreground",
						children: ["+", project.tools.length - 4]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta",
					children: ["View project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						size: 16,
						className: "transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProjectCard as t };
