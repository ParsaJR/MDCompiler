import { log } from "console";
import { promises, writeFileSync } from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import path from "path"

interface Markdown {
	filename: string,
	frontmatter: Record<string, any>,
	body: string
}
export async function Parse(mdPaths: string[]): Promise<Markdown[]> {
	const result: Markdown[] = [];
	for (const mdpath of mdPaths) {
		try {
			const fileContent = await promises.readFile(mdpath, "utf-8");
			const parsedMatter = matter(fileContent);

			const parsedMd = await marked(parsedMatter.content)
			result.push({
				filename: path.basename(mdpath),
				frontmatter: parsedMatter.data,
				body: parsedMd
			})
		}
		catch (error) {
			console.error(`Error parsing the file "${path.basename(mdpath)}"`)
		}
	}
	return result;
}

type WriteResult = {
	ok: true
} | {ok: false, error: Error}

export function Write(file: Markdown[], outputPath: string): boolean {
	try {
		writeFileSync(outputPath, JSON.stringify(file,null,2))
		return true
	}
	catch (error) {
		console.error("Error writing to file: ", error)
		return false
	}
}
