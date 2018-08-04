console.log("------------------SERVIDOR BÁSICO COM DESTAQUE PARA ALGUNS EVENTOS-------------------");

var http = require('http');

var server = http.createServer();

server.on('request', (request, response) => {

    console.log('request event');
    
    response.writeHead(200, {'Content-Type': 'text/explain'});
    response.end('Hello world!\n');
});

server.on('connection', ()=> {
    console.log('connection event');
});

server.listen(8124, ()=>{
    console.log('listen event');
}); 

console.log('Server running on port 8124');

