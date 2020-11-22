import "./SideBar.scss";

import React from "react";

import { Nav } from "../Nav/Nav";

export const SideBar = ({
	setMarkdownContents,
}: {
	setMarkdownContents: (marrkdown: string) => void;
}): JSX.Element => (
	<div className="side-bar">
		<header>
			<img src="/wcd/assets/img/logo.png" height={28} />
		</header>
		<Nav setMarkdownContents={setMarkdownContents} />
	</div>
);
