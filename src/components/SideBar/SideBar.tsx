import "./SideBar.scss";

import React from "react";

import { Nav } from "../Nav/Nav";

export const SideBar = (): JSX.Element => (
	<div className="side-bar">
		<header>
			<img src="/wcd/assets/img/logo.png" height={28} />
		</header>
		<Nav />
	</div>
);
