document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registerForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const res = await fetch("http://localhost:3001/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (data.success) {
                alert("Usuario registrado correctamente");
                window.location.href = "login.html";
            } else {
                alert(data.message);
            }

        } catch (err) {
            alert("Error de conexión");
        }
    });

});