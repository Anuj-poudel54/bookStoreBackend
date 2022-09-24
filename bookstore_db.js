import mysql from 'mysql';

// Creating connection.
const db= mysql.createConnection({
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
            let sql_query = "CREATE DATABASE bookstore_db2;";
            db.query(sql_query, (err) =>console.log(err));
        }
        else {
            console.log("Error connecting to db: ", err);
            throw err;
        }
    }
    else{
        console.log("Connection successfull!");
    }
});

// Functions for interacting with db.

// For executing query.
let execute_query = (sql_query) => {
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
        return result;
    })
}

// For inserting the new book.
const insertBook = (title, author, price, description, catagory_id) => {
    const sql_query = `INSERT INTO \`book\` (\`book_id\`, \`title\`, \`author\`, \`price\`, \`description\`, \`category_id\`) VALUES (NULL,  \"${title}\", \"${author}\", \"${price}\", \"${description}\", \"${catagory_id}\");`
    execute_query(sql_query);
}


// Updating a book
const updateBook = (book_id, books_new_details) => {
    let sql_query = "UPDATE `book` SET "

    for (let key in books_new_details) {
        sql_query += `\`${key}\`=\"${books_new_details[key]}\",`
    }
    execute_query(sql_query.slice(0, sql_query.length - 1) + `  WHERE \`book\`.\`book_id\` = ${book_id};`);
}

// Deleting books
const deleteBook = (book_id) => {
    const sql_query = `DELETE FROM \`book\` WHERE \`book\`.\`book_id\` = ${book_id};`;
    execute_query(sql_query);
}

export { db, insertBook, updateBook, deleteBook};