import "./EditOnGitHub.scss";

import React from "react";

import { toc, TocNode } from "../../util/toc";

const getTocNode = (path: string) => {
	const parts = path.replace(/^\//, "").split("/");
	let cur: TocNode | undefined = toc;
	for (const part of parts) cur = cur?.children?.[part];
	return cur;
};

export const EditOnGitHub = ({
	pathname,
}: {
	pathname: string;
}): JSX.Element => {
	const file = pathname.slice(4).replace(/\.html?$/, "");
	const node = getTocNode(file);

	return (
		<div className="edit-on-github">
			{node ? (
				node.title ? (
					<a
						href={`https://github.com/voces/wcd/edit/main${file}.md`}
					>
						Edit this page on GitHub
					</a>
				) : (
					<a
						href={`https://github.com/voces/wcd/new/main?filename=${file.slice(
							1,
						)}/index.md`}
					>
						Create this index page on GitHub
					</a>
				)
			) : (
				<a
					href={`https://github.com/voces/wcd/new/main?filename=${file}.md`}
				>
					Create this page on GitHub
				</a>
			)}
		</div>
	);
};
