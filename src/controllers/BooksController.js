
let books = [
    {
        id: 1,
        title: "The Fellowship of The Ring",
        author: "J.R.R. Tolkien",
    }
]

export const BooksController = {
    listBooks(req, res){
        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify(books))
    }
}