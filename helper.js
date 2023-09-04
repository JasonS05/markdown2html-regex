const http = require("http");
const fs = require("fs").promises;

http.createServer(async function(req, res) {
	let markdown = await fs.readFile("markdown.md");
	let html = `\n${markdown}\n`;

	let helper = await fs.readFile("markdown.js");
	html = eval(`${helper}`)(html);

	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(
`<!DOCTYPE>
<html>
	<head></head>
	<body>
${html}
	</body>
</html>`
	);
}).listen(80);

