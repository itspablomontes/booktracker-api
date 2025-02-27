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
    },
    insertBook(req, res){
        const {title, author} = req.body

        const newBook = {
            id: randomUUID(),
            title,
            author,
        }
        database.insert("books", newBook)
        return res.writeHead(201, {"content-type": "application/json"}).end(JSON.stringify(newBook))
    },
    updateBook(req, res){
        const { id } = req.params
        const {title, author} = req.body
        const updatedbook = {
            id,
            title,
            author
        }
            database.update("books", id, updatedbook)
            res.writeHead(204).end()
    },
    deleteBook(req,res){
        const { id } = req.params

        const deletedBook = database.delete("books", id)
        if(deletedBook){
            res.writeHead(204).end()
        } else{
            res.writeHead(404, {"content-type": "text/plain"}).end("Book not found!")
        }
    }
}