import http from "node:http"
import url from "node:url"
import { routes } from "./routes.js"


const PORT = 3000

const server = http.createServer((req, res) => {
    console.log(`Method: ${req.method} | Endpoint: ${req.url}`)
    const route = routes.find((routeObj) => (
        routeObj.endpoint === req.url && routeObj.method === req.method
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