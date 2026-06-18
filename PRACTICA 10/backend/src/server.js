const express = require("express");
const app = express();
const db = require("./db");

const PORT = 3000;

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({ status: "OK" });
});

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    const query = "SELECT * FROM users WHERE username = ? AND password = ?";

    db.query(query, [username, password], (err, results) => {

        if (err) {
            return res.status(500).json({ success: false, message: "Error BD" });
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

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});