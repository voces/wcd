import "./theme.scss";

import React, { useState } from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Naked imports break rollup
import ReactMarkdown from "react-markdown/react-markdown.min.js";
import gfm from "remark-gfm";

import { EditOnGitHub } from "./components/EditOnGithub/EditOnGitHub";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SideBar } from "./components/SideBar/SideBar";
import {
	InlineSyntaxHighlighter,
	SyntaxHighlighter,
} from "./components/SyntaxHighlighter";
import { deflistPlugin, deflistRenderers } from "./util/deflist";
import { forceProps } from "./util/forceProps";

const markdownBody = document.querySelector("div.markdown")!;
const initialMarkdownContents = markdownBody.innerHTML.trim();
markdownBody.remove();

const Content = ({ children }: { children: React.ReactNode }): JSX.Element => (
	<div>{children}</div>
);

const App = () => {
	const [markdownContents, setMarkdownContents] = useState(
		initialMarkdownContents,
	);
	return (
		<div className="flex">
			<link rel="stylesheet" href="/wcd/assets/css/theme.css" />
			<SideBar setMarkdownContents={setMarkdownContents} />
			<div className="main">
				<SearchBar />
				<Content>
					<div className="markdown">
						<ReactMarkdown
							plugins={[forceProps, deflistPlugin, gfm]}
							allowDangerousHtml
							renderers={{
								...deflistRenderers,
								code: SyntaxHighlighter,
								inlineCode: InlineSyntaxHighlighter,
							}}
						>
							{markdownContents}
						</ReactMarkdown>
					</div>
				</Content>
				<EditOnGitHub />
			</div>
		</div>
	);
};

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<App />, container);
