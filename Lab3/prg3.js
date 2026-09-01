import http from "http";
const server=http.createServer((req,res)=>{
    if(req.url=='/Home')
        res.end('<h1>Home Page<h1>')
    else if(req.url=='/About')
        res.end("<h1> About Us page</h1>")
    else if(req.url=='/product')
        res.end(`<h1>Mobile Phone </h1>
    <h2>price: 2500</h2>
    <p>Discount:5%</p>)
    <a href="#">Buy Now</a>
    `);
    else{
        res.statusCode=404;
        res.end(`<h1>404,NOT FOUND</h1>
            <p> Page not found</p>
            <a href='/'> Home <a/.
            `);
    }
});
server.listen(4444,()=>console.log("server is running"));