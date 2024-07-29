const http = require("node:http");

const koders = ["Paco", "Clau", "Fer", "Luis", "Jorge", "Nancy", "Rodo"];

const server = http.createServer((request, response) => {
    const {method, url} = request;
    console.log(`${method} ${url}`);

    if (method === "GET" && url === "/koders") {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify(koders));
        response.end();
    }

    if (method === "POST" && url === "/koders") {
        const newKoder = "Nuevo Koder";
        koders.push(newKoder);
            response.writeHead(201, {"Content-Type": "application/json"});
            response.write(JSON.stringify(koders));
            response.end();
        }
    });

    server.listen(8080, () => {
    console.log("Server started on http://localhost:8080");

}); 