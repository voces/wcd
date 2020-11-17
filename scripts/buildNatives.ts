/* eslint-disable no-console */
import tsdoc from "@microsoft/tsdoc";
import fs from "fs-extra";

const configuration = new tsdoc.TSDocConfiguration();
configuration.addTagDefinitions([
	new tsdoc.TSDocTagDefinition({
		tagName: "@note",
		syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
		allowMultiple: true,
	}),
	new tsdoc.TSDocTagDefinition({
		tagName: "@bug",
		syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
		allowMultiple: true,
	}),
	new tsdoc.TSDocTagDefinition({
		tagName: "@event",
		syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
		allowMultiple: true,
	}),
	new tsdoc.TSDocTagDefinition({
		tagName: "@async",
		syntaxKind: tsdoc.TSDocTagSyntaxKind.ModifierTag,
	}),
	new tsdoc.TSDocTagDefinition({
		tagName: "@pure",
		syntaxKind: tsdoc.TSDocTagSyntaxKind.ModifierTag,
	}),
	new tsdoc.TSDocTagDefinition({
		tagName: "@patch",
		syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
	}),
]);

class Formatter {
	public static renderDocNode(docNode: tsdoc.DocNode): string {
		let result = "";
		if (docNode) {
			if (docNode instanceof tsdoc.DocExcerpt)
				result += docNode.content.toString();

			for (const childNode of docNode.getChildNodes())
				result += Formatter.renderDocNode(childNode);
		}
		return result.trim();
	}

	public static renderDocNodes(
		docNodes: ReadonlyArray<tsdoc.DocNode>,
	): string {
		let result = "";
		for (const docNode of docNodes)
			result += Formatter.renderDocNode(docNode);

		return result;
	}
}

const parseNative = (jass: string) => {
	const words = jass.replace(/,/g, "").split(" ");
	if (words[0] === "constant") words.shift();
	const name = words[1];

	const params = [];
	let i = 3;
	if (words[i] === "nothing") i += 1;
	else
		while (words[i] !== "returns" && i < words.length) {
			params.push({ type: words[i], name: words[i + 1] });
			i += 2;
		}

	const returns = words[i + 1];

	return { name, params, returns };
};

const parseDoc = (doc: string) => {
	const tsdocParser = new tsdoc.TSDocParser(configuration);
	const parserContext = tsdocParser.parseString(doc);

	const errors = parserContext.log.messages.filter(
		(m) => m.messageId === "tsdoc-undefined-tag",
	);

	if (errors.length) throw new Error(errors.map((e) => e.text).join("\n"));

	return parserContext.docComment;
};

type Parameter = { type: string; description?: string };

const getParametersSection = (
	params: Record<string, Parameter>,
): string | undefined => {
	const entries = Object.entries(params);
	if (entries.length === 0) return;
	return `## Parameters
<dl>
${Object.entries(params)
	.map(
		([name, spec]) => `  <dt>${name} \`${spec.type}\`</dt>
  <dd>${spec.description ?? ""}</dd>`,
	)
	.join("\n\n")}
</dl>`;
};

const extractTag = (tag: string, customBlocks: readonly tsdoc.DocBlock[]) => {
	const blocks = customBlocks.filter((b) => b.blockTag.tagName === "@" + tag);
	return blocks
		.map((block) => Formatter.renderDocNode(block.content))
		.join("\n");
};

const hasModifier = (tag: string, modifiers: readonly tsdoc.DocBlockTag[]) =>
	modifiers.filter((m) => m.tagName === "@" + tag).length;

const getNotesSection = (
	customBlocks: readonly tsdoc.DocBlock[],
): string | undefined => {
	const notes = extractTag("note", customBlocks);
	if (!notes) return;
	return "## Notes \n" + notes;
};

const getBugsSection = (
	customBlocks: readonly tsdoc.DocBlock[],
): string | undefined => {
	const bugs = extractTag("bug", customBlocks);
	if (!bugs) return;
	return "## Bugs \n" + bugs;
};

const parseBlock = (block: string) => {
	const doc = parseDoc(block);
	const rawNativeLine = block
		.split("\n")
		.find((l) => l.startsWith("native") || l.startsWith("constant native"));

	if (!rawNativeLine) {
		if (block.includes("\ntype")) return;
		console.log(block);
		throw new Error("Missing native or type in above block");
	}

	const nativeLine = rawNativeLine.replace(/\s+/g, " ");
	const native = parseNative(nativeLine);

	const params: Record<string, Parameter> = {};

	native.params.forEach((nativeParam) => {
		params[nativeParam.name] = { type: nativeParam.type };
	});

	doc.params.blocks.forEach((b) => {
		const param: Parameter = params[b.parameterName];
		if (!param) {
			console.log(block);
			throw new Error(`Unknown param! ${b.parameterName}`);
		}
		param.description = Formatter.renderDocNode(b.content);
	});

	const types = new Set(
		[...native.params.map((p) => p.type), native.returns].filter(
			(v) => v !== "nothing",
		),
	);

	const summary = Formatter.renderDocNode(doc.summarySection);

	const parametersSection = getParametersSection(params);

	const notesSection = getNotesSection(doc.customBlocks);
	const bugsSection = getBugsSection(doc.customBlocks);

	const patch = extractTag("patch", doc.customBlocks);
	const async = hasModifier("async", doc.modifierTagSet.nodes);
	const pure = hasModifier("pure", doc.modifierTagSet.nodes);

	return {
		native: native.name,
		content: `---
layout: default
parent: Unit
grand_parent: Natives
types:
${Array.from(types)
	.sort()
	.map((t) => `  - ${t}`)
	.join("\n")}${patch ? `\npatch: ${patch}` : ""}${
			async ? "\nasync: true" : ""
		}${pure ? "\npure: true" : ""}
---

# ${native.name}${summary ? "\n" + summary : ""}

## Declaration

\`\`\`
${nativeLine}
\`\`\`${parametersSection ? "\n\n" + parametersSection : ""}${
			notesSection ? "\n\n" + notesSection : ""
		}${bugsSection ? "\n\n" + bugsSection : ""}`,
	};
};

const parseJass = async (jass: string) =>
	jass
		.split("\n")
		.filter((l) => !l.startsWith("//"))
		.join("\n")
		.split("/**")
		.slice(1)
		.map((block) => {
			block = "/**" + block;
			if (block.indexOf("\nnative") === block.lastIndexOf("\nnative"))
				return [block];
			const blocks = block.split("\nnative");
			return [
				blocks[0] + "\nnative" + blocks[1],
				...blocks.slice(2).map((b) => "\nnative" + b),
			];
		})
		.flat()
		.map((block) => {
			if (
				block.indexOf("\nconstant native") ===
				block.lastIndexOf("\nconstant native")
			)
				return [block];
			const blocks = block.split("\nconstant native");
			return [
				blocks[0] + "\nconstant native" + blocks[1],
				...blocks.slice(2).map((b) => "\nconstant native" + b),
			];
		})
		.flat()
		.map((block) => parseBlock(block));

await fs.emptyDir("gen-natives");
fs.readdir("data/jassdoc").then((files) =>
	files.forEach((file) => {
		const category = file.slice(0, -2);
		if (
			!file.match(/^.*\.j$/) ||
			file === "builtin-types.j" ||
			file === "Blizzard.j"
		) {
			console.log("skipping", file);
			return;
		}
		console.log("processing", file);
		fs.readFile("data/jassdoc/" + file, "utf-8")
			.then(parseJass)
			.then((natives) =>
				natives.forEach(
					(block) =>
						block &&
						fs.outputFile(
							`gen-natives/${category}/${block.native}.md`,
							block.content,
						),
				),
			)
			.catch((err) => {
				console.log(`File: ${file}`);
				console.error(err);
			});
	}),
);
