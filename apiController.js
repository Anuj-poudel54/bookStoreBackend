import express from "express";
import { insertBook, updateBook, deleteBook, getBook, getAllCateogies, getAllBooks } from './bookstore_db.js';
import multer from "multer";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },

    filename: (req, file, cb) => {
        let fileExtention = file.originalname.split(".")[1];

        cb(null, file.fieldname + '-' + Date.now() + '.' + fileExtention);
    }
});

const upload = multer({ storage });

router.get("/image/:filename", (req, res) => {
    const filename = req.params.filename;
    const fileAbsolutePath = path.join(__dirname + '/uploads', filename);

    if (!fs.existsSync(fileAbsolutePath))
        res.status(404).send({ ok: false, msg: "File not found!" })

    res.status(200).sendFile(fileAbsolutePath);
})

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
router.post("/insert", upload.single('image'), async (req, res) => {
    const book_detail = req.body;

    const imageFileName = req.file?.filename;

    const title = book_detail["title"];
    const author = book_detail["author"];
    const price = book_detail["price"];
    const desc = book_detail["description"];
    const category_id = book_detail["category_id"];
    const fileurl = `http://localhost:3000/image/${imageFileName}`;

    const result = await insertBook(title, author, price, desc, category_id, fileurl);

    if (result['OK']) {
        res.status(200).send({
            book_detail
        });
    }
    else {
        res.status(500).send(result["MSG"]);
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
        res.send({ "MSG": "SUCCESS" });
    }
    else {
        res.send(result["MSG"]);
    }
})

// deleting existing book.
router.delete("/del/:id", async (req, res) => {
    const result = deleteBook(req.params.id);
    if (result['OK']) {
        res.send({ "MSG": "SUCCESS" });
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