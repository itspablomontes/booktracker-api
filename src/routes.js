import { BooksController } from "./controllers/BooksController.js"

export const routes = [
    {
        endpoint: "/books",
        method: "GET",
        handler: BooksController.listBooks
    },
]