# MDCompiler
A CLI and Node module that scans a directory of Markdown files, extracts frontmatter and content, and generates a single JSON file for use in frontend apps.

What the Module Does:
- Scans a directory of Markdown files.
- Parses them into structured JSON.
- Outputs a single compiled file (with optional metadata, timestamps, etc).

# Usage
```
npx @parsajr/mdcompiler@latest <Input> <Output>
```

# Exmaple 
```bash
$ tree
├── testfolder
│   ├── half.txt
│   ├── one.md
│   └── two.md

$ npx @parsajr/mdcompiler@latest ./testfolder ./output.json

```

output:
```js
[
  {
    "filename": "one.md",
    "frontmatter": {
      "question": "Hey Buddy",
      "number": 12312,
      "draft": true
    },
    "body": "<h1>Marked - Markdown Parser</h1>\n<p><a href=\"https://github.com/markedjs/marked/\">Marked</a> lets you convert <a href=\"http://daringfireball.net/projects/markdown/\">Markdown</a> into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.</p>\n<h2>How To Use The Demo</h2>\n<ol>\n<li>Type in stuff on the left.</li>\n<li>See the live updates on the right.</li>\n</ol>\n<p>That&#39;s it.  Pretty simple.  There&#39;s also a drop-down option above to switch between various views:</p>\n<ul>\n<li><strong>Preview:</strong>  A live display of the generated HTML as it would render in a browser.</li>\n<li><strong>HTML Source:</strong>  The generated HTML before your browser makes it pretty.</li>\n<li><strong>Lexer Data:</strong>  What <a href=\"https://github.com/markedjs/marked/\">marked</a> uses internally, in case you like gory stuff like this.</li>\n<li><strong>Quick Reference:</strong>  A brief run-down of how to format things using markdown.</li>\n</ul>\n<h2>Why Markdown?</h2>\n<p>It&#39;s easy.  It&#39;s not overly bloated, unlike HTML.  Also, as the creator of <a href=\"http://daringfireball.net/projects/markdown/\">markdown</a> says,</p>\n<blockquote>\n<p>The overriding design goal for Markdown&#39;s\nformatting syntax is to make it as readable\nas possible. The idea is that a\nMarkdown-formatted document should be\npublishable as-is, as plain text, without\nlooking like it&#39;s been marked up with tags\nor formatting instructions.</p>\n</blockquote>\n<p>Ready to start writing?  Either start changing stuff on the left or\n<a href=\"/demo/?text=\">clear everything</a> with a simple click.</p>\n"
  },
  {
    "filename": "two.md",
    "frontmatter": {},
    "body": "<h1>Hello!</h1>\n"
  }
]
```
