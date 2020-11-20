import fs from "fs-extra";
import yaml from "js-yaml";
import lunr from "lunr";
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

const processDoc = ({ path, contents }: ReadFile) => {
	const frontmatter = contents.split("---\n")[1];
	const frontyaml = yaml.safeLoad(frontmatter);
	if (typeof frontyaml !== "object") throw new Error();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const castedFrontYaml: Record<string, unknown> = frontyaml as any;

	const doc: Record<string, string> = {
		path: path.slice(0, -3),
		contents,
	};

	if (typeof castedFrontYaml.title === "string")
		doc.title = castedFrontYaml.title;

	if (
		Array.isArray(castedFrontYaml.types) &&
		castedFrontYaml.types.every((v) => typeof v === "string")
	)
		doc.types = castedFrontYaml.types.join(" ");

	return doc;
};

readDirectory(".").then((files) => {
	const idx = lunr(function () {
		this.ref("path");
		this.field("contents");
		this.field("types", { boost: 2 });
		this.field("title", { boost: 5 });

		files
			// .slice(0, 1)
			.map(processDoc)
			.forEach((file) => this.add(file));
	});

	fs.writeFile("lunr.json", JSON.stringify(idx));
});
