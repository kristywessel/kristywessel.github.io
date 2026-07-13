import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-cy7gO2H1.mjs";
import { n as projects } from "./projects-gzi2ml8X.mjs";
import { t as ProjectCard } from "./ProjectCard-C3FMH212.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects.index-C8TlrkZQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"All",
	"Web Development",
	"Design Systems",
	"Leadership",
	"Teaching"
];
function ProjectsIndex() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const filtered = (0, import_react.useMemo)(() => cat === "All" ? projects : projects.filter((p) => p.category === cat), [cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-narrow pt-14 pb-8 md:pt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-wider text-sage-deep",
						children: "Portfolio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl md:text-5xl",
						children: "All projects"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-lg text-foreground/80",
						children: "A mix of enterprise SaaS work, small-business web builds, teaching engagements, and public-sector programs. Filter by the kind of work you're curious about."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-2",
						children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setCat(c),
							className: `rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${cat === c ? "border-terracotta bg-terracotta text-primary-foreground" : "border-border bg-background text-muted-foreground hover:border-terracotta/40 hover:text-foreground"}`,
							children: c
						}, c))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-narrow pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project: p }, p.slug))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ProjectsIndex as component };
