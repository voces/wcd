import "./theme.scss";

import React from "react";
import ReactDOM from "react-dom";

import { EditOnGitHub } from "./components/EditOnGithub/EditOnGitHub";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SideBar } from "./components/SideBar/SideBar";

const markdownBody = document.querySelector("div.markdown-body")!;

const Content = ({ children }: { children: React.ReactNode }): JSX.Element => (
	<div>{children}</div>
);

const App = () => (
	<div className="flex">
		<link rel="stylesheet" href="/assets/css/theme.css" />
		<SideBar />
		<div className="main">
			<SearchBar />
			<Content>
				<div ref={(ref) => ref && ref.appendChild(markdownBody)} />
			</Content>
			<EditOnGitHub />
		</div>
	</div>
);

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<App />, container);
