import "./EditOnGitHub.scss";

import React from "react";

export const EditOnGitHub = (): JSX.Element => {
	const file = location.pathname.replace(/\.html?$/, "");

	return (
		<a
			className="edit-on-github"
			href={`https://github.com/voces/wcd/edit/main${file}.md`}
		>
			Edit this page on GitHub
		</a>
	);
};
