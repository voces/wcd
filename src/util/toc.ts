import { createContext } from "react";

import untypedToc from "../../toc.json";

export interface TocNode {
	children?: Record<string, TocNode>;
	title?: string;
	path: string;
	nav_priority?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toc = (untypedToc as any) as TocNode;

const visit = (
	node: TocNode,
	fn: (node: TocNode, key: string, chain: TocNode[]) => void,
	key = "root",
	chain: TocNode[] = [],
) => {
	fn(node, key, chain);
	chain.push(node);
	if (node.children)
		for (const key in node.children)
			visit(node.children[key], fn, key, chain);
	chain.pop();
};

visit(toc, (n, k, chain) => {
	// Set missing titles
	if (!n.title) n.title = n.children?.index?.title ?? k;

	// Set paths
	const prev = chain[chain.length - 1];
	if (chain.length === 0) n.path = "";
	else
		n.path = [prev?.path, k === "index" ? undefined : k]
			.filter((v) => v)
			.join("/");
});

export const TocContext = createContext<TocNode | undefined>(undefined);

const normalizePath = (path: string) =>
	path.replace(/^\/?wcd\/?/, "").replace(/^\//, "");

/**
 * Returns the TocNode for the given path. For index pages, will return the
 * parent node.
 */
export const getTocNode = (path: string): TocNode | undefined => {
	path = normalizePath(path);
	let cur: TocNode | undefined = toc;
	if (path.length) {
		const parts = path.split("/");
		for (const part of parts) {
			cur = cur?.children?.[part];
			if (!cur) return;
		}
	}
	return cur;
};

/**
 * Returns a breadcrumb/chain for a given path.
 */
export const getTocBreadcrumbs = (path: string): TocNode[] | void => {
	path = normalizePath(path);
	let cur: TocNode | undefined = toc;
	const chain = [cur];
	if (path.length) {
		const parts = path.split("/");
		for (const part of parts) {
			cur = cur?.children?.[part];
			if (!cur) return;
			chain.push(cur);
		}
	}
	return chain;
};
