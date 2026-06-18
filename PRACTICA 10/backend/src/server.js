const express = require("express");
const app = express();

const PORT = 3000;

// Middleware para leer JSON del body
app.use(express.json());

// ----------------------
// USERS SIMULADOS
// ----------------------
const users = [
    {
        username: "usuario1",
        password: "contraseña"
    },
    {
        username: "admin",
        password: "admin123"
    }
];

// ----------------------
// HEALTH CHECK
// ----------------------
app.get("/api/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Backend funcionando"
    });
});

// ----------------------
// LOGIN
// ----------------------
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Credenciales incorrectas"
        });
    }

    res.json({
        success: true,
        message: "Login correcto",
        user: {
            username: user.username
        }
    });
});

// ----------------------
// START SERVER
// ----------------------
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});