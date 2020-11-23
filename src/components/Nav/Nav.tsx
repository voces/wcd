import "./Nav.scss";

import React, { useCallback, useReducer } from "react";

import { Link } from "../../contexts/LinkContext";
import { partialReload } from "../../util/partialReload";
import { toc, TocNode } from "../../util/toc";

const Node = ({
	node,
	path,
	route,
	onNavChange,
	depth = 0,
}: {
	node: TocNode;
	path: string;
	route: string;
	onNavChange: (href: string) => void;
	depth?: number;
}) => (
	<ul className={depth === 0 ? "nav" : ""}>
		{Object.entries(node.children!)
			.sort(
				([, a], [, b]) => (b.nav_priority ?? 0) - (a.nav_priority ?? 0),
			)
			.map(([key, value]) => {
				if (key === "index" && path !== "") return;
				const fullpath = `${path}/${key}`;
				return (
					<li key={key}>
						<Link tocNode={value}>{value.title ?? key}</Link>
						{value.children && route.startsWith(fullpath) && (
							<Node
								node={value}
								path={fullpath}
								route={route}
								onNavChange={onNavChange}
								depth={depth + 1}
							/>
						)}
					</li>
				);
			})}
	</ul>
);
export const Nav = ({
	setMarkdownContents,
}: {
	setMarkdownContents: (markdown: string) => void;
}): JSX.Element => {
	const [, forceUpdate] = useReducer((x) => x + 1, 0);
	const route = location.pathname.slice(4).replace(/(index)?\.\w+$/, "");

	const onNavChange = useCallback(async (href: string) => {
		await partialReload(href, setMarkdownContents);
		forceUpdate();
	}, []);

	return <Node node={toc} path="" route={route} onNavChange={onNavChange} />;
};
