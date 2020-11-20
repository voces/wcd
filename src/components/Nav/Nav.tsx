import "./Nav.scss";

import React from "react";

import { toc, TocNode } from "../../util/toc";

const Node = ({
	node,
	path,
	route,
	depth = 0,
}: {
	node: TocNode;
	path: string;
	route: string;
	depth?: number;
}) => (
	<ul className={depth === 0 ? "nav" : ""}>
		{Object.entries(node.children!).map(([key, value]) => {
			const fullpath = `${path}/${key}`;
			return (
				<li key={key}>
					<a href={`/wcd${fullpath}`}>{value.title ?? key}</a>
					{value.children && route.startsWith(fullpath) && (
						<Node node={value} path={fullpath} route={route} />
					)}
				</li>
			);
		})}
	</ul>
);

export const Nav = (): JSX.Element => {
	const route = location.pathname.slice(4).replace(/(index)?\.\w+$/, "");
	console.log(route);
	return <Node node={toc} path="" route={route} />;
};
