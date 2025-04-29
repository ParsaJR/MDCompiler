import { readdir } from 'fs/promises';
import path from 'path';


export async function scanTheFolder(folderpath: string): Promise<string[]> {
	const mdFiles: string[] = [];
	try {
		// relative path
		folderpath = path.resolve(folderpath)
		console.log(`scanning ${folderpath}`)
		var entries = await readdir(folderpath, { withFileTypes: true })
		for (const entry of entries) {
			const fullpath = path.join(folderpath, entry.name)
			if(entry.isFile() && fullpath.endsWith('.md')){
				mdFiles.push(fullpath)
			}
		}
	}
	catch (error) {
		if (error) {
			console.error('error reading a directory: ', error)
			return []
		}
	}
	console.log(mdFiles)
	return mdFiles
}
