import mysql from 'mysql';

// Creating connection.
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bookstore_db"
});

// Connect
db.connect((err) => {
    if (err) {
        // If database is not created, creating new database.
        if (err.code === "ER_BAD_DB_ERROR") {
            let sqlQuery = "CREATE DATABASE bookstore_db2;";
            db.query(sqlQuery, (err) => console.log(err));
        }
        else {
            console.log("Error connecting to db: ", err);
            throw err;
        }
    }
    else {
        console.log("Connection successfull!");
    }
});

// Functions for interacting with db.

// For executing query.
let executeQuery = (sqlQuery) => {
    return new Promise((resolve, reject) => {
        db.query(sqlQuery, (err, result) => {
            if (err) {
                if (err.code === "ER_NO_SUCH_TABLE") {
                    console.log("No table found\nError: " + err)
                    reject({ "OK": false, "MSG": "No table found\nError: " + err });
                }
                else {
                    console.log(`Error while executing query: "${sqlQuery}"\n${err}\nError: ${err}`);
                    reject({ "OK": false, "MSG": `Error while executing query: "${sqlQuery}"\n${err}\nError: ${err}` });
                }
            }
            else {
                resolve({ "OK": true, "DATA": result });
            }
        })
    })
}

const getAllBooks = () => {
    const sqlQuery = "SELECT * FROM `book`;"
    return executeQuery(sqlQuery);
}

// getting books based on cateogry.
const getBook = (cateogry_id) => {
    const sqlQuery = `SELECT * FROM \`book\` WHERE category_id=${cateogry_id};`
    return executeQuery(sqlQuery)
}

// getting all categories
const getAllCateogies = () => {
    const sqlQuery = `SELECT * FROM category;`
    return executeQuery(sqlQuery);
}

// For inserting the new book.
const insertBook = (title, author, price, description, catagory_id) => {
    const sqlQuery = `INSERT INTO \`book\` (\`book_id\`, \`title\`, \`author\`, \`price\`, \`description\`, \`category_id\`) VALUES (NULL,  \"${title}\", \"${author}\", \"${price}\", \"${description}\", \"${catagory_id}\");`
    return executeQuery(sqlQuery);
}


// Updating a book
const updateBook = (book_id, books_new_details) => {
    let sqlQuery = "UPDATE `book` SET "

    for (let key in books_new_details) {
        sqlQuery += `\`${key}\`=\"${books_new_details[key]}\",`
    }
    return executeQuery(sqlQuery.slice(0, sqlQuery.length - 1) + `  WHERE \`book\`.\`book_id\` = ${book_id};`);
}

// Deleting books
const deleteBook = (book_id) => {
    const sqlQuery = `DELETE FROM \`book\` WHERE \`book\`.\`book_id\` = ${book_id};`;
    return executeQuery(sqlQuery);
}

export { db, getBook, insertBook, updateBook, deleteBook, getAllCateogies, getAllBooks };