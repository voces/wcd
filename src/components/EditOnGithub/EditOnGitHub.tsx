import "./EditOnGitHub.scss";

import React, { useContext } from "react";

import { normalizePath, TocContext } from "../../util/toc";

const baseUrl = "https://github.com/voces/wcd";

export const EditOnGitHub = (): JSX.Element => {
	const node = useContext(TocContext);
	const file = node?.file || normalizePath() || "index";

	let child: JSX.Element;

	if (!node)
		child = (
			<a href={`${baseUrl}/new/main?filename=${file}.md`}>
				Create this page on GitHub
			</a>
		);
	else if (node.missing)
		child = (
			<a href={`${baseUrl}/new/main?filename=${file}/index.md`}>
				Create this index page on GitHub
			</a>
		);
	else
		child = (
			<a href={`${baseUrl}/edit/main/${file}.md`}>
				Edit this page on GitHub
			</a>
		);

	return <div className="edit-on-github">{child}</div>;
};
