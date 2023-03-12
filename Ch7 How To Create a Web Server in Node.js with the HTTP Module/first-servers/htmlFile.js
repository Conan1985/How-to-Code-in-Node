const http = require("http");
const fs = require("fs").promises;
const port = 8000;
const host = 'localhost';

let indexFile;

const requestListener = function(req, res) {
    res.setHeader("Content-Type","text/html");
    res.writeHead(200);
    res.end(indexFile);
}

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.log(`Could not readd index.html file: ${err}`);
        process.exit(1);
    });