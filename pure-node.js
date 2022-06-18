const http = require('http');

const server = http.createServer((request, response) => {
        let body = [];
        console.log(request.method, request.url);
        //codigo asincrono
        request.on('data', (chunk) => {
            body.push(chunk);
        });
        request.on('end', () => {
            body = Buffer.concat(body).toString();
            console.log(body);
            let userName = 'Unknown user';
            if (body) {
                userName = body.split('=')[1];
            }
            response.setHeader('Content-type', 'text/html');
            response.write(`<h1>Hi ${userName}</h1><form method="POST" action="/"> 
                <input type="text" name="username" placeholder="username">
                <button type="submit">Send</button>
                </form>`);
            response.end();
        })


    }
);

server.listen(3000);