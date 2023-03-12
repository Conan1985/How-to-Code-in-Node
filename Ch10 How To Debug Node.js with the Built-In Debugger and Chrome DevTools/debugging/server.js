const http = require("http");

const host = 'localhost';
const port = 8000;

const greetings = ["Hello world", "Hola mundo", "Bonjour le monde", "Hallo Welt", "Salve mundi"];

const getGreeting = function() {
    let greeting = greetings[Math.floor(Math.random() * greetings.length)];
    return greeting;
}

const requestListner = function (req, res) {
    let message = getGreeting();
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "${message}"}`);
}

const server = http.createServer(requestListner);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})