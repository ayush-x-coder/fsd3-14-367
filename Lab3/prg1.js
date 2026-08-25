import http from "http";
const server=http.createServer((req,res)=>{
    console.log('wlecome to node js');
    console.log(req.url);
    console.log("request method:");
    console.log(req.method);
    console.log("reuest header");
    console.log(req.header)
    //console.log("socket info")
    //console.log(req.socket);
    res.end("hello");
});
const PORT=4444;
server.listen(PORT,()=>console.log("server is running..."));
