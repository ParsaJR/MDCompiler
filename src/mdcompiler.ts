import { Parse, Write } from "./parser.js"
import { scanTheFolder } from "./scanner.js"

/**
 * @param input the input folder of markdowns.
 * @param output the path where the output will created.
 */
export async function mdcompiler(input: string, output: string): Promise<void> {

	var markdowns = await scanTheFolder(input)
	if (markdowns.length === 0) {
		console.error("No markdown has been detected. Exiting.")
		process.exit()
	}
	const parsed_markdowns = await Parse(markdowns)
	Write(parsed_markdowns, output)
}
