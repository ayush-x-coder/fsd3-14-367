import http from 'http';
import { createReadStream } from 'fs';

const server = http.createServer((req, res) => {

    if (req.url === '/') {

        const stream = createReadStream('./pages/airtag.html', {
            encoding: 'utf-8'
        });

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        stream.pipe(res);
        return;
    }
else if(req.url==='/mobile'){
    res.writeHead(200,{"content-type":"text/json"});
    const stream = createReadStream('./data/products.json', {
       encoding: 'utf-8'
    });    
    stream.pipe(res);
    return;
}
else if(req.url==='/manual'){
    res.writeHead(200,{"content-type":"text/plain"});
    const stream = createReadStream('./data/chatgpt.txt', {
       encoding: 'utf-8'
    });  
    stream.pipe(res);  
}
else{
    res.statusCode=404;
    res.removeHeader("Not found");}
});
server.listen(3000, () => {
    console.log("prg9 is running at 3000....");
});
