import "./ChildPages.scss";

import React, { useContext } from "react";

import { Link } from "../../contexts/LinkContext";
import { TocContext } from "../../util/toc";

export const ChildPages = (): JSX.Element | null => {
	const tocNode = useContext(TocContext);
	if (!tocNode || !tocNode.children) return null;
	const children = Object.entries(tocNode.children)
		.filter(([key]) => key !== "index")
		.map(([, v]) => v);
	if (children.length === 0) return null;
	return (
		<div
			className={`child-pages ${children.length > 6 ? "long" : "short"}`}
		>
			<h3>Child pages</h3>
			<ul>
				{children.map((tocNode, i) => (
					<li key={`${tocNode.path}-${i}`}>
						<Link tocNode={tocNode} />
					</li>
				))}
			</ul>
		</div>
	);
};
