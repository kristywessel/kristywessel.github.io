import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getProject } from "./projects-gzi2ml8X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-C1az0Xsk.js
var $$splitComponentImporter = () => import("./projects._slug-BqGtWlDN.mjs");
var $$splitErrorComponentImporter = () => import("./projects._slug-DieeT2wX.mjs");
var $$splitNotFoundComponentImporter = () => import("./projects._slug-DyXbe7Me.mjs");
var Route = createFileRoute("/projects/$slug")({
	loader: ({ params }) => {
		const project = getProject(params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Project not found — Kristy Wessel" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { project } = loaderData;
		const title = `${project.title} — Kristy Wessel`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: project.summary
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: project.summary
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
