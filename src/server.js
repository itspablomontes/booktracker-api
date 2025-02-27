import http from "node:http"
import { routes } from "./routes.js"
import {json} from "./middlewares/json.js"

const PORT = 3000

const server = http.createServer(async (req, res) => {
    const {url, method} = req
    await json(req, res)

    console.log(`Method: ${req.method} | Endpoint: ${req.url}`)

    const route = routes.find((routeObj) => (
        routeObj.endpoint === url && routeObj.method === method
    ))

    if(route){
        route.handler(req, res)
    }else{
        res.writeHead(400, {"content-type": "text/plain"})
        res.end(`Cannot ${req.method} ${req.url}`)
    }
})

server.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT} 🛠️`)
})