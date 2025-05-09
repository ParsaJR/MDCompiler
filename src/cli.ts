#!/usr/bin/env node

import { defineCommand, runMain } from "citty";
import { mdcompiler } from "./mdcompiler.js";

const main = defineCommand({
	meta: {
		name: "MDCompiler",
		version: "1.0.0",
		description: "Transfrom your markdowns into one single json."
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
		mdcompiler(args.input, args.output)
	}
})

runMain(main)
