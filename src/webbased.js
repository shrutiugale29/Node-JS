var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'Text/html'});
    res.end('Hello world!');
}).listen(8080);
console.log('server running at https://127.0.0.1,8080/');