import "./theme.scss";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Naked imports break rollup
import ReactMarkdown from "react-markdown/react-markdown.min.js";
import gfm from "remark-gfm";

import { Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs";
import { ChildPages } from "./components/ChildPages/ChildPages";
import { EditOnGitHub } from "./components/EditOnGithub/EditOnGitHub";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SideBar } from "./components/SideBar/SideBar";
import {
	InlineSyntaxHighlighter,
	SyntaxHighlighter,
} from "./components/SyntaxHighlighter";
import { MarkdownContentContext } from "./contexts/LinkContext";
import { deflistPlugin, deflistRenderers } from "./util/deflist";
import { forceProps } from "./util/forceProps";
import { partialReload } from "./util/partialReload";
import { getTocNode, TocContext } from "./util/toc";

const markdownBody = document.querySelector("script.markdown")!;
const initialMarkdownContents = markdownBody.innerHTML.trim();
markdownBody.remove();

const MarkdownContainer = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => <div className="markdown">{children}</div>;

const App = () => {
	const [markdownContents, setMarkdownContents] = useState(
		initialMarkdownContents,
	);

	// Partial loading on back
	useEffect(() => {
		const listener = () => {
			const node = getTocNode(window.location.pathname);
			if (node) partialReload(node, setMarkdownContents);
		};
		window.addEventListener("popstate", listener);
		return () => window.removeEventListener("popstate", listener);
	}, []);

	return (
		<div className="app">
			<link rel="stylesheet" href="/wcd/assets/css/theme.css" />
			<MarkdownContentContext.Provider value={setMarkdownContents}>
				<TocContext.Provider value={getTocNode(location.pathname)}>
					<SideBar setMarkdownContents={setMarkdownContents} />
					<div className="main">
						<SearchBar setMarkdownContents={setMarkdownContents} />
						<Breadcrumbs />
						<MarkdownContainer>
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
						</MarkdownContainer>
						<ChildPages />
						<EditOnGitHub />
					</div>
				</TocContext.Provider>
			</MarkdownContentContext.Provider>
		</div>
	);
};

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<App />, container);
