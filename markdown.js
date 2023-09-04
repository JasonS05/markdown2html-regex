markdown => markdown
	.replace(/\n#(?!#) *(.*)/g, "<h1>$1</h1>")
	.replace(/\n##(?!#) *(.*)/g, "<h2>$1</h2>")
	.replace(/\n###(?!#) *(.*)/g, "<h3>$1</h3>")
	.replace(/\n####(?!#) *(.*)/g, "<h4>$1</h4>")
	.replace(/\n#####(?!#) *(.*)/g, "<h5>$1</h5>")
	.replace(/\n######(?!#) *(.*)/g, "<h6>$1</h6>")
	.replace(/```(\S*)((?:[^`]|`(?!``))*)```/g, "<pre>$2</pre>")
	.replace(/(<\/h[1-6]>)\n/g, "$1")
	.replace(/\n/g, "<br>")
	.replace(/\[([^\]]+)\]\(([^\)]*)\)/g, "<a href=\"$2\">$1</a>")
	.replace(/(?<!``)`([^`]+)`(?!``)/g, "<pre style=\"display: inline;\">$1</pre>"); //` closing backtick for syntax highlighting

