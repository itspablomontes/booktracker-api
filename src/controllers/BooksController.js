import { Database } from "../database.js"
import { randomUUID } from "node:crypto"
import { buildRoutePath } from "../utils/buildRoutePath.js"


const database = new Database()


export const BooksController = {
    listBooks(req, res){
        res.writeHead(200, {"content-type": "application/json"})
        const books = database.select("books")
        return res.end(JSON.stringify(books))
    },
}