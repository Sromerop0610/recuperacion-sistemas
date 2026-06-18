const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "userpass",
    database: "readbooks"
});

connection.connect((err) => {
    if (err) {
        console.error("Error conectando a MySQL:", err);
        return;
    }
    console.log("Conectado a MySQL");
});

module.exports = connection;