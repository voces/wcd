import { TocNode } from "./toc";

const el = document.createElement("div");

export const partialReload = async (
	tocNode: TocNode | string,
	setMarkdownContents: (markdown: string) => void,
): Promise<void> => {
	const href =
		"/wcd/" + (typeof tocNode === "string" ? tocNode : tocNode.path);
	const rawHtml = await fetch(href).then((r) => r.text());

	el.innerHTML = rawHtml;
	const markdown = el.querySelector(".markdown")!.innerHTML.trim();

	// Update url first, since other componeents do logic off it
	const title = markdown.match(/^# .+/);
	window.history.pushState({}, title?.[0].slice(2) ?? "", href);

	// We append the commented out path to force re-renders on repeat 404s
	setMarkdownContents(
		markdown +
			`
<!---
${href}
-->`,
	);

	window.scrollTo(0, 0);
};
