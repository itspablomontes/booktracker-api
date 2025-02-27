import { BooksController } from "./controllers/BooksController.js"
import { buildRoutePath } from "./utils/buildRoutePath.js"

export const routes = [
    {
        endpoint: buildRoutePath("/books/:id"),
        method: "GET",
        handler: BooksController.getBookById
    },
    {
        endpoint: buildRoutePath("/books"),
        method: "GET",
        handler: BooksController.listBooks
    },
    {
        endpoint: buildRoutePath("/books"),
        method: "POST",
        handler: BooksController.insertBook
    },    
]