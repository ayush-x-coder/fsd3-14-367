import http from 'http'

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET')
    {
        res.end('Home page')
    }

    else if (req.url === '/product' && req.method === 'GET')
    {
        const products = [
            {
                id: 1,
                name: "mobile",
                price: 2000
            },
            {
                id: 2,
                name: "Duster",
                price: 10
            }
        ]

        res.writeHead(200, {
            "content-type": "application/json"
        })

        res.end(JSON.stringify(products))
    }

    else if (req.url === '/product' && req.method === 'POST')
    {
        // retrieve data from client
        let body = ''

        req.on("data", (chunk) =>
        {
            body += chunk
        })

        req.on("end", () =>
        {
            const product = JSON.parse(body)

            // send back the status and data
            res.writeHead(201, {
                "content-type": "application/json"
            })

            res.end(JSON.stringify({
                msg: "product added",
                product: product
            }))
        })
    }

    else if (req.url === '/product' && req.method === 'PUT')
    {
        res.end('update product')
    }

    else if (req.url === '/product' && req.method === 'DELETE')
    {
        res.end('remove product')
    }

    else
    {
        res.statusCode = 404
        res.end("Not found")
    }
})

server.listen(3000, () => console.log("SERVER IS RUNNING"))