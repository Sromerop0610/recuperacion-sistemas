const fs = require("fs");
const https = require("https");
const express = require("express");
const app = express();
const db = require("./db");

const PORT = 3443;

app.use(express.json());

/* ----------------------
   HEALTH CHECK
---------------------- */
app.get("/api/health", (req, res) => {
    res.json({ status: "OK" });
});

/* ----------------------
   LOGIN
---------------------- */
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    const query = "SELECT * FROM users WHERE username = ? AND password = ?";

    db.query(query, [username, password], (err, results) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error BD"
            });
        }

        if (results.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Credenciales incorrectas"
            });
        }

        res.json({
            success: true,
            message: "Login correcto",
            user: {
                username: results[0].username
            }
        });
    });
});

/* ----------------------
   REGISTER
---------------------- */
app.post("/api/register", (req, res) => {
    const { username, password } = req.body;

    const checkUser = "SELECT * FROM users WHERE username = ?";

    db.query(checkUser, [username], (err, results) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error BD"
            });
        }

        if (results.length > 0) {
            return res.status(400).json({
                success: false,
                message: "El usuario ya existe"
            });
        }

        const insert = "INSERT INTO users (username, password) VALUES (?, ?)";

        db.query(insert, [username, password], (err2) => {

            if (err2) {
                return res.status(500).json({
                    success: false,
                    message: "Error al registrar usuario"
                });
            }

            res.json({
                success: true,
                message: "Usuario registrado correctamente"
            });
        });
    });
});

/* ----------------------
   HTTPS SERVER START
---------------------- */
const options = {
    key: fs.readFileSync("./certs/key.pem"),
    cert: fs.readFileSync("./certs/cert.pem")
};

https.createServer(options, app).listen(PORT, () => {
    console.log(`Servidor HTTPS en https://localhost:${PORT}`);
});