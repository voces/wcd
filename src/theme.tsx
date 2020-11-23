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
import { getTocBreadcrumbs, getTocNode, TocContext } from "./util/toc";

const markdownBody = document.querySelector("script.markdown")!;
const initialMarkdownContents = markdownBody.innerHTML.trim();
markdownBody.remove();

const Content = ({ children }: { children: React.ReactNode }): JSX.Element => (
	<div>{children}</div>
);

const App = () => {
	const [markdownContents, setMarkdownContents] = useState(
		initialMarkdownContents,
	);
	useEffect(() => {
		const listener = () => {
			const node = getTocNode(window.location.pathname);
			if (node) partialReload(node, setMarkdownContents);
		};
		window.addEventListener("popstate", listener);
		return () => window.removeEventListener("popstate", listener);
	}, []);
	const pathname = location.pathname;
	const breadcrumbs = getTocBreadcrumbs(pathname);
	return (
		<div className="app">
			<link rel="stylesheet" href="/wcd/assets/css/theme.css" />
			<MarkdownContentContext.Provider value={setMarkdownContents}>
				<TocContext.Provider value={getTocNode(pathname)}>
					<SideBar setMarkdownContents={setMarkdownContents} />
					<div className="main">
						<SearchBar setMarkdownContents={setMarkdownContents} />
						{breadcrumbs && (
							<Breadcrumbs breadcrumbs={breadcrumbs} />
						)}
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
						<ChildPages />
						<EditOnGitHub pathname={pathname} />
					</div>
				</TocContext.Provider>
			</MarkdownContentContext.Provider>
		</div>
	);
};

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<App />, container);
