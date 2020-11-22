import express from "express";
import fs from "fs-extra";
import mime from "mime";
import path from "path";

const app = express();

const isMarkdownPath = (path: string) => !!path.match(/\.md$/);

const tryFile = async (path: string) => ({
	path,
	contents: isMarkdownPath(path)
		? await fs.readFile(path, "utf-8")
		: await fs.readFile(path),
});

const resolveFile = async (
	rawPath: string,
): Promise<{ path: string; contents: string | Buffer }> => {
	try {
		return await tryFile(rawPath);
	} catch (err) {
		/* do nothing */
	}

	try {
		const attemptPath = `${rawPath}.md`;
		return await tryFile(attemptPath);
	} catch (err) {
		/* do nothing */
	}

	try {
		const attemptPath = path.join(rawPath, "index.md");
		return await tryFile(attemptPath);
	} catch (err) {
		/* do nothing */
	}

	// try {
	// 	if ((await fs.stat(rawPath)).isDirectory()) return fs.readFile;
	// } catch (err) {
	// 	/* do nothing */
	// }

	throw new Error("not found");
};

const page404 = fs.readFileSync("404.md", "utf-8");
const markdownWrapper = fs
	.readFileSync("_layouts/default.html", "utf-8")
	.replace("{%- seo -%}", "");

app.use(async (req, res) => {
	try {
		const { path: filePath, contents } = await resolveFile(
			path.posix
				.normalize(req.path)
				.replace(/^\/wcd/, "")
				.replace(/^\//, "")
				.replace(/\/$/, ""),
		);
		if (!isMarkdownPath(filePath)) {
			res.header("Content-Type", mime.getType(filePath) ?? "text/plain");
			return res.send(contents);
		}
		if (typeof contents !== "string")
			throw new Error("Unexpected buffer for markdown");
		res.header("Content-Type", "text/html");
		res.send(
			markdownWrapper.replace(
				"{{ page.content }}",
				contents.split("\n---\n").pop()!,
			),
		);
	} catch (err) {
		console.error(err);
		res.status(404);
		res.header("Content-Type", "text/html");
		res.send(
			markdownWrapper.replace(
				"{{ page.content }}",
				page404.split("\n---\n").pop()!,
			),
		);
	}
});

app.listen(3000);
