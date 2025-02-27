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
    getBookById(req, res){
        const { id } = req.params
        const book = database.selectItem("books", id)
        if(book){
            res.writeHead(200, {"content-type": "application/json"})
            res.end(JSON.stringify(book))
        } else{
            res.writeHead(404, {"content-type": "text/plain"})
            res.end("Book not found!")
        }
    }
}