// Modified from https://github.com/Symbitic/remark-plugins/blob/master/packages/remark-deflist/src/index.js

import toString from "mdast-util-to-string";
import React, { ReactPortal } from "react";
import { Node, Parent } from "unist";
import visit from "unist-util-visit";

const isParent = (node: Node): node is Parent =>
	"children" in node && Array.isArray(node.children);

/**
 * Returns the previous non-removed node
 */
const previousNode = (parent: Parent, index: number) => {
	while (--index > 0)
		if (parent.children[index].type !== "removed")
			return parent.children[index];
};

/**
 * Adds support for definition lists, defined in the format.
 * @example
 * // Turns
 * `foo
 * : bar`
 * // Into
 * <dl><dt>foo</dt><dd>bar</dd></dl>
 */
export const deflistPlugin = () => (tree: Node): void => {
	visit(tree, ["paragraph"], (node, i, parent) => {
		const text = toString(node);
		const lines = text.split("\n");

		if (
			// A dt and dd pair
			lines.length !== 2 ||
			// Mostly to make TS happy
			!isParent(node) ||
			// dt
			lines[0].startsWith(":") ||
			// dd
			!lines[1].startsWith(":") ||
			// Mostly to make TS happy
			!parent
		)
			return;

		// Find the actual node that starts the dd
		const dlStartIndex = node.children.findIndex((node) =>
			toString(node).startsWith("\n"),
		);

		// Remove the : prefix on the dd
		const ddChildren = node.children.slice(dlStartIndex);
		const firstChild = ddChildren[0];
		if (firstChild && typeof firstChild.value === "string")
			firstChild.value = firstChild.value.replace(/\n:\s*/, "");

		// Create the dt/dd nodees
		const children = [
			{ type: "dt", children: node.children.slice(0, dlStartIndex) },
			{ type: "dd", children: ddChildren },
		];

		// If this isn't the first dt/dd pair, append to the existing dl
		const previous = previousNode(parent, i);
		if (previous && previous.type === "dl" && isParent(previous)) {
			previous.children.push(...children);
			parent.children.splice(i, 1, { type: "removed" });

			// Otherwise create a new dl with the dt/dd pair
		} else parent.children.splice(i, 1, { type: "dl", children });
	});
};

const DL = ({ children }: ReactPortal): JSX.Element => <dl>{children}</dl>;

const DT = ({ children }: ReactPortal): JSX.Element => <dt>{children}</dt>;

const DD = ({ children }: ReactPortal): JSX.Element => <dd>{children}</dd>;

export const deflistRenderers = {
	dl: DL,
	dt: DT,
	dd: DD,
	removed: (): JSX.Element | null => null,
};
