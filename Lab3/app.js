import http from  "http";
const server=http.createServer();
server.on('request',(req,res)=>{ //call back function
    res.write("<h1 style=color:red>Welcome to Server Side Programming<h1>");
    res.write("<h2> Nodemon is tracking the file </h2>");
    res.end();
});

server.listen(5000,()=>{
    console.log("srver is running")
});