import { defineCommand, runMain } from "citty";
import { scanTheFolder } from "./scanner";
import { Parse, Write } from "./parser";

const main = defineCommand({
	meta: {
		name: "MDScan",
		version: "1.0.0",
		description: "Transfrom your markdowns to one single json."
	},
	args: {
		input: {
			type: 'positional',
			description: 'Input Folder',
			required: true,
		},
		output: {
			type: 'positional',
			description: 'Output location',
			required: false
		},
	},
	async run({ args }) {
		var markdowns = await scanTheFolder(args.input)
		if (markdowns.length === 0) {
			process.exit()
		}
		const parsed_markdowns = await Parse(markdowns)
		Write(parsed_markdowns,args.output)	
	}
})

runMain(main)
