import fs from "fs-extra";
import yaml from "js-yaml";
import path from "path";

const ignorePath = (path: string) =>
	path.includes("node_modules") ||
	path.includes(".git") ||
	path.includes("data");

type ReadFile = {
	path: string;
	contents: string;
};

type ReadDirectory = ReadFile[];

const readFile = async (filepath: string): Promise<ReadFile | undefined> => {
	if (!filepath.endsWith(".md")) return;
	return {
		path: path.relative(".", filepath),
		contents: await fs.readFile(filepath, "utf-8"),
	};
};

const readPath = async (
	path: string,
): Promise<ReadDirectory | ReadFile | undefined> => {
	const stat = await fs.stat(path);
	if (ignorePath(path)) return;
	if (stat.isDirectory()) return readDirectory(path);
	return readFile(path);
};

const readDirectory = async (directory: string): Promise<ReadDirectory> => {
	const paths = await fs.readdir(directory);
	const result = await Promise.all(
		paths.map((filepath) => readPath(path.resolve(directory, filepath))),
	);
	const flattened = result.flat(Infinity).filter(Boolean) as ReadFile[];
	return flattened;
};

interface Doc {
	path: string;
	title: string;
	nav_priority?: number;
}

const processDoc = ({ path, contents }: ReadFile) => {
	if (path === "404.md") return;

	const frontmatter = contents.split("---\n")[1];
	const frontyaml = yaml.safeLoad(frontmatter);
	if (typeof frontyaml !== "object") throw new Error();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const castedFrontYaml: Record<string, unknown> = frontyaml as any;

	const doc: Doc = {
		path: path.slice(0, -3),
		title: "",
	};

	if (typeof castedFrontYaml.title === "string")
		doc.title = castedFrontYaml.title;
	else {
		const h1Title = contents.split("\n").find((l) => l.startsWith("# "));
		if (h1Title) doc.title = h1Title.slice(2);
		else doc.title = path.split("/").pop()!;
	}

	if (typeof castedFrontYaml.nav_priority === "number")
		doc.nav_priority = castedFrontYaml.nav_priority;

	return doc;
};

interface Node {
	children?: Record<string, Node>;
	title?: string;
	nav_priority?: number;
}

readDirectory(".").then((files) => {
	const index: Node = {};

	files
		.map(processDoc)
		.filter((v): v is Doc => !!v)
		.forEach(({ path, title, nav_priority }) => {
			const parts = path.split("/");
			let cur = index;
			for (const part of parts) {
				if (!cur.children) cur.children = {};
				cur = cur.children[part] ?? (cur.children[part] = {});
			}
			cur.title = title;
			if (nav_priority !== undefined) cur.nav_priority = nav_priority;
		});

	fs.writeFile("toc.json", JSON.stringify(index));
});
