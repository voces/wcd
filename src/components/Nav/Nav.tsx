import "./Nav.scss";

import React, { useCallback } from "react";

import { toc, TocNode } from "../../util/toc";

const el = document.createElement("div");

const Node = ({
	node,
	path,
	route,
	setMarkdownContents,
	depth = 0,
}: {
	node: TocNode;
	path: string;
	route: string;
	setMarkdownContents: (markdown: string) => void;
	depth?: number;
}) => {
	const onClick = useCallback(
		async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
			e.preventDefault();

			const url = e.currentTarget.href;

			const rawHtml = await fetch(url).then((r) => r.text());

			el.innerHTML = rawHtml;
			const markdown = el.querySelector(".markdown")!.innerHTML.trim();
			setMarkdownContents(markdown);
			const title = markdown.match(/^# .+/);

			window.history.pushState({}, title?.[0].slice(2) ?? "", url);
		},
		[],
	);

	return (
		<ul className={depth === 0 ? "nav" : ""}>
			{Object.entries(node.children!)
				.sort(
					([, a], [, b]) =>
						(b.nav_priority ?? 0) - (a.nav_priority ?? 0),
				)
				.map(([key, value]) => {
					if (key === "index" && path !== "") return;
					const fullpath = `${path}/${key}`;
					return (
						<li key={key}>
							<a href={`/wcd${fullpath}`} onClick={onClick}>
								{value.title ?? key}
							</a>
							{value.children && route.startsWith(fullpath) && (
								<Node
									node={value}
									path={fullpath}
									route={route}
									setMarkdownContents={setMarkdownContents}
									depth={depth + 1}
								/>
							)}
						</li>
					);
				})}
		</ul>
	);
};
export const Nav = ({
	setMarkdownContents,
}: {
	setMarkdownContents: (markdown: string) => void;
}): JSX.Element => {
	const route = location.pathname.slice(4).replace(/(index)?\.\w+$/, "");
	return (
		<Node
			node={toc}
			path=""
			route={route}
			setMarkdownContents={setMarkdownContents}
		/>
	);
};
