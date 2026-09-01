import http from 'http'
import { createReadStream } from 'fs'
import { readFile } from 'fs/promises'

const server = http.createServer(async (req, res) => {

    if (req.url === '/stream') {

        const stream = createReadStream('big.txt', {
            encoding: 'utf-8'
        })

        stream.on('error', (err) => {
            console.error(err)
            res.statusCode = 500
            res.end('Error reading file')
        })

        stream.pipe(res)

    }

    else if (req.url === '/normal') {

        try {
            const text = await readFile('big.txt', 'utf-8')

            res.statusCode = 200
            res.setHeader('Content-Type', 'text/plain')
            res.end(text)

        } catch (error) {
            console.error(error)
            res.statusCode = 500
            res.end('Error reading file')
        }

    }

    else if (req.url === '/') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')

        const data = createReadStream('product.html')

        data.on('error', (err) => {
            console.error(err)
            res.statusCode = 500
            res.end('Error loading home page')
        })

        data.pipe(res)

    }

    else if (req.url === '/product') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')

        const data = createReadStream('product.html')

        data.on('error', (err) => {
            console.error(err)
            res.statusCode = 500
            res.end('Error loading product page')
        })

        data.pipe(res)

    }

    else if (req.url === '/about') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')

        const data = createReadStream('product.html')

        data.on('error', (err) => {
            console.error(err)
            res.statusCode = 500
            res.end('Error loading about page')
        })

        data.pipe(res)

    }

    else if (req.url === '/contact') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')

        const data = createReadStream('product.html')

        data.on('error', (err) => {
            console.error(err)
            res.statusCode = 500
            res.end('Error loading contact page')
        })

        data.pipe(res)

    }

    else {

        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html')

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>404</title>
            </head>
            <body>
                <h1>404 - Page Not Found</h1>
            </body>
            </html>
        `)
    }

})

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
});