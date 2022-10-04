import express from "express";
import { db, insertBook, updateBook, deleteBook } from './bookstore_db.js';

const router = express.Router();

// route for listing all books.
router.get("/", (req, res) => {
    const sql_query = "SELECT * FROM `book`;"
    db.query(sql_query, (err, result) => {
        if (err) {
            if (err.code === "ER_NO_SUCH_TABLE") {
                throw err;
            }
            else {
                console.log(`Error while executing query: "${sql_query}"\n${err}`);
                throw err;
            }
        }
        res.send(result);
    })
});

// Route for inserting new books.
router.post("/insert", (req, res) => {
    const book_detail = req.body;
    const title = book_detail["title"];
    console.log(title)
    const author = book_detail["author"];
    console.log(author)
    const price = book_detail["price"];
    console.log(price)
    const desc = book_detail["description"];
    console.log(desc)
    const category_id = book_detail["category_id"];
    console.log(category_id)
    insertBook(title, author, price, desc, category_id);
    res.send(req.body);
});

// Get books based upon the category_id.
router.get("/get-book/:id", (req, res) => {
    const sql_query = `SELECT * FROM book WHERE category_id = ${req.params.id};`
    db.query(sql_query, (err, result) => {
        if (err) {
            if (err.code === "ER_NO_SUCH_TABLE") {
                throw err;
            }
            else {
                console.log(`Error while executing query: "${sql_query}"\n${err}`);
                throw err;
            }
        }
        res.send(result);
    })
})


// Updating existing book details.
router.put("/update/:id", (req, res) => {
    updateBook(req.params.id, req.body);
    res.sendStatus(200);
})

// deleting existing book.
router.delete("/del/:id", (req, res) => {
    deleteBook(req.params.id);
    res.sendStatus(200);
})

// getting all the categories
router.get("/cats", (req, res) => {
    const sql_query = `SELECT * FROM category;`
    db.query(sql_query, (err, result) => {
        if (err) {
            if (err.code === "ER_NO_SUCH_TABLE") {
                throw err;
            }
            else {
                console.log(`Error while executing query: "${sql_query}"\n${err}`);
                throw err;
            }
        }
        res.send(result);
    })
})



export default router;