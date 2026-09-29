import http from 'http'
import { parse as parseUrl } from 'url'
import { getAllTeams } from './teams.js'

const port = 5000

const sendJSON = (res, statusCode, data) => {

    res.writeHead(statusCode, {
        "content-type": "application/json"
    })

    res.end(data === undefined ? "" : JSON.stringify(data))
}

const parseJSONBody = (req) => {

    return new Promise((resolve, reject) => {

        let body = ""

        req.on("data", (chunk) => {
            body += chunk.toString()
        })

        req.on("end", () => {

            try {
                resolve(body ? JSON.parse(body) : {})
            }
            catch (error) {
                reject(error)
            }

        })

    })
}

const server = http.createServer((req, res) => {

    const { pathname, query } = parseUrl(req.url, true)

    const method = req.method

    console.log('pathname:', pathname)
    console.log('query:', query)
    console.log('Method:', method)

    if (pathname === '/api/v1/teams' && method === 'GET') {

        const teams = getAllTeams()

        const { total } = query

        return sendJSON(res, 200, teams)
    }

    return sendJSON(res, 404, {
        message: "Route not found"
    })
})

server.listen(port, () => {
    console.log("Server is running at", port)
})