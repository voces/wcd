import { TocNode } from "./toc";

const el = document.createElement("div");

const version = new Date().toISOString();

// We append the commented out path to force re-renders on repeat 404s
const padMarkdownContent = (markdown: string, href: string) =>
	markdown +
	`
<!---
${href}
-->`;

const loadPage = (
	markdown: string,
	href: string,
	setMarkdownContents: (markdown: string) => void,
) => {
	// Update url first, since other componeents do logic off it
	const title = markdown.match(/^# .+/);
	window.history.pushState({}, title?.[0].slice(2) ?? "", href);

	// Store the data for offline usage
	localStorage.setItem(href, JSON.stringify({ version, data: markdown }));

	setMarkdownContents(padMarkdownContent(markdown, href));
	window.scrollTo(0, 0);
};

export const partialReload = async (
	tocNode: TocNode | string,
	setMarkdownContents: (markdown: string) => void,
): Promise<void> => {
	const href =
		"/wcd/" + (typeof tocNode === "string" ? tocNode : tocNode.path);

	const memoizedPage = localStorage.getItem(href);
	if (memoizedPage) {
		const { data, version: memoizedVersion } = JSON.parse(memoizedPage) as {
			data: string;
			version: string;
		};

		loadPage(data, href, setMarkdownContents);

		// Dont' fetch the page if we have't updated
		if (version === memoizedVersion) return;
	}

	const rawHtml = await fetch(href).then((r) => r.text());

	el.innerHTML = rawHtml;
	const markdown = el.querySelector(".markdown")!.innerHTML.trim();

	// Store the data for offline usage
	localStorage.setItem(href, JSON.stringify({ version, data: markdown }));

	loadPage(markdown, href, setMarkdownContents);
};
