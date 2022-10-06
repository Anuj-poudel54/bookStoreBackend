import express from "express";
import { insertBook, updateBook, deleteBook, getBook, getAllCateogies, getAllBooks } from './bookstore_db.js';

const router = express.Router();

// route for listing all books.
router.get("/", async (req, res) => {
    const result = await getAllBooks();
    if (result['OK']) {
        res.send(result["DATA"]);
    }
    else {
        res.send(result["MSG"]);
    }
});

// Route for inserting new books.
router.post("/insert", async (req, res) => {
    const book_detail = req.body;
    const title = book_detail["title"];
    const author = book_detail["author"];
    const price = book_detail["price"];
    const desc = book_detail["description"];
    const category_id = book_detail["category_id"];
    const result = await insertBook(title, author, price, desc, category_id);
    
    if (result['OK']) {
        res.send({
            book_detail
        });
    }
    else {
        res.send(result["MSG"]);
    }

});

// Get books based upon the category_id.
router.get("/get-book/:id", async (req, res) => {
    const result = await getBook(req.params.id);
    if (result['OK']) {
        res.send(result["DATA"]);
    }
    else {
        res.send(result["MSG"]);
    }
})


// Updating existing book details.
router.put("/update/:id", async (req, res) => {
    const result = await updateBook(req.params.id, req.body);
    if (result['OK']) {
        res.send({"MSG": "SUCCESS"});
    }
    else {
        res.send(result["MSG"]);
    }
})

// deleting existing book.
router.delete("/del/:id", async (req, res) => {
    const result = deleteBook(req.params.id);
    if (result['OK']) {
        res.send({"MSG": "SUCCESS"});
    }
    else {
        res.send(result["MSG"]);
    }
})

// getting all the categories
router.get("/cats", async (req, res) => {
    const result = await getAllCateogies()
    if (result['OK']) {
        res.send(result["DATA"]);
    }
    else {
        res.send(result["MSG"]);
    }
})



export default router;