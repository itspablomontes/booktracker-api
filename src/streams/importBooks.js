import fs from "fs"
import path from "path"
import { parse } from "csv-parse"
import fetch from "node-fetch"

const csvFilePath = path.join(new URL(".", import.meta.url).pathname, "books.csv")

async function importBooks(){
    const parser = fs.createReadStream(csvFilePath).pipe(parse({
        columns: false,
        skip_empty_lines: true
    }))
    let firstLine = true
    for await (const record of parser){
        if (firstLine) {
            firstLine = false
            continue
        }

        const [title, author] = record
    try{
        const response = await fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                title,
                author
            })
        })

        if (response.ok){
            console.log(`Book inserted ${title} - Status: ${response.status}`)
        } else {
            console.error(`Error inserting book: ${title} - Status: ${response.status} `)
        }
    }catch(error){
        console.error(`Error inserting book: ${title} - Status: ${error.message}`)
    }
   
}
    }

importBooks().then(() => console.log("Import completed")).catch((err) => console.error("Error in import", err))