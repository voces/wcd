import { createContext } from "react";

import untypedToc from "../../toc.json";

export interface TocNode {
	children?: Record<string, TocNode>;
	title: string;
	path: string;
	nav_priority?: number;
	missing?: boolean;
	file: string;
	parent?: TocNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toc = (untypedToc as any) as TocNode;

/**
 * Perform a preorder traversal over the TocNode.
 */
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

// We only need one visit right now
visit(toc, (n, k, chain) => {
	// Set missing titles
	if (!n.title) {
		if (!n.children?.index) n.missing = true;
		n.title = n.children?.index?.title ?? k;
	}

	// Set paths
	const parent = chain[chain.length - 1];
	if (chain.length === 0) n.path = "";
	else
		n.path = [parent?.path, k === "index" ? undefined : k]
			.filter((v) => v)
			.join("/");

	// Set file
	n.file = n.children?.index ? n.path + "/index" : n.path;

	// Set parent
	n.parent = parent;
});

export const TocContext = createContext<TocNode | undefined>(undefined);

/**
 * Transforms paths so they're relative to the repo and don't end with /
 * @example normalizePath("/wcd/index/"); // returns "index"
 */
export const normalizePath = (path?: string): string =>
	(path ?? window.location.pathname)
		.replace(/^\/?wcd\/?/, "")
		.replace(/^\//, "");

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
