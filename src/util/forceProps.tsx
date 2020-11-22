import toString from "mdast-util-to-string";
import { Node } from "unist";
import visit from "unist-util-visit";

export const forceProps = () => (tree: Node): void => {
	visit(tree, ["text"], (node, i, parent) => {
		const str = toString(node);
		const match = str.match(/^{!(\w+=\w+)(,(\w+=\w+))*}/);
		const prev = parent?.children[i - 1];
		if (!match || !prev) return;

		match[0]
			.slice(2, -1)
			.split(",")
			.map((v) => v.split("="))
			.forEach(([key, value]) => (prev[key] = value));

		if (typeof node.value === "string")
			node.value = node.value.slice(match[0].length);
	});
};
