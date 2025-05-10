#!/usr/bin/env node

import { defineCommand, runMain } from "citty";
import { mdcompiler } from "./mdcompiler.js";
import config from "../package.json" with {type: 'json'}


const main = defineCommand({
	meta: {
		name: config.name,
		description: config.description,
		version: config.version
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
