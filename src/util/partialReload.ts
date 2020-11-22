const el = document.createElement("div");

export const partialReload = async (
	href: string,
	setMarkdownContents: (markdown: string) => void,
): Promise<void> => {
	const rawHtml = await fetch(href).then((r) => r.text());

	el.innerHTML = rawHtml;
	const markdown = el.querySelector(".markdown")!.innerHTML.trim();

	// Update url first, since other componeents do logic off it
	const title = markdown.match(/^# .+/);
	window.history.pushState({}, title?.[0].slice(2) ?? "", href);

	setMarkdownContents(markdown);
};
