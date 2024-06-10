const http = require('http');
const fs = require('fs');

fs.writeFileSync('index.html', 'This is a Basic information site');
fs.writeFileSync('about.html', 'This is the about page');
fs.writeFileSync('contact-me.html', 'This is the contact page');
fs.writeFileSync('404.html', '404 page not found!!');

http.createServer((req, res) => {
    
    let filePath = ''

    if(req.url === '/') {
        filePath = 'index.html';
    }else if(req.url === '/about'){
        filePath = 'about.html';
    }else if(req.url === '/contact-me'){
        filePath = 'contact-me.html';
    }else{
        filePath = '404.html';
    }

    fs.readFile(filePath, (err, data) => {
        if(err){
            res.writeHead(500, {'Content-Type': 'text/html'})
            res.end('500 - Internal Server Error')
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html'})
            res.end(data)
        }
    })
}).listen(8080);

