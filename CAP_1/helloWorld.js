var http = require('http');
var fs = require('fs');

http.createServer((req, res)=>{
    var name = require('url').parse(req.url, true).query.name;

    if(name === undefined) name ='world';

    if(name == 'burningbird'){
        var file = 'phoenix5a.png';
        fs.stat(file, (err, estat)=>{
            if(err){
                console.error(err);
                res.writeHead(200, {'Content-Type':'text/plain'});
                res.end("Sorry, Burningbird isn't around now \n");
            } else {
                var img = fs.readFileSync(file);
                res.contentType = 'image/png';
                res.contentLength = stat.size;
                res.end(img, 'binary');
            }
        });
    } else {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello World\n');
    }
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');